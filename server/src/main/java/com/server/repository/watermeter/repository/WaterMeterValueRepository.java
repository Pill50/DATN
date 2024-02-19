package com.server.repository.watermeter.repository;

import com.server.repository.watermeter.entity.WaterMeterDevice;
import com.server.repository.watermeter.entity.WaterMeterValue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WaterMeterValueRepository extends JpaRepository<WaterMeterValue, String> {
    List<WaterMeterValue> findByWaterMeterId(String id);

    @Query("select Avg(w.totalFlowValue) from WaterMeterValue w where MONTH(w.updatedAt) = :month ")
    Float findAvgUsage(
            @Param("month") int month
    );
}
