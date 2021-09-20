package com.devh.springboot.webadmin.common.search;

import lombok.*;

/**
 * <pre>
 * Description :
 *     검색 조건을 갖는 VO
 * ===============================================
 * Member fields :
 *
 * ===============================================
 *
 * Author : HeonSeung Kim
 * Date   : 2021/08/25
 * </pre>
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SearchConditionVO {
    private String searchKey;
    private Object searchValue;
    private SearchDataType searchDataType;
    private SearchOperator searchOperator;
}
