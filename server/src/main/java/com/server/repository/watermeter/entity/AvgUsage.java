package com.server.repository.watermeter.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class AvgUsage {
    @Id
    private String waterMeterId;
    private float avgUsage;
    private int totalRecord;
}
