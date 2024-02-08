package com.server.repository.watermeter.repository;

import com.server.repository.watermeter.entity.AvgUsage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvgUsageRepository extends JpaRepository<AvgUsage, Integer> {

     AvgUsage findByWaterMeterId(String waterMeterId);
}
