package com.kingbbode.service;

import com.kingbbode.model.Gallery;
import com.kingbbode.repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by YG-MAC on 2017. 3. 19..
 */
@Service
@EnableScheduling
public class GalleryCacheService {

    @Autowired
    private GalleryRepository galleryRepository;

    List<Gallery> list;

    @Scheduled(fixedDelay = 60 * 60 * 1000)
    public void fetch(){
        list = galleryRepository.findAll();
    }

    public List<Gallery> findAll(){
        return list;
    }

    public void update(){
        fetch();
    }
}
