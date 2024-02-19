package com.server.controller;

import com.server.controller.request.*;
import com.server.controller.response.GetAllDeviceResponse;
import com.server.controller.response.GetInfoResponse;
import com.server.model.UserRole;
import com.server.repository.user.entity.UserEntity;
import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.service.EmailSenderService;
import com.server.service.UserService;
import com.server.service.WaterMeterService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@RequestMapping("/water-meter")
@PreAuthorize("hasAuthority('ADMIN')")
public class WaterMeterController {

    @Autowired
    private EmailSenderService senderService;
    @Autowired
    private WaterMeterService waterMeterService;
    @Autowired
    private UserService userService;

    @GetMapping("/list")
    public GetAllDeviceResponse getAllDevice(){
        return waterMeterService.getAllDevice();
    }

    @GetMapping("/list-by-id")
    public List<WaterMeterValue> getListById(@RequestParam String id){
        return waterMeterService.getById(id);
    }

    @GetMapping("/by-id")
    public GetInfoResponse getById(@RequestParam String waterMeterId){
        WaterMeterDevice device = waterMeterService.getDeviceByWaterMeterId(waterMeterId);
        if(device == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Device Not Found");
        }
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

    @PostMapping("/add-line")
    public void addLine(@RequestBody AddLineRequest request){
        if(!waterMeterService.addLine(request.getParentId(), request.getChildrenId())) throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Can not add line");
    }

    @PostMapping("/delete-line")
    public void deleteLine(@RequestBody DeleteLineRequest request){
        if(!waterMeterService.deleteLine(request.getId1(), request.getId2())) throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Can not delete line");
    }

//    @PostMapping("/save-digital-value")
//    public void saveDigitalValue(@RequestBody SaveMechanicalValueRequest request){
//        waterMeterService.SaveMechanicalValue(request.getWaterMeterId(), request);
//    }

//    @PostMapping("/save-pulse-value")
//    public void savePulseValue(@RequestBody SavePulseValueRequest request){
//        waterMeterService.SavePulseValue(request);
//    }

    @PostMapping("/update-info")
    public void updateStatus(@RequestBody UpdateInfoRequest request){
        Integer userId = waterMeterService.updateStatus(request);
        userService.updateInfo(request, userId);
    }

    @PostMapping("/sendEmail")
    public String sendEmail() throws MessagingException, UnsupportedEncodingException {
        String recipientEmail = "phatnguyen20cm@gmail.com";
        String subject = "Hello from Spring Boot";
        String content = "<p>Hello,</p><p>This is a test email sent from Spring Boot.</p>";

        try {
            senderService.sendSimpleEmail(recipientEmail,
                    subject,
                    content);
            return "Success";
        } catch (Exception e) {
            return "Failed to send email. Error: " + e.getMessage();
        }
    }
}


