package com.devh.springboot.webadmin.monitoring.service;

import java.util.ArrayList;
import java.util.List;

import com.devh.springboot.webadmin.monitoring.mapper.DashboardInformationMapper;
import com.devh.springboot.webadmin.monitoring.model.DashboardInformation;
import com.devh.springboot.webadmin.monitoring.vo.DashboardInformationVO;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
public class DashboardInformationServiceImpl implements DashboardInformationService {

    private final DashboardInformationMapper dashboardInformationMapper;

    @Override
    public List<DashboardInformationVO> getVOListByDashboardId(String dashboardId) {
        List<DashboardInformation> modelList = dashboardInformationMapper.selectDashboardInformationByDashboardId(dashboardId);
        List<DashboardInformationVO> result = new ArrayList<>();
        modelList.forEach(model -> result.add(modelToVO(model)));
        return result;
    }
    
}
