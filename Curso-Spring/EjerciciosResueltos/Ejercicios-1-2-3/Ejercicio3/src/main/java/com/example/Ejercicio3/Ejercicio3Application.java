package com.example.Ejercicio3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Ejercicio3Application {

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(Ejercicio3Application.class, args);
		AlumnoRepository repository = context.getBean(AlumnoRepository.class);

		System.out.println("El num de alumnos en base de datos es: " + repository.count());

		// crear y almacenar un objeto Alumno en base de datos
		Alumno alumno = new Alumno(null, "Edmar Urquiza", "Spring");
		repository.save(alumno);

		System.out.println("El num de alumnos en base de datos es: " + repository.count());

		//Agregar otro objeto Alumno a la base de datos

		Alumno alumno2 = new Alumno(null,"Amanda Herrera","React-JS");
		repository.save(alumno2);

		//Borrar el primer objeto Alumno creado
		repository.deleteById(1L);

		// Recuperar y mostrar los datos que quedan en la BD
		System.out.println(repository.findAll());

	}

}
