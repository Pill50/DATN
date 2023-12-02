package com.server.controller.response;

import lombok.Data;

@Data
public class GetInfoResponse {
    private String waterMeterId;
    private String address;
    private String fullName;
    private String email;
    private String phoneNumber;

    public GetInfoResponse(String waterMeterId, String address, String fullName, String email, String phoneNumber) {
        this.waterMeterId = waterMeterId;
        this.address = address;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    public GetInfoResponse(){

    }
}
