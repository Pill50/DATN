package com.server.controller.response;

import lombok.Data;

@Data
public class GetInfoResponse {
    private String waterMeterId;
    private String address;
    private String fullName;
    private String email;
    private String phoneNumber;
    private boolean status;

    public GetInfoResponse(String waterMeterId, String address, String fullName, String email, String phoneNumber, boolean status) {
        this.waterMeterId = waterMeterId;
        this.address = address;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.status = status;
    }
    public GetInfoResponse(){

    }
}
