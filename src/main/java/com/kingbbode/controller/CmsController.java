package com.kingbbode.controller;

import com.kingbbode.aws.UploadObjectSingleOperation;
import com.kingbbode.model.Gallery;
import com.kingbbode.repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by YG-MAC on 2017. 3. 12..
 */
@Controller
@RequestMapping("/cms")
public class CmsController {

    @Autowired
    private UploadObjectSingleOperation uploadObjectSingleOperation;

    @Autowired
    private GalleryRepository galleryRepository;

    @GetMapping
    public String cms(){
        return "cms";
    }

    @PostMapping("/image")
    @ResponseBody
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file){
        return uploadObjectSingleOperation.send(file)? new ResponseEntity<>("성공", HttpStatus.OK) : new ResponseEntity<>("실패", HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/gallery")
    @ResponseBody
    public List<Gallery> list(){
        return galleryRepository.findAll();
    }

    @PostMapping("/gallery")
    @ResponseBody
    public ResponseEntity<String> save(@RequestBody Gallery gallery){
        galleryRepository.save(gallery);
        return new ResponseEntity<>("성공", HttpStatus.OK);
    }
}
