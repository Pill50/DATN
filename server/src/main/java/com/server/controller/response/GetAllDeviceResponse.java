package com.server.controller.response;

import lombok.Data;

import java.util.List;

@Data
public class GetAllDeviceResponse {
    private int totalWaterMeters;
    private int totalPulse;
    private int totalDigital;
    private int statusActive;
    private List<Device> devices;

    public GetAllDeviceResponse(int totalWaterMeters, int totalPulse, int totalDigital, int statusActive, List<Device> devices) {
        this.totalWaterMeters = totalWaterMeters;
        this.totalPulse = totalPulse;
        this.totalDigital = totalDigital;
        this.statusActive = statusActive;
        this.devices = devices;
    }
}

