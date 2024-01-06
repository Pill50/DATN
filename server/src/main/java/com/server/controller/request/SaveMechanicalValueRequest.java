package com.server.controller.request;

import lombok.Data;

@Data
public class SaveMechanicalValueRequest {
    private String waterMeterId;
    private int totalRateValue;
    private String imageUrl;
}
