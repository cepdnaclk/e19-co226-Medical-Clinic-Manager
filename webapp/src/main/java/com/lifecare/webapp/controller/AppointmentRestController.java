package com.lifecare.webapp.controller;
import com.lifecare.webapp.entity.Appointment;
import com.lifecare.webapp.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AppointmentRestController {
    @Autowired
    AppointmentService appointmentService;
    @PostMapping("/appointments")
    public Appointment saveAppointment(@RequestBody Appointment appointment) {
        return appointmentService.saveAppointment(appointment);
    }
    @GetMapping("/appointments")
    public List<Appointment> fetchAppointmentList() {
        return appointmentService.fetchAppointmentList();
    }
    @GetMapping("/appointments/{id}")
    public Appointment fetchAppointmentById(@PathVariable("id") Long appointmentId) {
        return appointmentService.fetchAppointmentById(appointmentId);
    }
}
