package com.devh.springboot.webadmin.webuser.service;

import java.util.List;

import com.devh.springboot.webadmin.webuser.mapper.RoleMapper;
import com.devh.springboot.webadmin.webuser.mapper.WebUserMapper;
import com.devh.springboot.webadmin.webuser.model.Role;
import com.devh.springboot.webadmin.webuser.model.WebUser;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
public class WebUserService implements UserDetailsService {

    private final WebUserMapper webUserMapper;
    private final RoleMapper roleMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        WebUser webUser = webUserMapper.selectByUserId(username);

        List<Role> roleList = roleMapper.selectByWebUserId(webUser.getId());
        webUser.setRoleList(roleList);

        log.info("====== User Found ======");
        log.info(webUser);


        if(webUser == null)
            throw new UsernameNotFoundException(String.format("[%s] User not found", username));

        return webUser;
    }
    
}
