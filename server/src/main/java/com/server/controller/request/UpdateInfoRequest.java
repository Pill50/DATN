package com.server.controller.request;

import lombok.Data;

@Data
public class UpdateInfoRequest {
    private String waterMeterId;
    private String email;
    private String fullName;
    private String phoneNumber;
    private boolean status;
}
