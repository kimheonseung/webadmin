package com.devh.springboot.webadmin.monitoring.vo;

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
public class ChartVO {
    private int id;
    private String test;
    private String name;
    private String type;
    private int dataCount;
    // private String name;
    // private String type; /* pie, line ... */
    // private String aggregationType; /* time, distribution */
    // private String mode; /* query, native */
    // private String query;
    // private int topN;
    // private String standard;
    // private String interval;
    // private String intervalStandard;
    
}
