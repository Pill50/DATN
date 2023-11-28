package com.server.repository.watermeter.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class WaterMeterDevice {
    @Id
    private int id;
    private int userId;
    private int superMeterId;
    private String type;
    private String address;
    private double longitude;
    private double latitude;
    private Date installationAt;
    private boolean status;

    public WaterMeterDevice(int id, int userId, int superMeterId, String type, String address, double longitude, double latitude, Date installationAt, boolean status) {
        this.id = id;
        this.userId = userId;
        this.superMeterId = superMeterId;
        this.type = type;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.installationAt = installationAt;
        this.status = status;
    }

    public WaterMeterDevice() {}
}
