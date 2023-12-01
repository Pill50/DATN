package com.server.controller.request;

import lombok.Data;

@Data
public class UpdateStatusRequest {
    private String waterMeterId;
    private boolean status;
}
