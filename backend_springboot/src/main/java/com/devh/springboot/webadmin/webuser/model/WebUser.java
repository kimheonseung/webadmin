package com.devh.springboot.webadmin.webuser.model;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class WebUser implements UserDetails {
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
    private String networkMapId;
    private String dashboardLayoutId;
    private String description;

    private List<Role> roleList;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roleList;
    }
    @Override
    public String getUsername() {
        return this.userId;
    }

    @Override
    public boolean isAccountNonExpired() {
        // lastPasswordChange
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        // loginFailCount
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        // lastPasswordChange
        return true;
    }
    @Override
    public boolean isEnabled() {
        return isAccountNonExpired() && isAccountNonLocked() && isCredentialsNonExpired();
    }
}
