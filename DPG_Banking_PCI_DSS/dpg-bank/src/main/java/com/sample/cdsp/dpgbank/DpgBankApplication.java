package com.sample.cdsp.dpgbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;

@SpringBootApplication
@OpenAPIDefinition
public class DpgBankApplication {

	public static void main(String[] args) {
		SpringApplication.run(DpgBankApplication.class, args);
	}

}
