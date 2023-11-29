package com.server.controller;

import com.server.controller.request.SaveDigitalValueRequest;
import com.server.service.WaterMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/digital-water-meter")
public class DigitalWaterMeterController {
    @Autowired
    private WaterMeterService waterMeterService;

    @PostMapping("/save-value")
    public void saveDigitalValue(@RequestBody SaveDigitalValueRequest request){
        waterMeterService.saveValueDigitalWaterMeter(request);
    }
}
