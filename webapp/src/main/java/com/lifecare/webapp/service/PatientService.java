package com.lifecare.webapp.service;
import com.lifecare.webapp.entity.Patient;
import java.util.List;

public interface PatientService {
    public Patient savePatient(Patient department);

    public List<Patient> fetchPatientList();

    public Patient fetchPatientById(Long departmentId);

    public void deletePatientById(Long patientId);

}
