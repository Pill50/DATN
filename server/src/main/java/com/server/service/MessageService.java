package com.server.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.server.repository.watermeter.entity.WaterMeterValue;
import com.server.repository.watermeter.repository.WaterMeterValueRepository;
import org.eclipse.paho.client.mqttv3.*;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@Configurable
public class MessageService {
    @Autowired
    private WaterMeterValueRepository waterMeterValueRepository;

    public void subcribe() {
        String broker = "tcp://io.adafruit.com";
        String username = "hongphat03";
        String password = "aio_Nrmy33hQxE2M8eSbvVnkpCqWP";
        String clientid = MqttClient.generateClientId();
        int qos = 0;
        String topic = "hongphat03/feeds/anh-sang";

        try {
            MqttClient client = new MqttClient(broker, clientid, new MemoryPersistence());
            // connect options
            MqttConnectOptions options = new MqttConnectOptions();
            options.setUserName(username);
            options.setPassword(password.toCharArray());
            options.setConnectionTimeout(60);
            options.setKeepAliveInterval(60);
            // setup callback
            client.setCallback(new MqttCallback() {

                public void connectionLost(Throwable cause) {
                    System.out.println("connectionLost: " + cause.getMessage());
                }

                public void messageArrived(String topic, MqttMessage message) throws IOException {
                    ObjectMapper objectMapper = new ObjectMapper();

                    String raw = new String(message.getPayload());
                    WaterMeterValue data = objectMapper.readValue(raw, WaterMeterValue.class);

                    WaterMeterValue record = new WaterMeterValue();
                    record.setFlowRateValue(data.getFlowRateValue());
                    record.setTotalRateValue(data.getTotalRateValue());
                    record.setWaterMeterId(data.getId());
                    waterMeterValueRepository.save(record);
                }

                public void deliveryComplete(IMqttDeliveryToken token) {
                    System.out.println("deliveryComplete---------" + token.isComplete());
                }

            });
            client.connect(options);
            client.subscribe(topic, qos);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}