package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.Patient;
import com.lifecare.webapp.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    PatientRepository patientRepository;
    @Override
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public List<Patient> fetchPatientList() {
        return patientRepository.findAll();
    }

    @Override
    public Patient fetchPatientById(Long patientId) {
        return patientRepository.findById(patientId).get();
    }
}
