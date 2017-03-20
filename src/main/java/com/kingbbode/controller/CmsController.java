package com.kingbbode.controller;

import com.amazonaws.services.s3.model.PutObjectResult;
import com.kingbbode.aws.S3Service;
import com.kingbbode.model.Gallery;
import com.kingbbode.repository.GalleryRepository;
import com.kingbbode.service.GalleryCacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;

/**
 * Created by YG-MAC on 2017. 3. 12..
 */
@Controller
@RequestMapping("/cms")
public class CmsController {

    @Autowired
    private S3Service s3Service;

    @Autowired
    private GalleryRepository galleryRepository;

    @Autowired
    private GalleryCacheService galleryCacheService;

    @GetMapping
    public String cms(){
        return "cms";
    }

    @GetMapping("/update")
    @ResponseBody
    public ResponseEntity<String> update(){
        galleryCacheService.update();
        return new ResponseEntity<>("성공", HttpStatus.OK);
    }

    @PostMapping("/image")
    @ResponseBody
    public PutObjectResult upload(@RequestParam("image") MultipartFile multipartFiles){
        return s3Service.upload(multipartFiles);
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
