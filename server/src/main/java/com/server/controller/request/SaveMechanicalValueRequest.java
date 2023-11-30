package com.server.controller.request;

import lombok.Data;

@Data
public class SaveMechanicalValueRequest {
    private int waterMeterId;
    private int totalRateValue;
    private String imageUrl;
}
