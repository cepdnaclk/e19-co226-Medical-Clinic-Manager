package com.MedicalClinic.LifeCare.entity;

import com.MedicalClinic.LifeCare.models.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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
    @Column(unique = true)
    private String nic;
    private String address;
    private String contact;
    private LocalDate dob;
    private String speciality;
    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "uid")
    private User user;
}
