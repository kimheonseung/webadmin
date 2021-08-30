package com.devh.springboot.webadmin.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@ToString
public class ProcessVO {
    private String pid;
    private String parentPid;
    private boolean hasParent;
    private String user;
    private String startAt;
    private String cpuDuration;
    private String cmd;
    private final List<ProcessVO> childProcessVOList = new ArrayList<>();

    public void addChildProcessVO(ProcessVO processVO) {
        this.childProcessVOList.add(processVO);
    }

}
