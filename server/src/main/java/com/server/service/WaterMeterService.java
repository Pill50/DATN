package com.server.service;

import com.server.controller.request.SaveMechanicalValueRequest;
import com.server.controller.request.SavePulseValueRequest;
import com.server.controller.request.UpdateInfoRequest;
import com.server.controller.response.GetAllDeviceResponse;
import com.server.controller.response.Device;
import com.server.repository.user.entity.UserEntity;
import com.server.repository.user.repository.UserRepository;
import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.repository.watermeter.repository.WaterMeterDeviceRepository;
import com.server.repository.watermeter.repository.WaterMeterValueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
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

    public void SaveMechanicalValue(SaveMechanicalValueRequest request){
        waterMeterValueRepository.save(
            new WaterMeterValue(
                request.getWaterMeterId(),
                0,
                request.getTotalRateValue(),
                request.getImageUrl()
            )
        );
    }

    public void SavePulseValue(SavePulseValueRequest request){
        waterMeterValueRepository.save(
            new WaterMeterValue(
                request.getWaterMeterId(),
                request.getFlowRateValue(),
                0,
                ""
            )
        );
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
