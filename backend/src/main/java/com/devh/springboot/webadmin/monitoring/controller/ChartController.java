package com.devh.springboot.webadmin.monitoring.controller;

import com.devh.springboot.webadmin.common.util.ExceptionUtils;
import com.devh.springboot.webadmin.common.util.component.ResponseEntityUtils;
import com.devh.springboot.webadmin.monitoring.service.ChartService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("api/chart")
@RequiredArgsConstructor
@Log4j2
public class ChartController {
    
    private final ResponseEntityUtils responseEntityUtils;
    private final ChartService chartService;

    @GetMapping("{chartId}")
    public ResponseEntity<Object> getChart(@PathVariable("chartId") int chartId) {
        log.info("[GET] /api/chart/"+chartId);
        ResponseEntity<Object> result;

        try {
            result = responseEntityUtils.get(chartService.getVOByChartId(chartId));
        } catch (Exception e) {
            log.error(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
            result = responseEntityUtils.get(e);
        }
        
        return result;
    }
}
