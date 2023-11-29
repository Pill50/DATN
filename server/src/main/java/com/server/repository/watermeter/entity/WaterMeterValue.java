package com.server.repository.watermeter.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.Instant;
import java.util.Date;

@Entity
@Data
public class WaterMeterValue {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private int waterMeterId;
    private int flowRateValue;
    private int totalRateValue;
    private String imageUrl;
    private Date updatedAt = Date.from(Instant.now());

    public WaterMeterValue(int waterMeterId, int flowRateValue, int totalRateValue, String imageUrl) {
        this.waterMeterId = waterMeterId;
        this.flowRateValue = flowRateValue;
        this.totalRateValue = totalRateValue;
        this.imageUrl = imageUrl;
    }
    public WaterMeterValue(){};
}
