package com.kingbbode.enums;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 * Created by YG-MAC on 2017. 5. 8..
 */
public enum YgResponse {
    SUCCESS(new ResponseEntity<>("성공", HttpStatus.OK)),
    FAILED(new ResponseEntity<>("잠시 후에 다시 시도해주세요.ㅠㅠ", HttpStatus.INTERNAL_SERVER_ERROR)),
    FORBIDDEN(new ResponseEntity<>("신랑,신부 이름은 금지^^!", HttpStatus.FORBIDDEN));

    private final ResponseEntity<String> responseEntity;

    YgResponse(ResponseEntity<String> responseEntity) {
        this.responseEntity = responseEntity;
    }

    public ResponseEntity<String> result(){
        return this.responseEntity;
    }
}
