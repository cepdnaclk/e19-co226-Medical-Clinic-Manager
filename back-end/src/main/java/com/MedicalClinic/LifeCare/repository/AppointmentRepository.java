package com.MedicalClinic.LifeCare.repository;
import com.MedicalClinic.LifeCare.entity.Appointment;
import com.MedicalClinic.LifeCare.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    public List<Appointment> findByPatientPatientId(Long patientId);

    public List<Appointment> findByMedicalProfessionalProfessionalId(Long professionalId);

    public void deleteByPatientPatientId(Long patientId);


    @Query("SELECT a FROM Appointment a " +
            "WHERE a.medicalProfessional.professionalId = :professionalId " +
            "AND a.patient.patientId = :patientId")
    public List<Appointment> findByProfessionalIdAndPatientId(@Param("professionalId") Long professionalId,
                                                       @Param("patientId") Long patientId);

    @Query("SELECT a.patient.patientId, COUNT(a) " +
            "FROM Appointment a " +
            "WHERE a.medicalProfessional.professionalId = :professionalId " +
            "GROUP BY a.patient.patientId")
    List<List<Long>> countAppointmentsByProfessionalAndPatient(@Param("professionalId") Long professionalId);
    @Query("SELECT DISTINCT a.patient " +
            "FROM Appointment a " +
            "WHERE a.medicalProfessional.professionalId = :professionalId")
    List<Patient> findPatientsByMedicalProfessionalId(@Param("professionalId") Long professionalId);
}
