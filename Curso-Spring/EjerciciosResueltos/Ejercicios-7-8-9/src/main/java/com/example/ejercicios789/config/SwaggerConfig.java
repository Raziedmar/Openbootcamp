package com.example.ejercicios789.config;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.Collections;
/*
 * Configuración Swagger para la generación de documentación de la API REST
 * HTML: http://localhost:8081/swagger-ui/
 * JSON: http://localhost:8081/v2/api-docs
 */

@Configuration
public class SwaggerConfig {
    @Bean
    public Docket api(){

        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiDetails())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiDetails(){
        return new ApiInfo("Spring Boot Laptop API REST",
                "Library Api rest docs",
                "1.0",
                "http://www.google.com",
                new Contact("Edmar", "http://www.google.com", "edmario84@gmail.com"),
                "MIT",
                "http://www.google.com",
                Collections.emptyList());
    }
}
