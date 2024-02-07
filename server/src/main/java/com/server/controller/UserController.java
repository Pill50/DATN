package com.server.controller;

import com.server.controller.request.UpdatePasswordRequest;
import com.server.controller.response.UserInfoResponse;
import com.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
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
