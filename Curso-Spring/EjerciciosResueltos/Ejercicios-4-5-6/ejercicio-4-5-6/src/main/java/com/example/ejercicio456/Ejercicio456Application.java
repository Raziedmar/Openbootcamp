package com.example.ejercicio456;

import com.example.ejercicio456.entities.Laptop;
import com.example.ejercicio456.repository.LaptopRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.time.LocalDate;

@SpringBootApplication
public class Ejercicio456Application {

	public static void main(String[] args) {

		ApplicationContext context=SpringApplication.run(Ejercicio456Application.class, args);

		LaptopRepository repository = context.getBean(LaptopRepository.class);

		//CRUD
		//Crear Laptop

		Laptop laptop1 = new Laptop(null,"ACER", "INTEL",8,399.00,true);
		Laptop laptop2 = new Laptop(null,"ASUS", "AMD",12,499.00,true);
		// Almacenar una Laptop
		System.out.println("Num de Laptops en BD: "+repository.findAll().size());
		repository.save(laptop1);
		repository.save(laptop2);
		// Recuperar todas las Laptops
		System.out.println("Num de Laptops en BD: "+repository.findAll().size());
		//Leer Laptop
		//Actualizar Laptop
		//Borrar Laptop
		//repository.deleteById(1L);
		System.out.println("Num de Laptops en BD: "+repository.findAll().size());

	}

}
