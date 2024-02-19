package com.server.model;

import lombok.Data;

@Data
public class EventMessage {
    private String userId;
    private float usageOfThisMonth;

    public EventMessage(String userId, float usageOfThisMonth) {
        this.userId = userId;
        this.usageOfThisMonth = usageOfThisMonth;
    }
}
