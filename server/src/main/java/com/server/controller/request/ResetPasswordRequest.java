package com.server.controller.request;

import lombok.Data;

@Data
public class ResetPasswordRequest {
    String token;
    String password;
}
