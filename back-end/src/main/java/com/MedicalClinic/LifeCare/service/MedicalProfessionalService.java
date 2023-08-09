package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.MedicalProfessional;

import java.util.List;

public interface MedicalProfessionalService {
    public MedicalProfessional saveMedicalProfessional(MedicalProfessional medicalProfessional);

    public void deleteMedicalProfessionalById(Long professionalId);

    public MedicalProfessional fetchMedicalProfessionalById(Long id);

    public List<MedicalProfessional> fetchMedicalProfessionalList();

    public MedicalProfessional updateMedicalProfessionalById(Long id, MedicalProfessional medicalProfessional);

    public boolean existsPatientByUid(Long uid);
}
