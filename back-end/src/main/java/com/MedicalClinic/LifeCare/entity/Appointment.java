package com.MedicalClinic.LifeCare.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long appointmentId;
    private LocalDate dueDate;
    private LocalDate date;
    private String reason;
    @ManyToOne(targetEntity = MedicalProfessional.class)
    @JoinColumn(name = "professionalId")
    private MedicalProfessional medicalProfessional;
    @ManyToOne(targetEntity = Patient.class)
    @JoinColumn(name = "patientId")
    private Patient patient;
    @Column(columnDefinition = "BOOLEAN DEFAULT false")
    private boolean accept;
}
