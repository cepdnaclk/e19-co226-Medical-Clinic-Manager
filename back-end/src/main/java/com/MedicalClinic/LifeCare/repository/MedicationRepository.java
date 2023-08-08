package com.MedicalClinic.LifeCare.repository;

import com.MedicalClinic.LifeCare.entity.Medication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicationRepository extends JpaRepository<Medication, Long> {
    public List<Medication> findByPatientPatientId(Long patientid);
    public List<Medication> findByMedicalProfessionalProfessionalId(Long professionalId);
    public void deleteByPatientPatientId(Long patientId);

}
