package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.Medication;

import java.util.List;

public interface MedicationService {
    public Medication saveMedication(Medication medication);

    public List<Medication> findByPatientPatientId(Long patientid);

    public List<Medication> fetchMedicationList();

    public void deleteMedicationById(Long medicationId);
}
