package com.server.controller.request;

import lombok.Data;

@Data
public class ForgotPassword {
    String email;
    String url;
}
