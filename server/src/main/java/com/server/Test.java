//package com.server;
//
//import org.eclipse.paho.client.mqttv3.*;
//import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/")
//public class Test {
//    @GetMapping("/")
//    public String test() throws MqttException {
//        String broker = "tcp://io.adafruit.com";
//        String username = "hongphat03";
//        String password = "aio_MSpm95o9SBOZsul7LhyuTHlFwL2F";
//        String clientid = MqttClient.generateClientId();
//        String content = "Hello MQTT";
//        int qos = 0;
//
//        MqttClient client = new MqttClient(broker, clientid, new MemoryPersistence());
//        MqttConnectOptions options = new MqttConnectOptions();
//        options.setUserName(username);
//        options.setPassword(password.toCharArray());
//        options.setConnectionTimeout(60);
//        options.setKeepAliveInterval(60);
//        client.connect(options);
//
//        String topic = "hongphat03/feeds/anh-sang";
//        try {
//            // create message and setup QoS
//            MqttMessage message = new MqttMessage(content.getBytes());
//            message.setQos(qos);
//            // publish message
//            client.publish(topic, message);
//            System.out.println("Message published");
//            System.out.println("topic: " + topic);
//            System.out.println("message content: " + content);
//            // disconnect
//            client.disconnect();
//            // close client
//            client.close();
//        } catch (MqttException e) {
//            throw new RuntimeException(e);
//        }
//
//        return "hello";
//    }
//}
