package com.server.controller.request;

import lombok.Data;

import java.util.Date;

@Data
public class SaveMeterWaterRequest {
    private int id;
    private int userId;
    private int superMeterId;
    private String address;
    private Date installationAt;
    private boolean status;
}
