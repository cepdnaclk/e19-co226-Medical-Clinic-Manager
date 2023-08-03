package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.MedicalProfessional;

import java.util.List;

public interface MedicalProfessionalService {
    public MedicalProfessional saveMedicalProfessional(MedicalProfessional medicalProfessional);

    public void deleteMedicalProfessionalById(Long professionalId);

    public MedicalProfessional fetchMedicalProfessionalById(Long id);

    public List<MedicalProfessional> fetchMedicalProfessionalList();

    public MedicalProfessional updateMedicalProfessionalById(Long id, MedicalProfessional medicalProfessional);
}
