package com.devh.springboot.webadmin.webuser.mapper;

import java.util.List;

import com.devh.springboot.webadmin.webuser.model.Role;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RoleMapper {
    List<Role> selectByWebUserId(String webUserId);
}
