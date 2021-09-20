package com.devh.springboot.webadmin.gridtest.controller;

import com.devh.springboot.webadmin.common.paging.vo.PageSearchRequestVO;
import com.devh.springboot.webadmin.common.util.ExceptionUtils;
import com.devh.springboot.webadmin.common.util.component.ResponseEntityUtils;
import com.devh.springboot.webadmin.gridtest.service.GridTestService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("api/gridtest")
@RequiredArgsConstructor
@Log4j2
public class GridTestController {
    
    private final ResponseEntityUtils responseEntityUtils;
    private final GridTestService gridTestService;

    @GetMapping
    public ResponseEntity<Object> getSearchTest(PageSearchRequestVO pageSearchRequestVO) {
        log.info("[GET] /api/gridtest... " + pageSearchRequestVO);

        ResponseEntity<Object> result;
        try {
            result = responseEntityUtils.get(gridTestService.getByPageSearch(pageSearchRequestVO));
        } catch (Exception e) {
            log.error(ExceptionUtils.getInstance().getPrintStackTraceToString(e));
            result = responseEntityUtils.get(e);
        }

        return result;
    }
}
