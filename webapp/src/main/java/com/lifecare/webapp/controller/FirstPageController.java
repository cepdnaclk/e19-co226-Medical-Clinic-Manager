package com.lifecare.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class FirstPageController {
    @GetMapping("/")
    public String firstPageFunction() {
        return "firstPage";
    }
}
