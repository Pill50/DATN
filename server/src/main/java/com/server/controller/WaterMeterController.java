package com.server.controller;

import com.server.controller.request.CreateDeviceRequest;
import com.server.controller.request.SaveMechanicalValueRequest;
import com.server.controller.request.SavePulseValueRequest;
import com.server.controller.response.GetAllDeviceResponse;
import com.server.repository.user.entity.UserEntity;
import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.service.UserService;
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
    @Autowired
    private UserService userService;

    @GetMapping("/list")
    public GetAllDeviceResponse getAllDevice(){
        return waterMeterService.getAllDevice();
    }

    @GetMapping("/list-by-id")
    public List<WaterMeterValue> getById(@RequestParam Integer id){
        return waterMeterService.getById(id);
    }


    @PostMapping("/create")
    public void saveMeterWater(@RequestBody CreateDeviceRequest request){
        UserEntity user = userService.create(
            new UserEntity(
                request.getEmail(),
                request.getPhoneNumber(),
                request.getFullName(),
                request.getAddress(),
                request.getPhoneNumber(),
                "USER"
            )
        );
        waterMeterService.createDevice(
            new WaterMeterDevice(
                request.getWaterMeterId(),
                user.getId(),
                request.getType(),
                request.getLongitude(),
                request.getLatitude()
            )
        );
    }

    @GetMapping("/add-children")
    public void addChildren(@RequestParam Integer childrenId, @RequestParam Integer parentId){
        waterMeterService.addChildren(parentId, childrenId);
    }

    @PostMapping("/save-digital-value")
    public void saveDigitalValue(@RequestBody SaveMechanicalValueRequest request){
        waterMeterService.SaveMechanicalValue(request);
    }

    @PostMapping("/save-pulse-value")
    public void savePulseValue(@RequestBody SavePulseValueRequest request){
        waterMeterService.SavePulseValue(request);
    }
}


