package com.devh.springboot.webadmin.common.util.component;

import com.devh.springboot.webadmin.common.api.response.ResultToJsonConverter;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.io.File;
import java.net.MalformedURLException;

/**
 * <pre>
 * Description :
 *     ResponseEntity 공통화
 * ===============================================
 * Member fields :
 *
 * ===============================================
 *
 * Author : HeonSeung Kim
 * Date   : 2021/07/01
 * </pre>
 */
@Component
public class ResponseEntityUtils {

    /**
     * <pre>
     * Description
     *     서비스 로직에서 결과 정상 반환 시, 해당 객체를 인자로 넘겨받아
     *     HttpStatus OK 값과 함께 result 반환
     * ===============================================
     * Parameters
     *
     * Returns
     *
     * Throws
     *
     * ===============================================
     *
     * Author : HeonSeung Kim
     * Date   : 2021/07/01
     * </pre>
     */
    public ResponseEntity<Object> get(Object body) {
        if(body instanceof File) {
            File target = (File) body;
            try {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=\"" + target.getName() + "\";")
                        .header(HttpHeaders.CONTENT_LENGTH, String.valueOf(target.length()))
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_OCTET_STREAM.toString())
                        .body(new UrlResource(target.toURI()));
            } catch (MalformedURLException e) {
                return get(e);
            }
        } else {
            ResultToJsonConverter resultToJsonConverter = ResultToJsonConverter.init();
            resultToJsonConverter.putResultMapToResultJson(body);
            return new ResponseEntity<>(resultToJsonConverter.get(), HttpStatus.OK);
        }
    }

    /**
     * <pre>
     * Description
     *     서비스 로직에서 결과 반환 실패 시, 관련 익셉션을 인자로 받아
     *     HttpStatus INTERNAL_SERVER_ERROR 값과 함께 익셉션 관련 객체 반환
     * ===============================================
     * Parameters
     *
     * Returns
     *
     * Throws
     *
     * ===============================================
     *
     * Author : HeonSeung Kim
     * Date   : 2021/07/01
     * </pre>
     */
    public ResponseEntity<Object> get(Exception e) {
        ResultToJsonConverter resultToJsonConverter = ResultToJsonConverter.init();
        resultToJsonConverter.putResultMapToExceptionInformation(e);
        return new ResponseEntity<>(resultToJsonConverter.get(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
