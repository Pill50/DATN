package com.server.model;

import lombok.Data;

@Data
public class EventMessage {
    private String waterMeterId;
    private float usageOfThisMonth;

    public EventMessage(String waterMeterId, float usageOfThisMonth) {
        this.waterMeterId = waterMeterId;
        this.usageOfThisMonth = usageOfThisMonth;
    }
}
