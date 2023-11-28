package com.server.repository.watermeter.repository;

import com.server.repository.watermeter.entity.WaterMeterDevice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WaterMeterDeviceRepository extends JpaRepository<WaterMeterDevice, Integer> {
    List<WaterMeterDevice> findBySuperMeterId(Integer id);
}