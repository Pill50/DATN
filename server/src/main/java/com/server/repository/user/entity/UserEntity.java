package com.server.repository.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Generated;

@Entity
@Data
public class UserEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String email;
    private String password;
    private String fullName;
    private String address;
    private String phoneNumber;
    private String role;
    private String token;

    public UserEntity(String email, String password, String fullName, String address, String phoneNumber, String role) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
    public UserEntity(){
    }
}
