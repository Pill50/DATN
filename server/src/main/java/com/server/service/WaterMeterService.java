package com.server.service;

import com.server.controller.request.SaveMechanicalValueRequest;
import com.server.controller.request.SavePulseValueRequest;
import com.server.controller.request.UpdateInfoRequest;
import com.server.controller.response.GetAllDeviceResponse;
import com.server.controller.response.Device;
import com.server.model.EventMessage;
import com.server.repository.user.entity.UserEntity;
import com.server.repository.user.repository.UserRepository;
import com.server.repository.watermeter.entity.AvgUsage;
import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.repository.watermeter.repository.AvgUsageRepository;
import com.server.repository.watermeter.repository.WaterMeterDeviceRepository;
import com.server.repository.watermeter.repository.WaterMeterValueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WaterMeterService {
    @Autowired
    private WaterMeterDeviceRepository waterMeterDeviceRepository;
    @Autowired
    private WaterMeterValueRepository waterMeterValueRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AvgUsageRepository avgUsageRepository;
    @Autowired
    private EventStreamingService eventStreamingService;

    public WaterMeterDevice getByUserId(Integer userId){
        return waterMeterDeviceRepository.findByUserId(userId);
    }
    public void createDevice(WaterMeterDevice device){
        try{
            waterMeterDeviceRepository.save(device);
        }
        catch (Exception e){
            throw new ResponseStatusException(HttpStatus.EXPECTATION_FAILED, "Device has been created");
        }
    }
    public WaterMeterDevice getDeviceByWaterMeterId(String id){
        return waterMeterDeviceRepository.findByWaterMeterId(id);
    }
    public GetAllDeviceResponse getAllDevice(){
        List<Device> listDevices = new ArrayList<Device>();

        List<WaterMeterDevice> devices = waterMeterDeviceRepository.findAll();
        int totalPulse = 0;
        int totalDigital = 0;
        int statusActive = 0;

        for(WaterMeterDevice device : devices){
            if(device.isStatus()) statusActive++;
            if(device.getType().equals("pulse")) totalPulse++;
            if(device.getType().equals("digital")) totalDigital++;

            UserEntity user = userRepository.findById(device.getUserId()).orElse(new UserEntity());
            List<Device> childrens = waterMeterDeviceRepository.findBySuperMeterId(device.getWaterMeterId()).stream().map(children ->
                    {
                        UserEntity userOfChildren = userRepository.findById(children.getUserId()).orElse(new UserEntity());
                        return new Device(
                                children.getWaterMeterId(),
                                userOfChildren.getAddress(),
                                children.getLongitude(),
                                children.getLatitude(),
                                null,
                                children.getInstallationAt(),
                                children.isStatus()
                        );
                    }).collect(Collectors.toList());;
            listDevices.add(
                new Device(
                    device.getWaterMeterId(),
                    user.getAddress(),
                    device.getLongitude(),
                    device.getLatitude(),
                    childrens,
                    device.getInstallationAt(),
                    device.isStatus()
                )
            );
        }
        GetAllDeviceResponse response = new GetAllDeviceResponse(
                devices.size(),
                totalPulse,
                totalDigital,
                statusActive,
                listDevices
        );

        return response;
    }
    public List<WaterMeterValue> getById(String id){
        return waterMeterValueRepository.findByWaterMeterId(id);
    }

    public boolean addLine(String parentId, String children){
        WaterMeterDevice device = waterMeterDeviceRepository.findByWaterMeterId(children);
        System.out.println(device.getSuperMeterId());
        if(device.getSuperMeterId() != null) return false;
        System.out.println(parentId);
        device.setSuperMeterId(parentId);
        waterMeterDeviceRepository.save(device);
        return true;
    }

    public boolean deleteLine(String id1, String id2){
        WaterMeterDevice device = waterMeterDeviceRepository.findByWaterMeterId(id1);
        if(device.getSuperMeterId() != null && device.getSuperMeterId().equals(id2)){
            device.setSuperMeterId(null);
            waterMeterDeviceRepository.save(device);
            return true;
        }
        device = waterMeterDeviceRepository.findByWaterMeterId(id2);
        if(device.getSuperMeterId() != null && device.getSuperMeterId().equals(id1)){
            device.setSuperMeterId(null);
            waterMeterDeviceRepository.save(device);
            return true;
        }
        return false;
    }

    public void InsertWaterValue(String waterMeterId, float flowRateValue, float totalFlowValue, String imageUrl){
        waterMeterValueRepository.save(
            new WaterMeterValue(
                waterMeterId,
                flowRateValue,
                totalFlowValue,
                imageUrl
            )
        );
        Calendar cal = Calendar.getInstance();
        int day = cal.get(Calendar.DATE);
        int month = cal.get(Calendar.MONTH);
        float avgOfMonth = 0;
        if(flowRateValue > 0 && day == getLastDayOfMonthUsingCalendar(month)){
            avgOfMonth = waterMeterValueRepository.findAvgUsage(month+1);
        }
        if(imageUrl != ""){
            avgOfMonth = totalFlowValue;
        }
        if(avgOfMonth != 0){
            AvgUsage avgUsage = avgUsageRepository.findByWaterMeterId(waterMeterId);
            if(avgUsage != null){
                if(isHigher(avgUsage.getAvgUsage(), avgOfMonth)){
                    // push noti
                    System.out.println("Noti");
                    eventStreamingService.sendEvent(new EventMessage(waterMeterId, avgOfMonth));
                }
                updateAvgUsage(avgUsage, avgOfMonth, waterMeterId);
            }
            else {
                updateAvgUsage(new AvgUsage(), avgOfMonth, waterMeterId);
            }
        }
    }

    private int getLastDayOfMonthUsingCalendar(int month) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.MONTH, month);
        return cal.getActualMaximum(Calendar.DAY_OF_MONTH);
    }

    private boolean updateAvgUsage(AvgUsage avgUsage, float avgOfMonth, String waterMeterId){
        int total = avgUsage.getTotalRecord();
        float avg = avgUsage.getAvgUsage();
        avgUsage.setAvgUsage((avg*total+avgOfMonth)/(total+1));
        avgUsage.setWaterMeterId(waterMeterId);
        avgUsage.setTotalRecord(total+1);
        avgUsageRepository.save(avgUsage);
        return true;
    }

    private boolean isHigher(float avgUsage, float value){
        if(value > 1.25*avgUsage){
            return true;
        }
        return false;
    }
    public Integer updateStatus(UpdateInfoRequest request){
        try{
            WaterMeterDevice device = waterMeterDeviceRepository.findByWaterMeterId(request.getWaterMeterId());
            device.setStatus(request.isStatus());
            waterMeterDeviceRepository.save(device);
            return device.getUserId();
        }
        catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Device Not Found");
        }
    }
}
