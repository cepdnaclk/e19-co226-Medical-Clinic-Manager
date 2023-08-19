package com.MedicalClinic.LifeCare.models;

import lombok.Data;

@Data
public class SetNewUsernameEmailPswd {
    String password;
    String newUsername;
    String newEmail;
    String newPassword;
}
