package com.devh.springboot.webadmin.monitoring.mapper;

import com.devh.springboot.webadmin.monitoring.model.Chart;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ChartMapper {
    Chart selectChartById(int chartId);
}
