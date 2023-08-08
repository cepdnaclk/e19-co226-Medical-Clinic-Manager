package com.MedicalClinic.LifeCare.controllers;

import com.MedicalClinic.LifeCare.entity.Patient;
import com.MedicalClinic.LifeCare.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/patient")
public class PatientRestController {
    @Autowired
    PatientService patientService;
    @PostMapping("/save")
    @PreAuthorize("hasRole('USER')")
    public Patient savePatient(@RequestBody Patient patient) {
        return patientService.savePatient(patient);
    }
    @GetMapping("/all")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Patient> fetchPatientList() {
        return patientService.fetchPatientList();
    }
    @GetMapping("/find/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Patient fetchPatientById(@PathVariable("id") Long id) {
        return patientService.fetchPatientById(id);
    }
    @GetMapping("/findbyuserid/{uid}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public boolean existsPatientByUid(@PathVariable("uid") Long uid) {
        return patientService.existsPatientByUid(uid);
    }
    @PutMapping("/save/{id}")
    @PreAuthorize("hasRole('USER')")
    public Patient updatePatient(@PathVariable("id") Long id, @RequestBody Patient patient){
        return patientService.updatePatient(id, patient);
    }
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String deletePatientById(@PathVariable("id") Long patientId){
        patientService.deletePatientById(patientId);
        return "patient deleted successfully";
    }

}
