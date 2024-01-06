package com.server.controller.response;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Device {
    private int id;
    private double longitude;
    private double latitude;
    private List<Device> children;
    private Date installedAt;
    private boolean status;

    public Device(int id, double longitude, double latitude, List<Device> children, Date installedAt, boolean status) {
        this.id = id;
        this.longitude = longitude;
        this.latitude = latitude;
        this.children = children;
        this.installedAt = installedAt;
        this.status = status;
    }
}
