package com.devh.springboot.webadmin.mapper;

import com.devh.springboot.webadmin.common.paging.vo.PageSearchRequestVO;
import com.devh.springboot.webadmin.model.GridTest;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GridTestMapper {
    Integer insertTestData(List<GridTest> gridTestList);
    List<GridTest> selectAll();
    List<GridTest> selectByPageSearch(PageSearchRequestVO pageSearchRequestVO);
    long selectCountAll(PageSearchRequestVO pageSearchRequestVO);
}
