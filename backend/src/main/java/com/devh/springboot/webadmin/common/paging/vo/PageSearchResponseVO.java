package com.devh.springboot.webadmin.common.paging.vo;

import lombok.Data;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * <pre>
 * Description :
 *     페이징 결과 정보를 담는 객체
 *     다양한 곳에서 사용할 수 있도록 제네릭 타입(DTO, ENTITY) 지정
 * ===============================================
 * Member fields :
 *
 * ===============================================
 *
 * Author : HeonSeung Kim
 * Date   : 2021-02-10
 * </pre>
 */
@Data
public class PageSearchResponseVO<VO, MODEL> {
    private List<VO> voList;
    /* 총 데이터 갯수 */
    private long total;
    /* 한 페이지에 보여질 갯수 */
    private int rows;
    /* 현재 페이지 번호 */
    private int page;
    /* 목록 사이즈 */
    private int size;
    /* 총 페이지 번호 */
    private int totalPage;
    /* 시작 페이지 번호, 끝 페이지 번호 */
    private int start, end;
    /* 이전, 다음 */
    private boolean prev, next;
    /* 페이지 번호 목록 */
    private List<Integer> pageList;

    public PageSearchResponseVO(List<MODEL> result, Function<MODEL, VO> fn, PageSearchRequestVO pageSearchRequestVO, long total) {
        this.voList    = result.stream().map(fn).collect(Collectors.toList());
        this.page      = pageSearchRequestVO.getPage();
        this.size      = pageSearchRequestVO.getSize();
        this.rows      = pageSearchRequestVO.getRows();
        this.total     = total;
        this.totalPage = (int) Math.ceil(this.total / (double)this.rows);
        int tempEnd    = (int)(Math.ceil(this.page / (double)this.size)) * this.size;
        this.start     = tempEnd - (this.size - 1);
        this.prev      = this.start > 1;
        this.next      = this.totalPage > tempEnd;
        this.end       = Math.min(this.totalPage, tempEnd);
        this.pageList  = IntStream.rangeClosed(this.start, this.end).boxed().collect(Collectors.toList());

        /*
         * 화면에서 시작페이지(start)
         * 화면에서 끝페이지(end)
         * 이전.다음 이동 링크 여부(prev, next)
         * 현재 페이지(page)
         *
         * - 임시 끝번호
         *   tempEnd = (int)(Math.ceil(페이지번호/10.0)) * 10
         *   전체 데이터수가 적다면 10페이지로 끝나면 안됨..
         *   end를 먼저 계산하는 것은 start를 계산하기 쉽기 때문이다.
         * - 시작번호
         *   start = tempEnd - 9
         * - 끝번호
         *   만약 마지막 페이지가 33이면 tempEnd는 40이 된다.
         *   이를 위해 Page<Guestbook>의 getTotalPages()를 이용한다.
         *   totalPage = result.getTotalPages(); // result는 Page<Guestbook>
         *   end = totalPage > tempEnd ? tempEnd : totalPage;
         * - 이전
         *   시작번호가 1보다 큰경우
         *   prev = start > 1;
         * - 다음
         *   realEnd가 끝번호(endPage)보다 큰 경우
         *   next = totalPage > tempEnd
         */
    }

}
