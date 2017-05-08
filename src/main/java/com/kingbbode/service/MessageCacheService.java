package com.kingbbode.service;

import com.kingbbode.model.Message;
import com.kingbbode.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * Created by YG-MAC on 2017. 5. 8..
 */
@Service
public class MessageCacheService {

    @Autowired
    private MessageRepository messageRepository;

    private List<Message> list;

    @PostConstruct
    public void init(){
        list = messageRepository.findAll();
    }

    public void save(Message message){
        list.add(message);
        messageRepository.save(message);
    }

    public List<Message> findAll(){
        return this.list;
    }

}
