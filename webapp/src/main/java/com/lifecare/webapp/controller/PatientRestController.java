package com.lifecare.webapp.controller;
import com.lifecare.webapp.entity.Patient;
import com.lifecare.webapp.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
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
    public Patient fetchPatientById(@PathVariable("id") Long id) {
        return patientService.fetchPatientById(id);
    }
    @GetMapping("/patients_nic/{nic}")
    public Patient fetchPatientById(@PathVariable("nic") String nic) {
        return patientService.fetchPatientByNic(nic);
    }
    @DeleteMapping("/patients_id/{id}")
    public String deletePatientById(@PathVariable("id") String nic) {
        patientService.deletePatientByNic(nic);
        return "Patient Deleted Successful !";
    }
    @PutMapping("/patients/{id}")
    public Patient updatePatient(@PathVariable("id") Long id, @RequestBody Patient patient){
        return patientService.updatePatient(id, patient);
    }
    @GetMapping("/patientsByUsername/{username}")
    public Patient fetchPatientByUsername(@PathVariable("username") String username) {
        return patientService.fetchPatientByUsername(username);
    }
}
