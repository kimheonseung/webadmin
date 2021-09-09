package com.devh.springboot.webadmin.monitoring.service;

import com.devh.springboot.webadmin.monitoring.model.Chart;
import com.devh.springboot.webadmin.monitoring.vo.ChartVO;

public interface ChartService {
    ChartVO getVOByChartId(int chartId);

    default ChartVO modelToVO(Chart model) {
        return ChartVO.builder()
            .id(model.getId())
            .test(model.getTest())
            .name(model.getName())
            .type(model.getType())
            .dataCount(model.getDataCount())
            .build();
    }

    default Chart VOToModel(ChartVO vo) {
        return Chart.builder()
            .id(vo.getId())
            .test(vo.getTest())
            .name(vo.getName())
            .type(vo.getType())
            .dataCount(vo.getDataCount())
            .build();
    }
}
