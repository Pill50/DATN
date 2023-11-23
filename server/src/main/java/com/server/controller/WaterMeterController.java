package com.server.controller;

import com.server.controller.request.SaveMeterWaterRequest;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.service.WaterMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/water-meter")
public class WaterMeterController {

    @Autowired
    private WaterMeterService waterMeterService;
    @GetMapping("/list-by-id")
    public List<WaterMeterValue> getById(@RequestParam Integer id){
        return waterMeterService.getById(id);
    }

    @PostMapping("/")
    public void saveMeterWater(@RequestBody SaveMeterWaterRequest request){
        waterMeterService.saveWaterMeter(request);
    }
}


