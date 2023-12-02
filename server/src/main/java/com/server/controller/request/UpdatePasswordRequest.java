package com.server.controller.request;

import lombok.Data;

@Data
public class UpdatePasswordRequest {
    private Integer userId;
    private String password;
}
