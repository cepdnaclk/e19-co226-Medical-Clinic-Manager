package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.Appointment;
import com.lifecare.webapp.repository.AppointmentRepository;
import com.lifecare.webapp.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class AppointmentServiceImpl implements AppointmentService {
    @Autowired
    AppointmentRepository appointmentRepository;

    @Override
    public Appointment saveAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> fetchAppointmentList() {
        return appointmentRepository.findAll();
    }

    @Override
    public void deleteAppointmentById(Long appointmentId) {
        appointmentRepository.deleteById(appointmentId);
    }

    @Override
    public Appointment updateAppointment(Long appointmentId, Appointment appointment) {

        Appointment appointmentDB = appointmentRepository.findById(appointmentId).get();

        appointmentDB.setDate(appointment.getDate());
        appointmentDB.setDueDate(appointment.getDueDate());
        appointmentDB.setReason(appointment.getReason());
        appointmentDB.setMedicalProfessional(appointment.getMedicalProfessional());
        appointmentDB.setPatient(appointment.getPatient());
        appointmentDB.setAccept(appointment.isAccept());

        return appointmentRepository.save(appointmentDB);

    }

    @Override
    public List<Appointment> findByPatientPatientId(Long patientId) {
        return appointmentRepository.findByPatientPatientId(patientId);
    }

    @Override
    public List<Appointment> findByMedicalProfessionalNotAccepted(Long patientId) {
        try {
            List<Appointment> medProfNotAppointmentList = new ArrayList<>();
            List<Appointment> appointmentList =
                    appointmentRepository.findByPatientPatientId(patientId);
            for (Appointment appointment : appointmentList) {
                if (!appointment.isAccept()) {
                    medProfNotAppointmentList.add(appointment);
                }
            }
            return medProfNotAppointmentList;
        } catch (Exception ex) {
            return new ArrayList<>();
        }
    }

    @Override
    public List<Appointment> findByMedicalProfessionalAccepted(Long patientId) {
        try {
            List<Appointment> medProfAppointmentList = new ArrayList<>();
            List<Appointment> appointmentList =
                    appointmentRepository.findByPatientPatientId(patientId);
            for (Appointment appointment : appointmentList) {
                if (appointment.isAccept()) {
                    medProfAppointmentList.add(appointment);
                }
            }
            return medProfAppointmentList;
        } catch (Exception ex) {
            return new ArrayList<>();
        }
    }
}