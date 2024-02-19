package com.server.controller;

import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import reactor.core.publisher.Flux;

import java.util.List;

public class SSEController {
//    @GetMapping("/users")
//    public Flux<ServerSentEvent<List<String>>> streamUsers(@RequestParam("name") String name) {
//        return sseService.getUsers(name);
//    }
}
