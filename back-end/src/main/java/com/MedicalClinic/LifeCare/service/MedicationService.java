package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Medication;

import java.util.List;

public interface MedicationService {
    Medication saveMedication(Medication medication);

    List<Medication> findByPatientPatientId(Long patientid);

    List<Medication> fetchMedicationList();

    void deleteMedicationById(Long medicationId);

    public List<Medication> findByMedicalProfessionalProfessionalId(Long patientid);

    public List<Medication> findByProfessionalIdAndPatientIdAndAppointmentId(Long medprofId, Long patientId, Long appointmentId);

    public List<Medication> findByPatientIdAndAppointmentId(Long patientId, Long appointmentId);
}
