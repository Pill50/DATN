package com.server.service;

import com.server.controller.request.SaveMeterWaterRequest;
import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.repository.watermeter.repository.WaterMeterDeviceRepository;
import com.server.repository.watermeter.repository.WaterMeterValueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
                        request.getAddress(),
                        request.getInstallationAt(),
                        request.isStatus()
                )
        );
    }

    public List<WaterMeterValue> getById(Integer id){
        return waterMeterValueRepository.findByWaterMeterId(id);
    }
}
