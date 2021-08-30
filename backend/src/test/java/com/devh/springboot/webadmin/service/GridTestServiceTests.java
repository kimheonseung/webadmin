package com.devh.springboot.webadmin.service;

import com.devh.springboot.webadmin.common.util.ExceptionUtils;
import com.devh.springboot.webadmin.model.GridTest;
import com.devh.springboot.webadmin.vo.GridTestVO;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class GridTestServiceTests {
    private final Logger logger = LoggerFactory.getLogger(GridTestServiceTests.class);

    @Autowired
    private GridTestService gridTestService;

    @Test
    public void getAllTest() {
        try {
            logger.info("==================== GRID TEST SERVICE TEST - GET ALL TEST ====================");
            List<GridTestVO> gridTestVOList = gridTestService.getAll();
            if(gridTestVOList.size() > 0)
                gridTestVOList.forEach(System.out::println);
            else
                System.out.println("NO DATA");

        } catch (Exception e) {
            ExceptionUtils.getInstance().printErrorLogWithException(logger, e);
        }
    }

    @Test
    public void putTestData() {
        try {
            logger.info("==================== GRID TEST SERVICE TEST - PUT TEST DATA ====================");
            List<GridTestVO> gridTestVOList = gridTestService.getAll();
            final int testDataSize = gridTestVOList.size();
            if(testDataSize > 0) {
                System.out.println("TEST DATA : " + testDataSize + " FOUND.");
            }
            else {
                List<GridTest> gridTestList = new ArrayList<>();
                for(int i = 1 ; i <= 1378 ; ++i) {
                    gridTestList.add(
                            GridTest.builder()
                                .col1(String.valueOf(System.currentTimeMillis()))
                                .col2("user-"+i)
                                .col3("msg-"+i)
                            .build()
                    );
                }
                gridTestService.putGridTestData(gridTestList);
                System.out.println("SUCCESS TO PUT TEST DATA");
            }
        } catch (Exception e) {
            ExceptionUtils.getInstance().printErrorLogWithException(logger, e);
        }
    }
}
