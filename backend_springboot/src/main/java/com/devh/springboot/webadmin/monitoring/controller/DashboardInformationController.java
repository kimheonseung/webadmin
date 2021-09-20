package com.devh.springboot.webadmin.monitoring.controller;

import com.devh.springboot.webadmin.common.util.ExceptionUtils;
import com.devh.springboot.webadmin.common.util.component.ResponseEntityUtils;
import com.devh.springboot.webadmin.monitoring.mapper.DashboardInformationMapper;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("api/dashboard-information")
@RequiredArgsConstructor
@Log4j2
public class DashboardInformationController {

    private final DashboardInformationMapper dashboardInformationMapper;
    private final ResponseEntityUtils responseEntityUtils;

    @GetMapping("{dashboardId}")
    public ResponseEntity<Object> getDashboardInformation(@PathVariable("dashboardId") String dashboardId) {
        log.info("[GET] /api/dashboard-information/"+dashboardId);
        ResponseEntity<Object> result;

        try {
            result = responseEntityUtils.get(dashboardInformationMapper.selectDashboardInformationByDashboardId(dashboardId));
        } catch (Exception e) {
            log.error(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
            result = responseEntityUtils.get(e);
        }

        return result;
    }
}
