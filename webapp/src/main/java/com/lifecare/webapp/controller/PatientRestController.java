package com.lifecare.webapp.controller;
import com.lifecare.webapp.entity.Patient;
import com.lifecare.webapp.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class PatientRestController {
    @Autowired
    PatientService patientService;
    @PostMapping("/patients")
    public Patient savePatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }
    @GetMapping("/patients")
    public List<Patient> fetchPatientList() {
        return patientService.fetchPatientList();
    }
    @GetMapping("/patients/{id}")
    public Patient fetchPatientById(@PathVariable("id") Long patientId) {
        return patientService.fetchPatientById(patientId);
    }
    @DeleteMapping("/patients/{id}")
    public String deletePatientById(@PathVariable("id") Long patientId) {
        patientService.deletePatientById(patientId);
        return "Patient Deleted Successful !";
    }
}
