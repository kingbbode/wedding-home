package com.kingbbode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by YG-MAC on 2017. 3. 11..
 */
@Controller("/")
public class HomeController {
    @GetMapping
    public String home(){
        return "index";
    }
}
