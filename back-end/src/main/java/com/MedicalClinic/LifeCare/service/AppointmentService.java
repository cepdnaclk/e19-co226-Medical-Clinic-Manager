package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Appointment;
import com.MedicalClinic.LifeCare.entity.Patient;

import java.util.List;

public interface AppointmentService {
    public Appointment saveAppointment(Appointment appointment);

    public List<Appointment> fetchAppointmentList();

    public void deleteAppointmentById(Long appointmentId);

    Appointment updateAppointment(Long appointmentId, Appointment appointment);

    public List<Appointment> findByPatientPatientId(Long patientId);

    List<Appointment> findByMedicalProfessionalNotAccepted(Long patientId);

    List<Appointment> findByMedicalProfessionalAccepted(Long patientId);

    List<Appointment> findByMedicalProfessionalProfessionalId(Long professionalId);

   List<Appointment> findByProfessionalIdAndPatientId(Long medprofId, Long patientId);

    List<List<Long>> countAppointmentsByProfessionalAndPatient(Long medprofId);

    List<Patient> findPatientsByMedicalProfessionalId(Long medprofId);
}
