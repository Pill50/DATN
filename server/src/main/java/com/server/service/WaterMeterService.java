package com.server.service;

import com.server.controller.request.SaveMeterWaterRequest;
import com.server.controller.response.GetAllDeviceResponse;
import com.server.repository.watermeter.entity.Device;
import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.repository.watermeter.repository.WaterMeterDeviceRepository;
import com.server.repository.watermeter.repository.WaterMeterValueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class WaterMeterService {
    @Autowired
    private WaterMeterDeviceRepository waterMeterDeviceRepository;
    @Autowired
    private WaterMeterValueRepository waterMeterValueRepository;
    public void saveWaterMeter(SaveMeterWaterRequest request){
        waterMeterDeviceRepository.save(
            new WaterMeterDevice(
                request.getId(),
                request.getUserId(),
                request.getSuperMeterId(),
                request.getType(),
                request.getAddress(),
                request.getLongitude(),
                request.getLatitude(),
                request.getInstallationAt(),
                request.isStatus()
            )
        );
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

            List<Device> childrens = waterMeterDeviceRepository.findBySuperMeterId(device.getId()).stream().map(chilrend -> new Device(
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
    public void addChildren(Integer parentId, Integer children){
        WaterMeterDevice device = waterMeterDeviceRepository.findById(children).get();
        device.setSuperMeterId(parentId);
        waterMeterDeviceRepository.save(device);
    }
}
