package com.devh.springboot.webadmin.webuser.service;

import com.devh.springboot.webadmin.webuser.mapper.WebUserMapper;
import com.devh.springboot.webadmin.webuser.model.WebUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WebUserService implements UserDetailsService {

    private final WebUserMapper webUserMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        WebUser webUser = webUserMapper.selectByUserId(username);

        if(webUser == null)
            throw new UsernameNotFoundException(String.format("[%s] User not found", username));

        return webUser;
    }
    
}
