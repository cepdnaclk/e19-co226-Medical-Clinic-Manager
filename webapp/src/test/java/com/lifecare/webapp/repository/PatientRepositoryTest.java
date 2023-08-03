package com.lifecare.webapp.repository;

import com.lifecare.webapp.entity.Appointment;
import com.lifecare.webapp.entity.Patient;
import lombok.AllArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDate;
@SpringBootTest
class PatientRepositoryTest {
    @Autowired
    PatientRepository patientRepository;
    @Test
    public void savePatient () {
        Appointment appointment = Appointment.builder()
                .date(LocalDate.of(2023,07,29))
                .dueDate(LocalDate.of(2023,07,31))
                .reason("nothing")
                .build();

        Patient patient = Patient.builder()
                .fname("eshan")
                .lname("jayasundara")
                .nic("200026300635")
                .address("171,kanoyaya,kirimetiywa")
                .contact("0766370774")
                .dob(LocalDate.of(2000,9,19))
                .insuranceDetails("yes")
                .appointment(appointment)
                .build();

        patientRepository.save(patient);
    }
    @Test
    public void deletePatient() {
        patientRepository.deleteById(1L);
    }
}