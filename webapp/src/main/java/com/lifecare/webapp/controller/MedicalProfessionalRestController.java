package com.lifecare.webapp.controller;

import com.lifecare.webapp.entity.MedicalProfessional;
import com.lifecare.webapp.service.MedicalProfessionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class MedicalProfessionalRestController {
    @Autowired
    MedicalProfessionalService medicalProfessionalService;
    @PostMapping("/medicalProfessionals")
    public MedicalProfessional saveMedicalProfessional(@RequestBody MedicalProfessional medicalProfessional) {
        return medicalProfessionalService.saveMedicalProfessional(medicalProfessional);
    }

    @GetMapping("/medicalProfessionals")
    public List<MedicalProfessional> fetchMedicalProfessionalList(){
        return medicalProfessionalService.fetchMedicalProfessionalList();
    }
    @GetMapping("/medicalProfessionals/{id}")
    public MedicalProfessional fetchMedicalProfessionalById(@PathVariable("id") Long id){
        return medicalProfessionalService.fetchMedicalProfessionalById(id);
    }
    @DeleteMapping("/medicalProfessionals/{id}")
    public String deleteMedicalProfessionalById(@PathVariable("id") Long professionalId) {
        medicalProfessionalService.deleteMedicalProfessionalById(professionalId);
        return "professional Deleted Successful !";
    }
    @PutMapping("/medicalProfessionals/{id}")
    public MedicalProfessional updateMedicalProfessionalById(@PathVariable Long id, @RequestBody MedicalProfessional medicalProfessional) {
        return medicalProfessionalService.updateMedicalProfessionalById(id, medicalProfessional);
    }
}
