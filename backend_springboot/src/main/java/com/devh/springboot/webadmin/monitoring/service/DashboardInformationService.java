package com.devh.springboot.webadmin.monitoring.service;

import java.util.List;

import com.devh.springboot.webadmin.monitoring.model.DashboardInformation;
import com.devh.springboot.webadmin.monitoring.vo.DashboardInformationVO;

public interface DashboardInformationService {
    List<DashboardInformationVO> getVOListByDashboardId(String dashboardId);

    default DashboardInformationVO modelToVO(DashboardInformation model) {
        return DashboardInformationVO.builder()
            .dashboardId(model.getDashboardId())
            .dashboardName(model.getDashboardName())
            .row(model.getRow())
            .column(model.getColumn())
            .dashboardLayoutId(model.getDashboardLayoutId())
            .x(model.getX())
            .y(model.getY())
            .w(model.getW())
            .h(model.getH())
            .chartId(model.getChartId())
            .chartTest(model.getChartTest())
            .build();
    }

    default DashboardInformation VOToModel(DashboardInformationVO vo) {
        return DashboardInformation.builder()
            .dashboardId(vo.getDashboardId())
            .dashboardName(vo.getDashboardName())
            .row(vo.getRow())
            .column(vo.getColumn())
            .dashboardLayoutId(vo.getDashboardLayoutId())
            .x(vo.getX())
            .y(vo.getY())
            .w(vo.getW())
            .h(vo.getH())
            .chartId(vo.getChartId())
            .chartTest(vo.getChartTest())
            .build();
    }
}
