package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.MedicalProfessional;
import com.lifecare.webapp.entity.MedicalRecord;

import java.util.List;

public interface MedicalRecordService {
    public MedicalRecord saveMedicalRecord(MedicalRecord medicalRecord);

    public MedicalRecord updateMedicalRecord(Long patientId, MedicalRecord medicalRecord);

    public List<MedicalRecord> fetchMedicalRecordList();

    public void deleteMedicalRecord(Long id);

    public List<MedicalRecord> findByPatientPatientId(Long patientId);
}
