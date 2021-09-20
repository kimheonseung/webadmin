package com.devh.springboot.webadmin.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class AuthRequest {

    private String userId;
    private String password;
    
}
