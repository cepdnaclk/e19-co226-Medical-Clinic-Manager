package com.lifecare.webapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long medicalRecordId;
    private String treatmentPlan;
    private String medicalCondition;
    @ManyToOne(targetEntity = MedicalProfessional.class, cascade = CascadeType.MERGE)
    @JoinColumn(name = "professionalId")
    private MedicalProfessional medicalProfessional;
    @ManyToOne(targetEntity = Patient.class, cascade = CascadeType.MERGE)
    @JoinColumn(name = "patientId")
    private Patient patient;
}
