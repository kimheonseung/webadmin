package com.devh.springboot.webadmin.gridtest.service;

import com.devh.springboot.webadmin.common.paging.vo.PageSearchRequestVO;
import com.devh.springboot.webadmin.common.paging.vo.PageSearchResponseVO;
import com.devh.springboot.webadmin.gridtest.mapper.GridTestMapper;
import com.devh.springboot.webadmin.gridtest.model.GridTest;
import com.devh.springboot.webadmin.gridtest.vo.GridTestVO;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GridTestServiceImpl implements GridTestService {
    private final GridTestMapper gridTestMapper;

    @Override
    public boolean putGridTestData(List<GridTest> gridTestList) {
        int insertResult = gridTestMapper.insertTestData(gridTestList);
        return insertResult > 0;
    }

    @Override
    public List<GridTestVO> getAll() {
        List<GridTest> gridTestList = gridTestMapper.selectAll();

        List<GridTestVO> gridTestVOList = new ArrayList<>();

        gridTestList.forEach(gridTest -> {
            gridTestVOList.add(modelToVO(gridTest));
        });

        return gridTestVOList;
    }

    @Override
    public PageSearchResponseVO<GridTestVO, GridTest> getByPageSearch(PageSearchRequestVO pageSearchRequestVO) {
        List<GridTest> gridTestList = gridTestMapper.selectByPageSearch(pageSearchRequestVO);
        long totalCount = gridTestMapper.selectCountAll(pageSearchRequestVO);
        return new PageSearchResponseVO<GridTestVO, GridTest>(gridTestList, this::modelToVO, pageSearchRequestVO, totalCount);
    }

}
