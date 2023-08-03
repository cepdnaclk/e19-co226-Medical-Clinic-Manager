package com.lifecare.webapp.repository;

import com.lifecare.webapp.entity.Medication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
public interface MedicationRepository extends JpaRepository<Medication, Long> {
    public List<Medication> findByPatientPatientId(Long patientId);

    public void deleteByMedicalProfessionalProfessionalId(Long professionalId);
}
