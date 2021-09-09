package com.devh.springboot.webadmin.monitoring.service;

import com.devh.springboot.webadmin.monitoring.mapper.ChartMapper;
import com.devh.springboot.webadmin.monitoring.model.Chart;
import com.devh.springboot.webadmin.monitoring.vo.ChartVO;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChartServiceImpl implements ChartService {

    private final ChartMapper chartMapper;

    @Override
    public ChartVO getVOByChartId(int chartId) {
        Chart chart = chartMapper.selectChartById(chartId);
        return modelToVO(chart);
    }
    
}
