package com.lifecare.webapp.repository;

import com.lifecare.webapp.entity.MedicalProfessional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalProfessionalRepository extends JpaRepository<MedicalProfessional, Long> {
}
