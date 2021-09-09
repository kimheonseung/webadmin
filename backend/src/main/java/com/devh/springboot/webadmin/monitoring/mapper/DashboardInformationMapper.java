package com.devh.springboot.webadmin.monitoring.mapper;

import java.util.List;

import com.devh.springboot.webadmin.monitoring.model.DashboardInformation;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DashboardInformationMapper {
    List<DashboardInformation> selectDashboardInformationByDashboardId(String dashboardId);
}
