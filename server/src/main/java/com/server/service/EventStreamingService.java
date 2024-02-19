package com.server.service;

import com.server.model.EventMessage;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class EventStreamingService {
    private static List<SseEmitter> sseEmitters = new ArrayList<>();

    public String add(SseEmitter sseEmitter){
        String uuid = UUID.randomUUID().toString();
        sseEmitters.add(sseEmitter);
        return uuid;
    }
    public void sendEvent(EventMessage message){
        try{
            for(SseEmitter s : sseEmitters){
                s.send(SseEmitter.event().name("notification").data(message.toString()));
            }
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
