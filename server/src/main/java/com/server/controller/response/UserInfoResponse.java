package com.server.controller.response;

import com.server.repository.watermeter.entity.WaterMeterValue;
import lombok.Data;

import java.util.List;

@Data
public class UserInfoResponse {
    private String address;
    private String email;
    private String fullName;
    private String phoneNumber;
    private List<WaterMeterValue> listValue;
}
