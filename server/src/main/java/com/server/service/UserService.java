package com.server.service;

import com.server.controller.request.UpdateInfoRequest;
import com.server.controller.response.UserInfoResponse;
import com.server.repository.user.entity.UserEntity;
import com.server.repository.user.repository.UserRepository;
import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailSenderService emailSenderService;
    @Autowired
    private WaterMeterService waterMeterService;
    public UserEntity create(UserEntity user){
        return userRepository.save(user);
    }
    public UserEntity getById(Integer id){
        return userRepository.findById(id).orElse(new UserEntity());
    }
    public UserEntity getByEmail(String email){
        return userRepository.findByEmail(email).orElse(new UserEntity());
    }
    public void updateInfo(UpdateInfoRequest request, Integer userId){
        UserEntity user = userRepository.findById(userId).orElse(new UserEntity());
        user.setEmail(request.getEmail());
        user.setFullName(request.getFullName());
        user.setPhoneNumber(request.getPhoneNumber());
        userRepository.save(user);
    }
    public void updatePassword(String password, Integer userId){
        UserEntity user = userRepository.findById(userId).orElse(new UserEntity());
        user.setPassword(password);
        userRepository.save(user);
    }
    public UserInfoResponse getUserInfo(Integer userId){
        UserInfoResponse res = new UserInfoResponse();
        try{
            UserEntity user = userRepository.getById(userId);
            WaterMeterDevice waterMeterDevice = waterMeterService.getByUserId(userId);
            List<WaterMeterValue> listValue =  waterMeterService.getById(waterMeterDevice.getWaterMeterId());

            res.setAddress(user.getAddress());
            res.setEmail(user.getEmail());
            res.setPhoneNumber(user.getPhoneNumber());
            res.setFullName(user.getFullName());
            res.setListValue(listValue);
            return res;
        }
        catch (Exception e){
            throw e;
        }
    }

    public boolean forgotPassword(String email, String url){
        UserEntity user = validEmail(email);
        if(user == null)
            return false;
        String token = UUID.randomUUID().toString();
        user.setToken(token);
        userRepository.save(user);
        url += token;
        emailSenderService.sendSimpleEmail(email, "Reset password",url);
        return true;
    }

    private UserEntity validEmail(String email){
        Optional<UserEntity> userInfo = userRepository.findByEmail(email);
        return userInfo.orElse(null);
    }

    public boolean resetPassword(String token, String password){
        UserEntity user = checkValidToken(token);
        if(user == null){
            return false;
        }
        user.setToken(null);
        user.setPassword(new BCryptPasswordEncoder().encode(password));
        userRepository.save(user);
        return true;
    }

    public UserEntity checkValidToken(String token){
        Optional<UserEntity> userInfo = userRepository.findByToken(token);
        return userInfo.orElse(null);
    }
}
