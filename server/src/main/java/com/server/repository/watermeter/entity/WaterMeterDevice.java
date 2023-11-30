package com.server.repository.watermeter.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.Instant;
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

    public WaterMeterDevice(int id, int userId, String type, double longitude, double latitude) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.longitude = longitude;
        this.latitude = latitude;
        this.installationAt = Date.from(Instant.now());
        this.status = true;
    }

    public WaterMeterDevice() {}
}
