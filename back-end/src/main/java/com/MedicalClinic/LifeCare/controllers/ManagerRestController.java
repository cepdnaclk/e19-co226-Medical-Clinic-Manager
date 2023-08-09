package com.MedicalClinic.LifeCare.controllers;

import com.MedicalClinic.LifeCare.entity.Manager;
import com.MedicalClinic.LifeCare.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/manager")
public class ManagerRestController {
    @Autowired
    ManagerService managerService;
    @PostMapping("/save")
    @PreAuthorize("hasRole('ADMIN')")
    public Manager saveManager(@RequestBody Manager manager) {
        return managerService.saveManager(manager);
    }
    @GetMapping("/all")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Manager> fetchManagerList() {
        return managerService.fetchManagerList();
    }
    @GetMapping("/find/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Manager fetchManagerById(@PathVariable("id") Long id) {
        return managerService.fetchManagerById(id);
    }
    @GetMapping("/findbyuserid/{uid}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public boolean existsPatientByUid(@PathVariable("uid") Long uid) {
        return managerService.existsPatientByUid(uid);
    }
    @PutMapping("/save/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Manager updateManager(@PathVariable("id") Long id, @RequestBody Manager manager){
        return managerService.updateManager(id, manager);
    }
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String deleteManager(@PathVariable("id") Long id){
        return managerService.deleteManagerById(id);
    }
}
