package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Manager;
import com.MedicalClinic.LifeCare.entity.Patient;
import com.MedicalClinic.LifeCare.exception.UnauthorizedAccessException;
import com.MedicalClinic.LifeCare.repository.ManagerRepository;
import com.MedicalClinic.LifeCare.repository.MedicalProfessionalRepository;
import com.MedicalClinic.LifeCare.repository.PatientRepository;
import com.MedicalClinic.LifeCare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ManagerServiceImpl implements ManagerService{
    @Autowired
    PatientRepository patientRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    MedicalProfessionalRepository medicalProfessionalRepository;
    @Autowired
    ManagerRepository managerRepository;

    @Override
    //get authority (Manager)
    public Manager saveManager(Manager manager) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String username = userDetails.getUsername();
        /*
        ---------------------------
        | check Manager (himOnly) |
        ---------------------------
         */
        String relatedusername = Objects.requireNonNull(userRepository.findById(manager.getUser().getId()).orElse(null)).getUsername();
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            System.out.println(username);
            return managerRepository.save(manager);
        }
        throw new UnauthorizedAccessException("Unauthorized to access manager data");
    }

    @Override
    //Get authority all
    public List<Manager> fetchManagerList() {
        return managerRepository.findAll();
    }

    @Override
    //Get authority all
    public Manager fetchManagerById(Long managerId) {
        return managerRepository.findById(managerId).get();
    }

    @Override
    //get auth manager
    public Manager updateManager(Long id, Manager manager) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String username = userDetails.getUsername();
        /*
        ---------------------------
        | check Manager (himOnly) |
        ---------------------------
         */
        Manager managerDBonlyHim = managerRepository.findById(id).get();
        String relatedusername = managerDBonlyHim.getUser().getUsername();
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            managerDBonlyHim.setFname(manager.getFname());
            managerDBonlyHim.setLname(manager.getLname());
            managerDBonlyHim.setNic(manager.getNic());
            managerDBonlyHim.setAddress(manager.getAddress());
            managerDBonlyHim.setContact(manager.getContact());
            managerDBonlyHim.setDob(manager.getDob());
            return managerRepository.save(managerDBonlyHim);
        }
        throw new UnauthorizedAccessException("Unauthorized to access manager data");
    }
    @Override
    //Get authority Manager
    public String deleteManagerById(Long managerId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails1 = (UserDetails) auth.getPrincipal();

        String username = userDetails1.getUsername();
        /*
        ---------------------------
        | check Manager (himOnly) |
        ---------------------------
         */
        Manager manager = managerRepository.findById(managerId).get();
        String relatedusername = manager.getUser().getUsername();
        boolean himOnly = username.equals(relatedusername);

        if (himOnly) {
            managerRepository.deleteById(managerId);
            return "manager deleted successfully!";
        }
        throw new UnauthorizedAccessException("Unauthorized to access manager data");
    }

    @Override
    public boolean existsPatientByUid(Long uid) {
        return managerRepository.existsByUserId(uid);
    }
}
