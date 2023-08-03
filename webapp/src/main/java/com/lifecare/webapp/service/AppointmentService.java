package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.Appointment;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface AppointmentService {
    public Appointment saveAppointment(Appointment appointment);

    public List<Appointment> fetchAppointmentList();

    public void deleteAppointmentById(Long appointmentId);

    Appointment updateAppointment(Long appointmentId, Appointment appointment);

    public List<Appointment> findByPatientPatientId(Long patientId);

    List<Appointment> findByMedicalProfessionalNotAccepted(Long patientId);

    List<Appointment> findByMedicalProfessionalAccepted(Long patientId);
}
