package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Patient;
import com.MedicalClinic.LifeCare.exception.UnauthorizedAccessException;
import com.MedicalClinic.LifeCare.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    PatientRepository patientRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    MedicalProfessionalRepository medicalProfessionalRepository;

    @Autowired
    ManagerRepository managerRepository;

    @Autowired
    AppointmentRepository appointmentRepository;

    @Autowired
    MedicationRepository medicationRepository;

    @Override
    public Patient savePatient(Patient patient) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails1 = (UserDetails) auth.getPrincipal();
        String username = userDetails1.getUsername();
        /*
        ---------------------------
        | check Patient (himOnly) |
        ---------------------------
         */
        String relatedusername = Objects.requireNonNull(userRepository.findById(patient.getUser().getId()).orElse(null)).getUsername();
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            return patientRepository.save(patient);
        }
        throw new UnauthorizedAccessException("Unauthorized to access patient data");
    }

    @Override
    public List<Patient> fetchPatientList() {
        return patientRepository.findAll();
    }

    @Override
    public Patient fetchPatientById(Long patientId) {
        return patientRepository.findById(patientId).get();
    }

    @Override
    @Transactional
    public void deletePatientById(Long patientId) {
        if (patientRepository.existsById(patientId)) {
            medicationRepository.deleteByPatientPatientId(patientId);
            appointmentRepository.deleteByPatientPatientId(patientId);
            patientRepository.deleteById(patientId);
        }
        else {
            throw new UnauthorizedAccessException("No such a patient!");
        }
    }

    @Override
    public Patient updatePatient(Long id, Patient patient) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();
        String username = userDetails.getUsername();
        Patient patientDB = patientRepository.findById(id).get();
        /*
        ---------------------------
        | check Patient (himOnly) |
        ---------------------------
         */
        String relatedusername = Objects.requireNonNull(userRepository.findById(patient.getUser().getId()).orElse(null)).getUsername();
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            patientDB.setFname(patient.getFname());
            patientDB.setLname(patient.getLname());
            patientDB.setNic(patient.getNic());
            patientDB.setAddress(patient.getAddress());
            patientDB.setContact(patient.getContact());
            patientDB.setDob(patient.getDob());
            patientDB.setInsuranceDetails(patient.getInsuranceDetails());
            return patientRepository.save(patientDB);
        }
        throw new UnauthorizedAccessException("Unauthorized to access patient data");
    }

    @Override
    public boolean existsPatientByUid(Long uid) {
        return patientRepository.existsByUserUid(uid);
    }

    @Override
    public Patient findPatientByUid(Long uid) {
        return patientRepository.findByUserUid(uid);
    }
}
