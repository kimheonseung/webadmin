package com.devh.springboot.webadmin.monitoring.service;

import java.util.List;

import com.devh.springboot.webadmin.monitoring.vo.ProcessVO;

public interface ProcessService {
    public List<ProcessVO> getProcessList();
}
