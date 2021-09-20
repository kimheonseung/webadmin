package com.devh.springboot.webadmin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class BasicAuthController {
    @GetMapping
    public String test() {
        return "Hello Spring Security";
    }
}
