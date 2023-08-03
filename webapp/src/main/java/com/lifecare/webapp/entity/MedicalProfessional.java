package com.lifecare.webapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MedicalProfessional {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long professionalId;
    private String fname;
    private String lname;
    private String nic;
    private String address;
    private String contact;
    private LocalDate dob;
    private String speciality;
}
