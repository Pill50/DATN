package com.server.service;

import com.server.controller.request.UpdateInfoRequest;
import com.server.controller.response.UserInfoResponse;
import com.server.repository.user.entity.UserEntity;
import com.server.repository.user.repository.UserRepository;
import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WaterMeterService waterMeterService;
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
}
