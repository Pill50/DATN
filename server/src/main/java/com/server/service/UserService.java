package com.server.service;

import com.server.controller.request.UpdateInfoRequest;
import com.server.repository.user.entity.UserEntity;
import com.server.repository.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public UserEntity create(UserEntity user){
        return userRepository.save(user);
    }
    public UserEntity getById(Integer id){
        return userRepository.findById(id).orElse(new UserEntity());
    }
    public void updateInfo(UpdateInfoRequest request, Integer userId){
        UserEntity user = userRepository.findById(userId).orElse(new UserEntity());
        user.setEmail(request.getEmail());
        user.setFullName(request.getFullName());
        user.setPhoneNumber(request.getPhoneNumber());
        userRepository.save(user);
    }
}
