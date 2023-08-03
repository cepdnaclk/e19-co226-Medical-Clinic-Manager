package com.lifecare.webapp.controller;
import com.lifecare.webapp.entity.Appointment;
import com.lifecare.webapp.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
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
    @GetMapping("/appointments/{patient_id}")
    public List<Appointment> findByPatientPatientId(@PathVariable("patient_id") Long patientId) {
        return appointmentService.findByPatientPatientId(patientId);
    }
    @GetMapping("/appointments/medicalProfessionalNotAccepted/{patient_id}")
    public List<Appointment> findByMedicalProfessionalNotAccepted(@PathVariable("patient_id") Long patientId) {
        return appointmentService.findByMedicalProfessionalNotAccepted(patientId);
    }
    @GetMapping("/appointments/medicalProfessionalAccepted/{patient_id}")
    public List<Appointment> findByMedicalProfessionalAccepted(@PathVariable("patient_id") Long patientId) {
        return appointmentService.findByMedicalProfessionalAccepted(patientId);
    }
    @DeleteMapping("/appointments/{id}")
    public String deleteAppointmentById(@PathVariable("id") Long appointmentId) {
        appointmentService.deleteAppointmentById(appointmentId);
        return "Appointment Deleted Successful !";
    }
    @PutMapping("/appointments/{id}")
    public Appointment updateAppointment(@PathVariable("id") Long appointmentId, @RequestBody Appointment appointment) {
        return appointmentService.updateAppointment(appointmentId, appointment);
    }
}
