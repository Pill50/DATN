package com.server.controller.request;

import lombok.Data;

@Data
public class CreateDeviceRequest {
    private String waterMeterId;
    private String type;
    private String address;
    private double longitude;
    private double latitude;
    private String email;
    private String fullName;
    private String phoneNumber;
}
