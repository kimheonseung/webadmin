package com.devh.springboot.webadmin.service;

import com.devh.springboot.webadmin.vo.ProcessVO;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProcessServiceImpl implements ProcessService {

    @Override
    public List<ProcessVO> getProcessList() {
        Map<Long, ProcessVO> parentMap = new HashMap<>();
        ProcessHandle.allProcesses().forEach(p -> {
            final long pid = p.pid();
//            if(p.parent().isEmpty()) {
//                final ProcessVO parentProcessVO = createProcessVO(p);
//                parentMap.put(pid, parentProcessVO);
//                setChildProcessRecursive(p, parentProcessVO);
//            }
            ProcessHandle.of(pid).ifPresent(processHandle -> {
                if(processHandle.parent().isEmpty()) {
                    final ProcessVO parentProcessVO = createProcessVO(processHandle);
                    parentMap.put(pid, parentProcessVO);
                    setChildProcessRecursive(processHandle, parentProcessVO);
                }
            });
        });
        return new ArrayList<>(parentMap.values());
    }
    private void setChildProcessRecursive(ProcessHandle processHandle, ProcessVO parentProcessVO) {
        processHandle.children().forEach(childProcessHandle -> {
            final ProcessVO childProcessVO = createProcessVO(childProcessHandle);
            parentProcessVO.addChildProcessVO(childProcessVO);
            setChildProcessRecursive(childProcessHandle, childProcessVO);
        });
    }

    private ProcessVO createProcessVO(ProcessHandle processHandle) {
        final String pid = String.valueOf(processHandle.pid());
        final String parentPid = text(processHandle.parent().map(ProcessHandle::pid));
        final ProcessHandle.Info processHandleInfo = processHandle.info();
        return ProcessVO.builder()
                .pid(pid)
                .parentPid(parentPid)
                .hasParent(!"-".equals(parentPid))
                .user(text(processHandleInfo.user()))
                .startAt(text(processHandleInfo.startInstant()))
                .cpuDuration(text(processHandleInfo.totalCpuDuration()))
                .cmd(text(processHandleInfo.command()))
                .build();
    }

    private String text(Optional<?> optional) {
        return optional.map(Object::toString).orElse("-");
    }
}
