package com.lifecare.webapp.service;
import com.lifecare.webapp.entity.Patient;
import java.util.List;

public interface PatientService {
    public Patient savePatient(Patient department);

    public List<Patient> fetchPatientList();

    public Patient fetchPatientById(Long departmentId);

    public void deletePatientById(Long patientId);

    public Patient updatePatient(Long id, Patient patient);

    public Patient fetchPatientByNic(String nic);

    public void deletePatientByNic(String nic);

    public Patient fetchPatientByUsername(String username);
}
