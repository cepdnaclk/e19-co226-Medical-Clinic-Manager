package com.MedicalClinic.LifeCare.entity;

import com.MedicalClinic.LifeCare.models.User;
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
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long patientId;
    private String fname;
    private String lname;
    private String nic;
    private String address;
    private String contact;
    private LocalDate dob;
    private String insuranceDetails;
    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "uid")
    private User user;
}
