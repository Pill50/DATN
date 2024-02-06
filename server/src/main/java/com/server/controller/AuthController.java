package com.server.controller;

import com.server.controller.request.AuthRequestDTO;
import com.server.controller.request.ForgotPassword;
import com.server.controller.request.JwtResponseDTO;
import com.server.controller.request.ResetPasswordRequest;
import com.server.repository.user.entity.UserEntity;
import com.server.service.JwtService;
import com.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;
    @PostMapping("/login")
    public JwtResponseDTO AuthenticateAndGetToken(@RequestBody AuthRequestDTO authRequestDTO){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequestDTO.getEmail(), authRequestDTO.getPassword()));
        if(authentication.isAuthenticated()){
            UserEntity user = userService.getByEmail(authRequestDTO.getEmail());
            return JwtResponseDTO.builder()
                    .accessToken(jwtService.GenerateToken(authRequestDTO.getEmail()))
                    .userId(user.getId())
                    .role(user.getRole())
                    .build();
        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }

    @PostMapping("/forgot-password")
    public boolean forgotPassword(@RequestBody ForgotPassword request){
        return userService.forgotPassword(request.getEmail(), request.getUrl());
    }

    @PostMapping("/reset-password")
    public boolean resetPassword(@RequestBody ResetPasswordRequest request){
        return userService.resetPassword(request.getToken(), request.getPassword());
    }
}
