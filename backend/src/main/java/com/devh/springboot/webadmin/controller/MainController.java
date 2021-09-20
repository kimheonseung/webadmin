package com.devh.springboot.webadmin.controller;

import com.devh.springboot.webadmin.common.util.ExceptionUtils;
import com.devh.springboot.webadmin.common.util.component.ResponseEntityUtils;
import com.devh.springboot.webadmin.monitoring.service.ProcessService;
import com.devh.springboot.webadmin.webuser.mapper.WebUserMapper;
import com.devh.springboot.webadmin.webuser.model.WebUser;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequiredArgsConstructor
@Log4j2
public class MainController {
    private final ResponseEntityUtils responseEntityUtils;
    private final ProcessService processService;
    private final WebUserMapper webUserMapper;

    // @GetMapping("api/auth/{userId}")
    // public String getUser(@PathVariable("userId") String userId) {
    //     WebUser webUser = webUserMapper.selectByUserId(userId);
    //     log.info(webUser);
    //     return "DONE!";
    // }

    @GetMapping("system-status/process-list")
    public @ResponseBody ResponseEntity<Object> getProcessList() {
        log.info("[GET] /system-status/process-list... ");

        ResponseEntity<Object> result;

        try {
            result = responseEntityUtils.get(processService.getProcessList());
        } catch (Exception e) {
            log.error(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
            result = responseEntityUtils.get(e);
        }

        return result;
    }
}
