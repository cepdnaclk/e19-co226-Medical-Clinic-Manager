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
    private Long appointmentid;
    private String fname;
    private String lname;
    private String nic;
    private String address;
    private String contact;
    private Date dob;
    private String insuranceDetails;

    public Long getAppointmentid() {
        return appointmentid;
    }

    public void setAppointmentid(Long appointmentid) {
        this.appointmentid = appointmentid;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getInsuranceDetails() {
        return insuranceDetails;
    }

    public void setInsuranceDetails(String insuranceDetails) {
        this.insuranceDetails = insuranceDetails;
    }

    public Appointment(Long appointmentid, String fname, String lname, String nic, String address, String contact, Date dob, String insuranceDetails) {
        this.appointmentid = appointmentid;
        this.fname = fname;
        this.lname = lname;
        this.nic = nic;
        this.address = address;
        this.contact = contact;
        this.dob = dob;
        this.insuranceDetails = insuranceDetails;
    }

    public Appointment() {
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "appointmentid=" + appointmentid +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", nic='" + nic + '\'' +
                ", address='" + address + '\'' +
                ", contact='" + contact + '\'' +
                ", dob=" + dob +
                ", insuranceDetails='" + insuranceDetails + '\'' +
                '}';
    }
}
