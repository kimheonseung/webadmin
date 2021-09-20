package com.devh.springboot.webadmin.common.search;

/**
 * <pre>
 * Description :
 *     검색 조건 연산자
 * ===============================================
 * Member fields :
 *     EQUAL
 *     LT
 *     LTE
 *     GT
 *     GTE
 *     LIKE
 *     NOT_EQUAL
 * ===============================================
 *
 * Author : HeonSeung Kim
 * Date   : 2021/08/25
 * </pre>
 */
public enum SearchOperator {
    EQUAL,
    LT,
    LTE,
    GT,
    GTE,
    LIKE,
    IN,
    NOT_IN,
    NOT_EQUAL;
}
