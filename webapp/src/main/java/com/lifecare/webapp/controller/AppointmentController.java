package com.lifecare.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppointmentController {
    @GetMapping("/appointment")
    public String hello() {
        return "appointment";
    }
}
