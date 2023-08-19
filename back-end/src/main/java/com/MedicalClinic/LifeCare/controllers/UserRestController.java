package com.MedicalClinic.LifeCare.controllers;

import com.MedicalClinic.LifeCare.exception.UnauthorizedAccessException;
import com.MedicalClinic.LifeCare.models.SetNewUsernameEmailPswd;
import com.MedicalClinic.LifeCare.models.User;
import com.MedicalClinic.LifeCare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/user")
public class UserRestController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;


    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable("id") Long id, @RequestBody SetNewUsernameEmailPswd user) {
        System.out.println(user.getNewUsername());
        System.out.println(user.getNewPassword());
        System.out.println(user.getNewEmail());
        System.out.println(user.getPassword());
        User userDB = userRepository.findById(id).get();
        if(encoder.matches(user.getPassword(), userDB.getPassword())) {
            userDB.setUsername(user.getNewUsername());
            userDB.setPassword(encoder.encode(user.getNewPassword()));
            userDB.setEmail(user.getNewEmail());
            userRepository.save(userDB);
            return "user updated !";
        }
        throw new UnauthorizedAccessException("Unauthorized to access patient data");
    }
}
