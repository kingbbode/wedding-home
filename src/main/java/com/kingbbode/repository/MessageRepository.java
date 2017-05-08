package com.kingbbode.repository;

import com.kingbbode.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by YG-MAC on 2017. 5. 8..
 */
public interface MessageRepository extends JpaRepository<Message, Long>{
}
