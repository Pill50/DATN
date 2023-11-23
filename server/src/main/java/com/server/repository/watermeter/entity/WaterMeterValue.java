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
    private Date createdAt = Date.from(Instant.now());
}
