package com.kingbbode.model;

import com.kingbbode.enums.GalleryType;

import javax.persistence.*;

/**
 * Created by YG-MAC on 2017. 3. 12..
 */
@Entity
public class Gallery {
    @Id
    @GeneratedValue
    private Long idx;

    @Column
    private String title;

    @Column
    private String subtitle;

    @Column
    private String content;

    @Column
    private String imagesJson;

    @Column
    @Enumerated(EnumType.STRING)
    private GalleryType type;

    public Long getIdx() {
        return idx;
    }

    public String getTitle() {
        return title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public String getContent() {
        return content;
    }

    public String getImagesJson() {
        return imagesJson;
    }

    public GalleryType getType() {
        return type;
    }
}
