package com.lifecare.webapp.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long appointmentId;
    private Date dueDate;
    private Date date;
    private String reason;

    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Appointment(Long appointmentId, Date dueDate, Date date, String reason) {
        this.appointmentId = appointmentId;
        this.dueDate = dueDate;
        this.date = date;
        this.reason = reason;
    }

    public Appointment() {
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "appointmentId=" + appointmentId +
                ", dueDate=" + dueDate +
                ", date=" + date +
                ", Reason='" + reason + '\'' +
                '}';
    }
}
