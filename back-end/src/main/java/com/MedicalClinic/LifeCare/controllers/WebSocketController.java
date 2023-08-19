package com.MedicalClinic.LifeCare.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    @MessageMapping("/update")
    @SendTo("/topic/updates")
    public String handleUpdate(String message) {
        // Handle database change event and broadcast the update
        return message; // You can return any data you want to send to clients
    }
}
