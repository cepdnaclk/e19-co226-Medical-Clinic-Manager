package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Manager;
import com.MedicalClinic.LifeCare.exception.UnauthorizedAccessException;
import com.MedicalClinic.LifeCare.repository.ManagerRepository;
import com.MedicalClinic.LifeCare.repository.MedicalProfessionalRepository;
import com.MedicalClinic.LifeCare.entity.MedicalProfessional;
//import com.bezkoder.springjwt.repository.AppointmentRepository;
//import com.bezkoder.springjwt.repository.MedicalRecordRepository;
//import com.lifecare.webapp.repository.MedicationRepository;
import com.MedicalClinic.LifeCare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class MedicalProfessionalServiceImpl implements MedicalProfessionalService {
    @Autowired
    MedicalProfessionalRepository medicalProfessionalRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    ManagerRepository managerRepository;
//    @Autowired
//    AppointmentRepository appointmentRepository;
//    @Autowired
//    MedicalRecordRepository medicalRecordRepository;
//    @Autowired
//    MedicationRepository medicationRepository;


    @Override
    public MedicalProfessional saveMedicalProfessional(MedicalProfessional medicalProfessional) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String username = userDetails.getUsername();
        /*
        ---------------------------
        | check MedProf (himOnly) |
        ---------------------------
         */
        String relatedusername = Objects.requireNonNull(userRepository.findById(medicalProfessional.getUser().getId()).orElse(null)).getUsername();
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            System.out.println(username);
            return medicalProfessionalRepository.save(medicalProfessional);
        }
        throw new UnauthorizedAccessException("Unauthorized to access medical professional data");
    }

    @Override
    public void deleteMedicalProfessionalById(Long professionalId) {
            medicalProfessionalRepository.deleteById(professionalId);
    }


    @Override
    public MedicalProfessional fetchMedicalProfessionalById(Long id) {
        return medicalProfessionalRepository.findById(id).get();
    }

    @Override
    public List<MedicalProfessional> fetchMedicalProfessionalList() {
        return medicalProfessionalRepository.findAll();
    }

    @Override
    public MedicalProfessional updateMedicalProfessionalById(Long id, MedicalProfessional medicalProfessional) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String username = userDetails.getUsername();
        /*
        ---------------------------
        | check MedProf (himOnly) |
        ---------------------------
         */
        String relatedusername = Objects.requireNonNull(userRepository.findById(medicalProfessional.getUser().getId()).orElse(null)).getUsername();
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            MedicalProfessional medicalProfessionalDB = medicalProfessionalRepository.findById(id).get();
            medicalProfessionalDB.setFname(medicalProfessional.getFname());
            medicalProfessionalDB.setLname(medicalProfessionalDB.getLname());
            medicalProfessionalDB.setContact(medicalProfessional.getContact());
            medicalProfessionalDB.setNic(medicalProfessionalDB.getNic());
            medicalProfessionalDB.setAddress(medicalProfessional.getAddress());
            medicalProfessionalDB.setDob(medicalProfessional.getDob());
            medicalProfessionalDB.setSpeciality(medicalProfessional.getSpeciality());
            return medicalProfessionalRepository.save(medicalProfessionalDB);
        }
        throw new UnauthorizedAccessException("Unauthorized to access medical professional data");
    }

    @Override
    public boolean existsPatientByUid(Long uid) {
        return medicalProfessionalRepository.existsByUserUid(uid);
    }
}
