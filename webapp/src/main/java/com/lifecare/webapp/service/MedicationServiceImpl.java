package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.Medication;
import com.lifecare.webapp.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicationServiceImpl implements MedicationService{
    @Autowired
    private MedicationRepository medicationRepository;
    @Override
    public Medication saveMedication(Medication medication) {
        return medicationRepository.save(medication);
    }
    @Override
    public List<Medication> findByPatientPatientId(Long patientid) {
        return medicationRepository.findByPatientPatientId(patientid);
    }

    @Override
    public List<Medication> fetchMedicationList() {
        return medicationRepository.findAll();
    }

    @Override
    public void deleteMedicationById(Long medicationId) {
        medicationRepository.deleteById(medicationId);
    }
}
