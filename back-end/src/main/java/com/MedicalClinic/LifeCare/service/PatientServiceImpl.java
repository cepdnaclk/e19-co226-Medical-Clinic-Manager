package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Patient;
import com.MedicalClinic.LifeCare.exception.UnauthorizedAccessException;
import com.MedicalClinic.LifeCare.models.User;
import com.MedicalClinic.LifeCare.repository.ManagerRepository;
import com.MedicalClinic.LifeCare.repository.MedicalProfessionalRepository;
import com.MedicalClinic.LifeCare.repository.PatientRepository;
import com.MedicalClinic.LifeCare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

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
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            UserDetails userDetails1 = (UserDetails) auth.getPrincipal();
            String username = userDetails1.getUsername();
            Patient patient = patientRepository.findById(patientId).get();
            /*
            ---------------------------
            | check Patient (himOnly) |
            ---------------------------
             */
            String relatedusername = Objects.requireNonNull(userRepository.findById(patient.getUser().getId()).orElse(null)).getUsername();
            System.out.println(relatedusername);
            boolean himOnly = username.equals(relatedusername);

            if (himOnly) {
                return patient;
            }
            throw new UnauthorizedAccessException("Unauthorized to access patient data");
    }

    @Override
    public void deletePatientById(Long patientId) {
        patientRepository.deleteById(patientId);
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
}
