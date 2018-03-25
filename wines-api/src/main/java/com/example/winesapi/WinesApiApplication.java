package com.example.winesapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class WinesApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(WinesApiApplication.class, args);
	}
}
