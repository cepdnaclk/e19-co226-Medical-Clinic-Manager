package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Medication;
import com.MedicalClinic.LifeCare.exception.UnauthorizedAccessException;
import com.MedicalClinic.LifeCare.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicationServiceImpl implements MedicationService{
    @Autowired
    MedicationRepository medicationRepository;
    @Override
    public Medication saveMedication(Medication medication) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails1 = (UserDetails) auth.getPrincipal();
        String username = userDetails1.getUsername();
            /*
            ---------------------------
            | check medprof (himOnly) |
            ---------------------------
             */
        String relatedusername = medication.getMedicalProfessional().getUser().getUsername();
        System.out.println(relatedusername);
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            return medicationRepository.save(medication);
        }
        throw new UnauthorizedAccessException("Unauthorized to access patient data");
    }

    @Override
    public List<Medication> findByPatientPatientId(Long patientid) {
        return medicationRepository.findByPatientPatientId(patientid);
    }

    @Override
    public List<Medication> fetchMedicationList() {
        return medicationRepository.findAll();
    }

    public List<Medication> findByMedicalProfessionalProfessionalId(Long patientid){
        return medicationRepository.findByMedicalProfessionalProfessionalId(patientid);
    }

    @Override
    public List<Medication> findByProfessionalIdAndPatientIdAndAppointmentId(Long medprofId, Long patientId, Long appointmentId) {
        return medicationRepository.findByProfessionalIdAndPatientIdAndAppointmentId(medprofId, patientId, appointmentId);
    }

    @Override
    public List<Medication> findByPatientIdAndAppointmentId(Long patientId, Long appointmentId) {
        return medicationRepository.findByPatientIdAndAppointmentId(patientId, appointmentId);
    }

    @Override
    public void deleteMedicationById(Long medicationId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails1 = (UserDetails) auth.getPrincipal();
        String username = userDetails1.getUsername();
            /*
            ---------------------------
            | check medprof (himOnly) |
            ---------------------------
             */
        String relatedusername = medicationRepository.findById(medicationId).get().getMedicalProfessional().getUser().getUsername();
        System.out.println(relatedusername);
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            medicationRepository.deleteById(medicationId);
        }
        else {
            throw new UnauthorizedAccessException("Unauthorized to access patient data");
        }

    }
}
