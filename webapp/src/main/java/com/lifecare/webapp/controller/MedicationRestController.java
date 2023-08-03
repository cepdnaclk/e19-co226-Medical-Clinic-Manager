package com.lifecare.webapp.controller;

import com.lifecare.webapp.entity.Medication;
import com.lifecare.webapp.service.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class MedicationRestController {
    @Autowired
    private MedicationService medicationService;
    @PostMapping("/medications")
    public Medication saveMedication(@RequestBody Medication medication) {
        return medicationService.saveMedication(medication);
    }
    @GetMapping("/medications/{patient_id}")
    public List<Medication> findByPatientPatientId(@PathVariable("patient_id") Long patientid) {
        return medicationService.findByPatientPatientId(patientid);
    }
    @GetMapping("/medications")
    public List<Medication> fetchMedicationList() {
        return medicationService.fetchMedicationList();
    }
    @DeleteMapping("/medications/{id}")
    public String deleteMedicationById(@PathVariable("id") Long medicationId) {
        medicationService.deleteMedicationById(medicationId);
        return "medication Deleted successful";
    }
}
