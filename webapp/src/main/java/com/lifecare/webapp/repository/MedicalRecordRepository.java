package com.lifecare.webapp.repository;

import com.lifecare.webapp.entity.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {
    public List<MedicalRecord> findByPatientPatientId(Long patientId);

    public void deleteByMedicalProfessionalProfessionalId(Long professionalId);
}
