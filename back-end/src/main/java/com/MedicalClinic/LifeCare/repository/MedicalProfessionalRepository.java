package com.MedicalClinic.LifeCare.repository;

import com.MedicalClinic.LifeCare.entity.MedicalProfessional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalProfessionalRepository extends JpaRepository<MedicalProfessional, Long> {
    boolean existsById(Long Id);
    boolean existsByUserUid(Long Uid);

    MedicalProfessional findByUserUid(Long Uid);
}
