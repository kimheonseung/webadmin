package com.devh.springboot.webadmin.webuser.model;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class WebUser {
    /* primary key */
    private String id;
    private String userId;
    private String name;
    private String password;
    private String email;
    private String phone;
    private Date lastLogin;
    private Date lastPasswordChange;
    private Date lastLoginFail;
    private int loginFailCount;
    private String loginFailIp;
    private String loginIp;
    private String accessIp;
    /* foreign key */
    private String roleId;
    private String networkMapId;
    private String dashboardLayoutId;
    private String description;
    
}
