package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.Patient;
import com.lifecare.webapp.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        try {
            return patientRepository.findById(patientId).get();
        }
        catch (Exception ex) {
            return new Patient();
        }
    }

    @Override
    public void deletePatientById(Long patientId) {
        patientRepository.deleteById(patientId);
    }

    @Override
    public Patient updatePatient(Long id, Patient patient) {

        Patient patientDB = patientRepository.findById(id).get();

        patientDB.setFname(patient.getFname());
        patientDB.setLname(patient.getLname());
        patientDB.setNic(patient.getNic());
        patientDB.setAddress(patient.getAddress());
        patientDB.setContact(patient.getContact());
        patientDB.setDob(patient.getDob());
        patientDB.setInsuranceDetails(patient.getInsuranceDetails());
        patientDB.setUsername(patient.getUsername());
        patientDB.setPassword(patient.getPassword());

        return patientRepository.save(patientDB);

    }

    @Override
    public Patient fetchPatientByNic(String nic) {
        List<Patient> patientList;
        patientList = patientRepository.findAll();
        for (Patient patient : patientList) {
            if(patient.getNic().equals(nic)){
                return patient;
            }
        }
        return null;
    }

    @Override
    public void deletePatientByNic(String nic) {

    }

    @Override
    public Patient fetchPatientByUsername(String username) {
        return patientRepository.findByUsername(username);
    }
}
