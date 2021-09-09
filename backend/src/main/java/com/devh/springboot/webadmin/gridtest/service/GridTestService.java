package com.devh.springboot.webadmin.gridtest.service;

import com.devh.springboot.webadmin.common.paging.vo.PageSearchRequestVO;
import com.devh.springboot.webadmin.common.paging.vo.PageSearchResponseVO;
import com.devh.springboot.webadmin.gridtest.model.GridTest;
import com.devh.springboot.webadmin.gridtest.vo.GridTestVO;

import java.util.List;

public interface GridTestService {
    public boolean putGridTestData(List<GridTest> gridTestList);
    public List<GridTestVO> getAll();
    public PageSearchResponseVO<GridTestVO, GridTest> getByPageSearch(PageSearchRequestVO pageSearchRequestVO);

    default GridTestVO modelToVO(GridTest gridTest) {
        return GridTestVO.builder()
                .col1(gridTest.getCol1())
                .col2(gridTest.getCol2())
                .col3(gridTest.getCol3())
                .build();
    }

    default GridTest voToModel(GridTestVO gridTestVO) {
        return GridTest.builder()
                .col1(gridTestVO.getCol1())
                .col2(gridTestVO.getCol2())
                .col3(gridTestVO.getCol3())
                .build();
    }
}
