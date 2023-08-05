package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Appointment;
import com.MedicalClinic.LifeCare.entity.MedicalProfessional;
import com.MedicalClinic.LifeCare.entity.Patient;
import com.MedicalClinic.LifeCare.exception.UnauthorizedAccessException;
import com.MedicalClinic.LifeCare.models.User;
import com.MedicalClinic.LifeCare.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService {
    @Autowired
    AppointmentRepository appointmentRepository;

    @Autowired
    MedicalProfessionalRepository medicalProfessionalRepository;

    @Autowired
    MedicalProfessionalService medicalProfessionalService;

    @Autowired
    PatientService patientService;

    @Autowired
    PatientRepository patientRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ManagerRepository managerRepository;

    @Override
    public Appointment saveAppointment(Appointment appointment) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String username = userDetails.getUsername();
        /*
        ---------------------------
        | check Patient (himOnly) |
        ---------------------------
         */
        String relatedusername = Objects.requireNonNull(userRepository.findById(appointment.getPatient().getUser().getId()).orElse(null)).getUsername();
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            return appointmentRepository.save(appointment);
        }
        throw new UnauthorizedAccessException("Unauthorized to access patient data");
    }

    @Override
    public List<Appointment> fetchAppointmentList() {
        return appointmentRepository.findAll();
    }

    @Override
    public Appointment updateAppointment(Long appointmentId, Appointment appointment) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Long patientId = appointmentRepository.findById(appointmentId).get().getPatient().getPatientId();

        /*
        ---------------------------
        | check patient (himOnly) |
        ---------------------------
         */
        Long requestPatientId = appointment.getPatient().getPatientId();
        boolean himOnly = Objects.equals(requestPatientId, patientId);

        if (himOnly) {
            Appointment appointmentDB = appointmentRepository.findById(appointmentId).get();

            appointmentDB.setDate(appointment.getDate());
            appointmentDB.setDueDate(appointment.getDueDate());
            appointmentDB.setReason(appointment.getReason());
            appointmentDB.setMedicalProfessional(appointment.getMedicalProfessional());
            appointmentDB.setPatient(appointmentDB.getPatient());
            appointmentDB.setAccept(appointment.isAccept());

            return appointmentRepository.save(appointmentDB);
        }
        throw new UnauthorizedAccessException("Unauthorized to access patient data");
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
                if (appointment.isAccept()) {
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
                if (!appointment.isAccept()) {
                    medProfAppointmentList.add(appointment);
                }
            }
            return medProfAppointmentList;
        } catch (Exception ex) {
            return new ArrayList<>();
        }
    }

    @Override
    public List<Appointment> findByMedicalProfessionalProfessionalId(Long professionalId) {
        return appointmentRepository.findByMedicalProfessionalProfessionalId(professionalId);
    }

    public void deleteAppointmentById(Long id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String username = userDetails.getUsername();
        Long user_id = userRepository.findByUsername(username).get().getId();
        boolean isManager = managerRepository.existsByUserId(user_id);
        /*
        ---------------------------
        | check Patient (himOnly) |
        ---------------------------
         */
        Appointment appointment = appointmentRepository.findById(id).get();
        String relatedusername = Objects.requireNonNull(
                userRepository
                        .findById(appointment
                                .getPatient()
                                .getUser().getId())
                                .orElse(null))
                .getUsername();

        boolean himOnly = username.equals(relatedusername);
        boolean isDocAccepted = appointment.isAccept();
        System.out.println(isDocAccepted);
        if ((himOnly && (!isDocAccepted))|| isManager) {
            appointmentRepository.deleteById(id);
        }
        else {
            throw new UnauthorizedAccessException("Unauthorized to access patient data");
        }
    }
}