package com.MedicalClinic.LifeCare.repository;
import com.MedicalClinic.LifeCare.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    public List<Appointment> findByPatientPatientId(Long patientId);

    public List<Appointment> findByMedicalProfessionalProfessionalId(Long professionalId);

    public void deleteByPatientPatientId(Long patientId);

}
