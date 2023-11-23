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
    private String address;
    private Date installationAt;
    private boolean status;

    public WaterMeterDevice(int id, int userId, int superMeterId, String address, Date installationAt, boolean status) {
        this.id = id;
        this.userId = userId;
        this.superMeterId = superMeterId;
        this.address = address;
        this.installationAt = installationAt;
        this.status = status;
    }

    public WaterMeterDevice() {

    }
}
