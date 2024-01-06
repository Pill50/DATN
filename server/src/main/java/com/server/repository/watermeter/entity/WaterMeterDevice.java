package com.server.repository.watermeter.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.Instant;
import java.util.Date;

@Entity
@Data
public class WaterMeterDevice {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    @Column(unique = true)
    private String waterMeterId;
    @Column(unique = true)
    private int userId;
    private String superMeterId;
    private String type;
    private double longitude;
    private double latitude;
    private Date installationAt;
    private boolean status;

    public WaterMeterDevice(String waterMeterId, int userId, String type, double longitude, double latitude) {
        this.waterMeterId = waterMeterId;
        this.userId = userId;
        this.type = type;
        this.longitude = longitude;
        this.latitude = latitude;
        this.installationAt = Date.from(Instant.now());
        this.status = true;
    }

    public WaterMeterDevice() {}
}
