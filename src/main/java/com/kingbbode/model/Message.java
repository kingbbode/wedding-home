package com.kingbbode.model;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by YG-MAC on 2017. 5. 8..
 */
@Entity
public class Message {
    @Id
    @GeneratedValue
    private Long idx;

    @Column
    @NotEmpty
    @Length(min = 3, max = 15)
    private String name;

    @Column
    @NotEmpty
    @Length(min = 1, max = 255)
    private String content;

    public Long getIdx() {
        return idx;
    }

    public String getName() {
        return name;
    }

    public String getContent() {
        return content;
    }

    public boolean isInvalid(){
        return "유익선".equals(this.name) || "박진희".equals(this.name);
    }
}
