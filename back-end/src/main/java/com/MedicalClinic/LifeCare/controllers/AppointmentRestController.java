package com.MedicalClinic.LifeCare.controllers;
import com.MedicalClinic.LifeCare.entity.Appointment;
import com.MedicalClinic.LifeCare.entity.Patient;
import com.MedicalClinic.LifeCare.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/appointment")
public class AppointmentRestController {
        @Autowired
        AppointmentService appointmentService;
        @PostMapping("/save")
        @PreAuthorize("hasRole('USER')")
        public Appointment saveAppointment(@RequestBody Appointment appointment) {
            return appointmentService.saveAppointment(appointment);
        }
        @GetMapping("/find/all")
        @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
        public List<Appointment> fetchAppointmentList() {
            return appointmentService.fetchAppointmentList();
        }
        @GetMapping("/find/patientid/{patient_id}")
        @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
        public List<Appointment> findByPatientPatientId(@PathVariable("patient_id") Long patientId) {
            return appointmentService.findByPatientPatientId(patientId);
        }
        @GetMapping("/find/medprofid/{medprof_id}")
        @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
        public List<Appointment> findByMedicalProfessionalProfessionalId(@PathVariable("medprof_id") Long professionalId) {
            return appointmentService.findByMedicalProfessionalProfessionalId(professionalId);
        }
        @GetMapping("/find/medprofaccepted/{patient_id}")
        @PreAuthorize("hasRole('USER')")
        public List<Appointment> findByMedicalProfessionalNotAccepted(@PathVariable("patient_id") Long patientId) {
            return appointmentService.findByMedicalProfessionalNotAccepted(patientId);
        }
        @GetMapping("/find/medprofnotaccepted/{patient_id}")
        @PreAuthorize("hasRole('USER')")
        public List<Appointment> findByMedicalProfessionalAccepted(@PathVariable("patient_id") Long patientId) {
            return appointmentService.findByMedicalProfessionalAccepted(patientId);
        }
        @GetMapping("/find/{medprof_id}/{patient_id}")
        @PreAuthorize("hasRole('MODERATOR')")
        public List<Appointment> findByProfessionalIdAndPatientId(@PathVariable("medprof_id") Long medprofId, @PathVariable("patient_id") Long patientId) {
            return appointmentService.findByProfessionalIdAndPatientId(medprofId, patientId);
        }
        @GetMapping("/count/{medprof_id}")
        @PreAuthorize("hasRole('MODERATOR')")
        public List<List<Long>> countAppointmentsByProfessionalAndPatient(@PathVariable("medprof_id") Long medprofId) {
            return appointmentService.countAppointmentsByProfessionalAndPatient(medprofId);
        }
        @GetMapping("/find/patient/{medprof_id}")
        @PreAuthorize("hasRole('MODERATOR')")
        public List<Patient> findPatientsByMedicalProfessionalId(@PathVariable("medprof_id") Long medprofId) {
            return appointmentService.findPatientsByMedicalProfessionalId(medprofId);
        }
        @DeleteMapping("/delete/{id}")
        @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
        public String deleteAppointmentById(@PathVariable("id") Long appointmentId) {
            appointmentService.deleteAppointmentById(appointmentId);
            return "Appointment Deleted Successful !";
        }
        @Autowired
        private SimpMessagingTemplate messagingTemplate;

        @PutMapping("/save/{id}")
        @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
        public Appointment updateAppointment(@PathVariable("id") Long appointmentId, @RequestBody Appointment appointment) {
            Appointment updatedAppointment = appointmentService.updateAppointment(appointmentId, appointment);
//            messagingTemplate.convertAndSend("/topic/refresh", "REFRESH");
            return updatedAppointment;
        }
}
