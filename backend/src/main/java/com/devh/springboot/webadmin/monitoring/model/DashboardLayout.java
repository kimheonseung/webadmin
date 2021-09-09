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
public class DashboardLayout {
    private long id;
    private int x;
    private int y;
    private int w;
    private int h;
    private String dashboardId;
    private int chartId;
}
