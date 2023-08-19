package com.MedicalClinic.LifeCare.controllers;

import com.MedicalClinic.LifeCare.entity.Patient;
import com.MedicalClinic.LifeCare.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    @GetMapping("/existsbyuserid/{uid}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public boolean existsPatientByUid(@PathVariable("uid") Long uid) {
        return patientService.existsPatientByUid(uid);
    }
    @GetMapping("/findbyuserid/{uid}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Patient findPatientByUid(@PathVariable("uid") Long uid) {
        return patientService.findPatientByUid(uid);
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
    @PostMapping("/search/{text}")
    public List<Patient> search(@PathVariable("text") String text) {
        List<Patient> matchingPatients = new ArrayList<>();
        List<Patient> patientList = patientService.fetchPatientList();

        for (Patient p : patientList) {
            if (p.getFname().toUpperCase().startsWith(text.toUpperCase())) {
                matchingPatients.add(p);
            }
        }

        if (matchingPatients.isEmpty()) {
            System.out.println("No matching words found.");
        } else {
            System.out.println("Matching patients:");
            for (Patient match : matchingPatients) {
                System.out.println(match);
            }
        }
        return matchingPatients;
    }
}
