package com.kingbbode.controller;

import com.kingbbode.service.GalleryCacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by YG-MAC on 2017. 3. 11..
 */
@Controller
public class HomeController {
    @Autowired
    private GalleryCacheService galleryCacheService;

    @GetMapping("/")
    public String home(Model model){
        model.addAttribute("galleries",galleryCacheService.findAll());
        return "index";
    }
}
