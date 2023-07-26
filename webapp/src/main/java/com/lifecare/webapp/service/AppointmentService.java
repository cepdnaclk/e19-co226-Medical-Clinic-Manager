package com.lifecare.webapp.service;


import com.lifecare.webapp.entity.Appointment;

import java.util.List;

public interface AppointmentService {
    public Appointment saveAppointment(Appointment appointment);

    public List<Appointment> fetchAppointmentList();

    public Appointment fetchAppointmentById(Long appointmentId);
}
