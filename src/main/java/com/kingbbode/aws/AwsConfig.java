package com.kingbbode.aws;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by YG-MAC on 2017. 3. 12..
 */
@Configuration
public class AwsConfig {
    @Value("${aws.bucketName}")
    private String bucketName;

    @Value("${aws.keyName}")
    private String keyName;

    @Bean
    UploadObjectSingleOperation uploadObjectSingleOperation(){
        return new UploadObjectSingleOperation(bucketName, keyName);
    }
}
