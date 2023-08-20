package com.MedicalClinic.LifeCare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@SpringBootApplication
public class LifCareWebApp {

	public static void main(String[] args) {
    SpringApplication.run(LifCareWebApp.class, args);
	}

}
