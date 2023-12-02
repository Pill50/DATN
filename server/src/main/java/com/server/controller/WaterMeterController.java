package com.server.controller;

import com.server.controller.request.*;
import com.server.controller.response.GetAllDeviceResponse;
import com.server.controller.response.GetInfoResponse;
import com.server.model.UserRole;
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
    public List<WaterMeterValue> getListById(@RequestParam Integer id){
        return waterMeterService.getById(id);
    }

    @GetMapping("/by-id")
    public GetInfoResponse getById(@RequestParam String waterMeterId){
        WaterMeterDevice device = waterMeterService.getDeviceByWaterMeterId(waterMeterId);
        UserEntity user = userService.getById(device.getUserId());
        return new GetInfoResponse(
            waterMeterId,
            user.getAddress(),
            user.getFullName(),
            user.getEmail(),
            user.getPhoneNumber(),
            device.isStatus()
        );
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
                UserRole.USER
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

    @PostMapping("/add-children")
    public void addChildren(@RequestBody AddChildrenRequest request){
        waterMeterService.addChildren(request.getParentId(), request.getChildrenId());
    }

    @PostMapping("/save-digital-value")
    public void saveDigitalValue(@RequestBody SaveMechanicalValueRequest request){
        waterMeterService.SaveMechanicalValue(request);
    }

    @PostMapping("/save-pulse-value")
    public void savePulseValue(@RequestBody SavePulseValueRequest request){
        waterMeterService.SavePulseValue(request);
    }

    @PostMapping("/update-info")
    public void updateStatus(@RequestBody UpdateInfoRequest request){
        Integer userId = waterMeterService.updateStatus(request);
        userService.updateInfo(request, userId);
    }
}


