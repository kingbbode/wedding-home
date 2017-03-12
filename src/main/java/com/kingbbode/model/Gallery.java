package com.kingbbode.model;

import com.kingbbode.enums.GalleryType;

import javax.persistence.*;

/**
 * Created by YG-MAC on 2017. 3. 12..
 */
@Entity
public class Gallery {
    @Column
    @GeneratedValue
    private Long idx;

    @Column
    private String title;

    @Column
    private String subTitle;

    @Column
    private String content;

    @Column
    private String imagesJson;

    @Column
    @Enumerated(EnumType.STRING)
    private GalleryType type;
}
