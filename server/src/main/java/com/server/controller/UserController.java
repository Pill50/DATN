package com.server.controller;

import com.server.controller.request.UpdatePasswordRequest;
import com.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/update-password")
    public void updatePassword(@RequestBody UpdatePasswordRequest request){
        userService.updatePassword(request.getPassword(), request.getUserId());
    }
}
