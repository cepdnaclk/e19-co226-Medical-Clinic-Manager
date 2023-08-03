package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.MedicalProfessional;
import com.lifecare.webapp.entity.Medication;
import com.lifecare.webapp.repository.AppointmentRepository;
import com.lifecare.webapp.repository.MedicalProfessionalRepository;
import com.lifecare.webapp.repository.MedicalRecordRepository;
import com.lifecare.webapp.repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalProfessionalServiceImpl implements MedicalProfessionalService {
    @Autowired
    MedicalProfessionalRepository medicalProfessionalRepository;
    @Autowired
    AppointmentRepository appointmentRepository;
    @Autowired
    MedicalRecordRepository medicalRecordRepository;
    @Autowired
    MedicationRepository medicationRepository;


    @Override
    public MedicalProfessional saveMedicalProfessional(MedicalProfessional medicalProfessional) {
        return medicalProfessionalRepository.save(medicalProfessional);
    }

    @Override
    public void deleteMedicalProfessionalById(Long professionalId) {
        medicationRepository.deleteByMedicalProfessionalProfessionalId(professionalId);
        appointmentRepository.deleteByMedicalProfessionalProfessionalId(professionalId);
        medicalRecordRepository.deleteByMedicalProfessionalProfessionalId(professionalId);
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
}
