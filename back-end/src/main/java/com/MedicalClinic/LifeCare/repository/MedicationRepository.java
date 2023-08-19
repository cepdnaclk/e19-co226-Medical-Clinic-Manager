package com.MedicalClinic.LifeCare.repository;

import com.MedicalClinic.LifeCare.entity.Appointment;
import com.MedicalClinic.LifeCare.entity.Medication;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicationRepository extends JpaRepository<Medication, Long> {
    public List<Medication> findByPatientPatientId(Long patientid);
    public List<Medication> findByMedicalProfessionalProfessionalId(Long professionalId);
    public void deleteByPatientPatientId(Long patientId);
    @Query("SELECT a FROM Medication a " +
            "WHERE a.medicalProfessional.professionalId = :professionalId " +
            "AND a.patient.patientId = :patientId " +
            "AND a.appointment.appointmentId = :appointmentId")
    public List<Medication> findByProfessionalIdAndPatientIdAndAppointmentId(@Param("professionalId") Long professionalId,
                                                              @Param("patientId") Long patientId,
                                                                             @Param("appointmentId") Long appointmentId);

    @Query("SELECT a FROM Medication a " +
            "WHERE a.patient.patientId = :patientId " +
            "AND a.appointment.appointmentId = :appointmentId")
    public  List<Medication> findByPatientIdAndAppointmentId(@Param("patientId") Long patientId,
                                                             @Param("appointmentId") Long appointmentId);

}
