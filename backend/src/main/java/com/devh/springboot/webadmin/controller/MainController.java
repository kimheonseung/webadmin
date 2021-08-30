package com.devh.springboot.webadmin.controller;

import com.devh.springboot.webadmin.common.paging.vo.PageSearchRequestVO;
import com.devh.springboot.webadmin.common.util.ExceptionUtils;
import com.devh.springboot.webadmin.common.util.component.ResponseEntityUtils;
import com.devh.springboot.webadmin.service.GridTestService;
import com.devh.springboot.webadmin.service.ProcessService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Log4j2
public class MainController {
    private final ResponseEntityUtils responseEntityUtils;
    private final GridTestService gridTestService;
    private final ProcessService processService;

    @GetMapping("search/sample")
    public ResponseEntity<Object> getSearchSample() {
        log.info("[GET] /search/sample...");

        ResponseEntity<Object> result;
        try {
            result = responseEntityUtils.get(gridTestService.getAll());
        } catch (Exception e) {
            log.error(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
            result = responseEntityUtils.get(e);
        }

        return result;
    }

    @GetMapping("search/test")
    public ResponseEntity<Object> getSearchTest(PageSearchRequestVO pageSearchRequestVO) {
        log.info("[GET] /search/test... " + pageSearchRequestVO);

        ResponseEntity<Object> result;
        try {
            result = responseEntityUtils.get(gridTestService.getByPageSearch(pageSearchRequestVO));
        } catch (Exception e) {
            log.error(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
            result = responseEntityUtils.get(e);
        }

        return result;
    }

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
