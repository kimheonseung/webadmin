package com.devh.springboot.webadmin.webuser.model;

import org.springframework.security.core.GrantedAuthority;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Role implements GrantedAuthority {

    private long id;
    private String code;
    private String name;
    private String description;

    @Override
    public String getAuthority() {
        return code;
    }
}
