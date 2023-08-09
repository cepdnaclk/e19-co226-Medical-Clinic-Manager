package com.MedicalClinic.LifeCare.repository;
import com.MedicalClinic.LifeCare.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    boolean existsById(Long Id);
    boolean existsByUserUid(Long Uid);
}
