package com.MedicalClinic.LifeCare.service;

import com.MedicalClinic.LifeCare.entity.Manager;
import com.MedicalClinic.LifeCare.entity.MedicalProfessional;

import java.util.List;

public interface ManagerService {
    public Manager saveManager(Manager manager);
    public List<Manager> fetchManagerList();
    public Manager fetchManagerById(Long managerId);
    public Manager updateManager(Long id, Manager manager);
    public String deleteManagerById(Long managerId);

    public boolean existsPatientByUid(Long uid);

    public Manager findManagerByUid(Long uid);
}
