package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Patient;

import java.util.List;

public interface PatientService {
    public Patient savePatient(Patient department);

    public List<Patient> fetchPatientList();

    public Patient fetchPatientById(Long departmentId);

    public void deletePatientById(Long patientId);

    public Patient updatePatient(Long id, Patient patient);

    public boolean existsPatientByUid(Long uid);
}
