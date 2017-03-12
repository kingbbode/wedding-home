package com.kingbbode.aws;

/**
 * Created by YG-MAC on 2017. 3. 12..
 */

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public class UploadObjectSingleOperation {
    private static final Logger logger = LoggerFactory.getLogger(UploadObjectSingleOperation.class);

    private String bucketName;//     = "*** Provide bucket name ***";
    private String keyName;//        = "*** Provide key ***";

    public UploadObjectSingleOperation(String bucketName, String keyName) {
        this.bucketName = bucketName;
        this.keyName = keyName;
    }

    public boolean send(MultipartFile multipartFile) {
        AmazonS3 s3client = new AmazonS3Client(new ProfileCredentialsProvider());
        try {
            //System.out.println("Uploading a new object to S3 from a file\n");
            File file = new File(multipartFile.getOriginalFilename());
            multipartFile.transferTo(file);
            s3client.putObject(new PutObjectRequest(
                    bucketName, keyName, file));
        } catch (AmazonServiceException ase) {
            /*System.out.println("Caught an AmazonServiceException, which " +
                    "means your request made it " +
                    "to Amazon S3, but was rejected with an error response" +
                    " for some reason.");*/
            logger.error("Error Message: {}",  ase.getMessage());
            logger.error("HTTP Status Code: {}", ase.getStatusCode());
            logger.error("AWS Error Code:   {}", ase.getErrorCode());
            logger.error("Error Type:       {}", ase.getErrorType());
            logger.error("Request ID:       {}", ase.getRequestId());
            return false;
        } catch (AmazonClientException ace) {
//            System.out.println("Caught an AmazonClientException, which " +
//                    "means the client encountered " +
//                    "an internal error while trying to " +
//                    "communicate with S3, " +
//                    "such as not being able to access the network.");
            logger.error("Error Message: {}",  ace.getMessage());
            return false;
        } catch (IOException e) {
            logger.error("Error - {}",  e);
            return false;
        }
        return true;
    }
}
