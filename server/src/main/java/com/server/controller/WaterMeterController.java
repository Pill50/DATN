package com.server.controller;

import com.server.controller.request.SaveMeterWaterRequest;
import com.server.controller.response.GetAllDeviceResponse;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.service.WaterMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping("/water-meter")
public class WaterMeterController {

    @Autowired
    private WaterMeterService waterMeterService;

    @GetMapping("/list")
    public GetAllDeviceResponse getAllDevice(){
        return waterMeterService.getAllDevice();
    }

    @GetMapping("/list-by-id")
    public List<WaterMeterValue> getById(@RequestParam Integer id){
        return waterMeterService.getById(id);
    }


    @PostMapping("/create")
    public void saveMeterWater(@RequestBody SaveMeterWaterRequest request){
        waterMeterService.saveWaterMeter(request);
    }

    @GetMapping("/add-children")
    public void addChildren(@RequestParam Integer childrenId, @RequestParam Integer parentId){
        waterMeterService.addChildren(parentId, childrenId);
    }
}


