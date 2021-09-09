package com.devh.springboot.webadmin.monitoring.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@ToString
public class DashboardInformation {
    private String dashboardId;
    private String dashboardName;
    private int row;
    private int column;
    private String dashboardLayoutId;
    private int x;
    private int y;
    private int w;
    private int h;
    private int chartId;
    private String chartTest;
}
