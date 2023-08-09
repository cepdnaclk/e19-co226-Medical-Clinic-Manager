package com.MedicalClinic.LifeCare.controllers;

import com.MedicalClinic.LifeCare.service.MedicalProfessionalService;
import com.MedicalClinic.LifeCare.entity.MedicalProfessional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/medprof")
@CrossOrigin(origins = "http://localhost:3000")
public class MedicalProfessionalRestController {
    @Autowired
    MedicalProfessionalService medicalProfessionalService;
    @PostMapping("/save")
    @PreAuthorize("hasRole('MODERATOR')")
    public MedicalProfessional saveMedicalProfessional(@RequestBody MedicalProfessional medicalProfessional) {
        return medicalProfessionalService.saveMedicalProfessional(medicalProfessional);
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR') or hasRole('USER')")
    public List<MedicalProfessional> fetchMedicalProfessionalList(){
        return medicalProfessionalService.fetchMedicalProfessionalList();
    }
    @GetMapping("/find/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR') or hasRole('USER')")
    public MedicalProfessional fetchMedicalProfessionalById(@PathVariable("id") Long id){
        return medicalProfessionalService.fetchMedicalProfessionalById(id);
    }
    @GetMapping("/findbyuserid/{uid}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public boolean existsPatientByUid(@PathVariable("uid") Long uid) {
        return medicalProfessionalService.existsPatientByUid(uid);
    }
    @PutMapping("/save/{id}")
    @PreAuthorize("hasRole('MODERATOR')")
    public MedicalProfessional updateMedicalProfessionalById(@PathVariable Long id, @RequestBody MedicalProfessional medicalProfessional) {
        return medicalProfessionalService.updateMedicalProfessionalById(id, medicalProfessional);
    }
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String deleteMedicalProfessionalById(@PathVariable("id") Long professionalId) {
        medicalProfessionalService.deleteMedicalProfessionalById(professionalId);
        return "professional Deleted Successful !";
    }
}
