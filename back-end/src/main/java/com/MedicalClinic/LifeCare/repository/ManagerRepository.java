package com.MedicalClinic.LifeCare.repository;

import com.MedicalClinic.LifeCare.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepository extends JpaRepository<Manager, Long> {
    boolean existsByUserId(Long userId);
    boolean existsByUserUid(Long Uid);
    Manager findByUserUid(Long Uid);
}
