package com.server.controller.request;

import lombok.Data;

@Data
public class SavePulseValueRequest {
    private String waterMeterId;
    private int flowRateValue;
}
