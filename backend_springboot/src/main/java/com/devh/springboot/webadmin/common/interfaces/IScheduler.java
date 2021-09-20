package com.devh.springboot.webadmin.common.interfaces;


import com.devh.springboot.webadmin.common.constant.ScheduleStatus;

public interface IScheduler {
    void scheduleStart();
    ScheduleStatus getScheduleStatus();
}
