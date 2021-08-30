package com.devh.springboot.webadmin.service;

import com.devh.springboot.webadmin.vo.ProcessVO;

import java.util.List;

public interface ProcessService {
    public List<ProcessVO> getProcessList();
}
