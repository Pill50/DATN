package com.server.service;

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
}
