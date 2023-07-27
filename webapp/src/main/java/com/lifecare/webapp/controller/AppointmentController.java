package com.lifecare.webapp.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppointmentController {
    @GetMapping("/appointmentForm")
    public String appointmentForm() {
        return "appointmentForm";
    }
    @GetMapping("/appointmentDetails")
    public String getAppointments() {
        return "appointmentDetails";
    }
}
