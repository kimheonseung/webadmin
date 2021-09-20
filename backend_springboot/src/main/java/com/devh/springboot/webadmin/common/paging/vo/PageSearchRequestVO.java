package com.devh.springboot.webadmin.common.paging.vo;

import com.devh.springboot.webadmin.common.constant.PageConstant;
import com.devh.springboot.webadmin.common.search.SearchConditionVO;
import lombok.*;
import org.elasticsearch.search.sort.SortOrder;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.List;

/**
 * <pre>
 * Description :
 *     페이징, 검색 요청 관련 클래스
 * ===============================================
 * Member fields :
 *
 * ===============================================
 *
 * Author : HeonSeung Kim
 * Date   : 2021-02-10
 * </pre>
 */
@Getter
@Setter
@ToString
public class PageSearchRequestVO {
    /* Default Constructor */
    public PageSearchRequestVO() {
        this.page = 1;
        this.size = PageConstant.DEFAULT_SIZE.getIntValue();
        this.rows = PageConstant.DEFAULT_ROWS.getIntValue();
        this.sortOrder = "DESC";
        this.searchConditionVOList = new ArrayList<>();
        calculateOffset();
    }

    /* Paging */
    private int page;
    private int size;
    private int rows;
    private int offset;
    /* Search */
    private long searchFrom;
    private long searchTo;
    private String sortIndex;
    private String sortOrder;
    private List<SearchConditionVO> searchConditionVOList;

    public void calculateOffset() {
        this.offset = (this.page - 1) * this.rows;
    }

    public Pageable getPageable(Sort sort) {
        return PageRequest.of(page - 1, size, sort);
    }

    public boolean isAll() {
        return this.searchFrom <= 0 &&
                this.searchTo <= 0 &&
                searchConditionVOList.size() == 0;
    }

    public boolean isFromOrToOnly() {
        return isToOnly() || isFromOnly();
    }

    private boolean isToOnly() {
        return this.searchFrom <= 0 && this.searchTo > 0;
    }

    private boolean isFromOnly() {
        return this.searchFrom > 0 && this.searchTo <= 0;
    }

    public SortOrder getSortOrder() {
        if ("ASC".equalsIgnoreCase(this.sortOrder))
            return SortOrder.ASC;
        else
            return SortOrder.DESC;
    }

    /* Setter Override */
    public void setPage(int page) {
        this.page = page;
        calculateOffset();
    }

    public void setRows(int rows) {
        this.rows = rows;
        calculateOffset();
    }
}
