package com.lifecare.webapp.service;

import com.lifecare.webapp.entity.Appointment;
import com.lifecare.webapp.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
@Service
public class AppointmentServiceImpl implements AppointmentService{
    @Autowired
    AppointmentRepository appointmentRepository;
    @Override
    public Appointment saveAppointment(Appointment department) {
        return appointmentRepository.save(department);
    }

    @Override
    public List<Appointment> fetchAppointmentList() {
        return appointmentRepository.findAll();
    }

    @Override
    public Appointment fetchAppointmentById(Long appointmentId) {
        return appointmentRepository.findById(appointmentId).get();
    }
}
