package com.book.management.system.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
	static final Logger log=LoggerFactory.getLogger(Application.class);

	public static void main(String[] args) {
		log.info("Before Starting Application");
		SpringApplication.run(Application.class, args);
		
		log.debug("Strating my application in debug with {} args",args.length);
		log.info("Starting my application with {} args",args.length);
	}

}
