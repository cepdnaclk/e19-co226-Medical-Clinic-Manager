package com.MedicalClinic.LifeCare.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Medication {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long medicationId;
    private String name;
    private String dosage;
    private LocalDate startDate;
    private LocalDate endDate;
    @ManyToOne(targetEntity = MedicalProfessional.class, cascade = CascadeType.MERGE)
    @JoinColumn(name = "professionalId", referencedColumnName = "professionalId")
    private MedicalProfessional medicalProfessional;
    @ManyToOne(targetEntity = Patient.class, cascade = CascadeType.MERGE)
    @JoinColumn(name = "patientId", referencedColumnName = "patientId")
    private Patient patient;
    @ManyToOne(targetEntity = Appointment.class, cascade = CascadeType.MERGE)
    @JoinColumn(name = "appointmentId", referencedColumnName = "appointmentId")
    private Appointment appointment;
}