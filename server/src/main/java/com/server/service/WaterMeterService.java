package com.server.service;

import com.server.controller.request.SaveMechanicalValueRequest;
import com.server.controller.request.SavePulseValueRequest;
import com.server.controller.request.UpdateInfoRequest;
import com.server.controller.response.GetAllDeviceResponse;
import com.server.controller.response.Device;
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

            List<Device> childrens = waterMeterDeviceRepository.findBySuperMeterId(device.getSuperMeterId()).stream().map(chilrend -> new Device(
                chilrend.getId(),
                chilrend.getAddress(),
                chilrend.getLongitude(),
                chilrend.getLatitude(),
                null,
                chilrend.getInstallationAt(),
                chilrend.isStatus()
            )).collect(Collectors.toList());;
            listDevices.add(
                new Device(
                    device.getId(),
                    device.getAddress(),
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
    public List<WaterMeterValue> getById(Integer id){
        return waterMeterValueRepository.findByWaterMeterId(id);
    }
    public void addChildren(String parentId, String children){
        WaterMeterDevice device = waterMeterDeviceRepository.findByWaterMeterId(children);
        device.setSuperMeterId(parentId);
        waterMeterDeviceRepository.save(device);
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
