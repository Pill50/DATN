package com.server.controller.request;

import lombok.Data;

@Data
public class SavePulseValueRequest {
    private int waterMeterId;
    private int flowRateValue;
}
