package com.devh.springboot.webadmin.webuser.mapper;

import com.devh.springboot.webadmin.webuser.model.WebUser;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface WebUserMapper {
    WebUser selectByUserId(String userId);
}
