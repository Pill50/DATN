package com.server.controller;

import com.server.controller.request.UpdatePasswordRequest;
import com.server.controller.response.UserInfoResponse;
import com.server.repository.user.entity.Login;
import com.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/user")
@CrossOrigin()
@PreAuthorize("hasAuthority('USER')")
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping("/update-password")
    public void updatePassword(@RequestBody UpdatePasswordRequest request){
        userService.updatePassword(request.getPassword(), request.getUserId());
    }

    @GetMapping("/by-id")
    public UserInfoResponse getById(@RequestParam Integer userId){
        try{
            return userService.getUserInfo(userId);
        }
        catch (Exception e){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Device Not Found or Invalid User");
        }
    }
}
