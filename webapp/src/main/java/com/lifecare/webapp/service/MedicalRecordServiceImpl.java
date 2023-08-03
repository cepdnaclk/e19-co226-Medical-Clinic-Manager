package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.Appointment;
import com.lifecare.webapp.entity.MedicalProfessional;
import com.lifecare.webapp.entity.MedicalRecord;
import com.lifecare.webapp.repository.MedicalRecordRepository;
import com.lifecare.webapp.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class MedicalRecordServiceImpl implements MedicalRecordService {
    @Autowired
    MedicalRecordRepository medicalRecordRepository;
    @Autowired
    PatientRepository patientRepository;

    public MedicalRecord saveMedicalRecord(MedicalRecord medicalRecord) {
        return medicalRecordRepository.save(medicalRecord);
    }

    @Override
    public MedicalRecord updateMedicalRecord(Long patientId, MedicalRecord medicalRecord) {
//        MedicalRecord medicalRecordDB = medicalRecordRepository.findById(
//                patientRepository.findById(patientId)
//                        .get()
//                        .getMedicalRecord()
//                        .getMedicalRecordId()
//                        ).get();
//
//        medicalRecordDB.setMedicalCondition(medicalRecord.getMedicalCondition());
//        medicalRecordDB.setTreatmentPlan(medicalRecord.getTreatmentPlan());
//        medicalRecordDB.setMedicalProfessional(medicalRecord.getMedicalProfessional());

        return medicalRecordRepository.save(null);
    }

    @Override
    public List<MedicalRecord> fetchMedicalRecordList() {
        return medicalRecordRepository.findAll();
    }

    @Override
    public void deleteMedicalRecord(Long id) {
        medicalRecordRepository.deleteById(id);
    }

    @Override
    public List<MedicalRecord> findByPatientPatientId(Long patientId) {
        return medicalRecordRepository.findByPatientPatientId(patientId);
    }
}
