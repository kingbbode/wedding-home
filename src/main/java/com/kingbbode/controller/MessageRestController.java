package com.kingbbode.controller;

import com.kingbbode.enums.YgResponse;
import com.kingbbode.model.Message;
import com.kingbbode.repository.MessageRepository;
import com.kingbbode.service.MessageCacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by YG-MAC on 2017. 5. 8..
 */
@RestController
@RequestMapping("/message")
public class MessageRestController {

    @Autowired
    private MessageCacheService messageCacheService;

    @GetMapping
    public List<Message> list(){
        return messageCacheService.findAll();
    }

    @PostMapping
    public ResponseEntity<String> save(@Valid @RequestBody Message message, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            for(ObjectError error : bindingResult.getAllErrors()){
                return new ResponseEntity<>(error.getDefaultMessage(), HttpStatus.FORBIDDEN);
            }
            return YgResponse.FAILED.result();
        }

        if(message.isInvalid()){
            return YgResponse.FORBIDDEN.result();
        }
        try {
            messageCacheService.save(message);
        }catch(Exception e){
            return YgResponse.FAILED.result();
        }
        return YgResponse.SUCCESS.result();
    }
}
