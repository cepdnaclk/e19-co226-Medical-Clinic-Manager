package com.lifecare.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PatientController {
    @GetMapping("/patientRegistration")
    public String registrationForm() {
        return "patientRegistration";
    }

    @GetMapping("/patientsDetails")
    public String getPatients() {
        return "patientsDetails";
    }
}
