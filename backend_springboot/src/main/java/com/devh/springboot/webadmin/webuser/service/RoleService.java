package com.devh.springboot.webadmin.webuser.service;

import java.util.List;

import com.devh.springboot.webadmin.webuser.mapper.RoleMapper;
import com.devh.springboot.webadmin.webuser.model.Role;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleMapper roleMapper;

    public List<Role> getListByUserId(String userId) {
        return roleMapper.selectByWebUserId(userId);
    }
}
