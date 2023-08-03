package com.lifecare.webapp.controller;

import com.lifecare.webapp.entity.MedicalProfessional;
import com.lifecare.webapp.entity.MedicalRecord;
import com.lifecare.webapp.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class MedicalRecordRestController {
    @Autowired
    MedicalRecordService medicalRecordService;

    @PostMapping("/medicalRecords")
    public MedicalRecord saveMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
        return medicalRecordService.saveMedicalRecord(medicalRecord);
    }
    @GetMapping("/medicalRecords")
    public List<MedicalRecord> fetchMedicalRecordList(){
        return medicalRecordService.fetchMedicalRecordList();
    }
    @GetMapping("/medicalRecords/{patient_id}")
    public List<MedicalRecord> findByPatientPatientId(@PathVariable("patient_id") Long patientId){
        return medicalRecordService.findByPatientPatientId(patientId);
    }
    @DeleteMapping("/medicalRecords/{id}")
    public String deleteMedicalRecord(@PathVariable("id") Long id) {
        medicalRecordService.deleteMedicalRecord(id);
        return "Medical Record deleted successfully";
    }
    @PutMapping("/medicalRecords/{id}")
    public MedicalRecord updateMedicalRecord(@PathVariable("id") Long patientId, @RequestBody MedicalRecord medicalRecord) {
        return medicalRecordService.updateMedicalRecord(patientId, medicalRecord);
    }
}
