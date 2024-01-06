package com.server.controller.response;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Device {
    private String WaterMeterId;
    private double longitude;
    private double latitude;
    private List<Device> children;
    private Date installedAt;
    private boolean status;

    public Device(String WaterMeterId, double longitude, double latitude, List<Device> children, Date installedAt, boolean status) {
        this.WaterMeterId = WaterMeterId;
        this.longitude = longitude;
        this.latitude = latitude;
        this.children = children;
        this.installedAt = installedAt;
        this.status = status;
    }
}
