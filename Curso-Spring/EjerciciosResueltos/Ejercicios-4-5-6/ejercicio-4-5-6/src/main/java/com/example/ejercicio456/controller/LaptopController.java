package com.example.ejercicio456.controller;

import com.example.ejercicio456.entities.Laptop;
import com.example.ejercicio456.repository.LaptopRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LaptopController {

    private LaptopRepository laptopRepository;

    public LaptopController(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }
    //CRUD sobre la entidad Laptop

    // Buscar todas las laptops (Lista de Laptops)

    @GetMapping("/api/laptops")
    public List<Laptop> findAll(){
        return laptopRepository.findAll();
    }

    //Buscar una sola laptop en case de datos segun su ID

    @GetMapping("/api/laptops/{id}")
    public ResponseEntity<Laptop> findOneById(@PathVariable Long id){

        Optional<Laptop> LaptopOpt = laptopRepository.findById(id);
        if(LaptopOpt.isPresent())
            return ResponseEntity.ok(LaptopOpt.get());
        else
            return ResponseEntity.notFound().build();
        //return bookOpt.orElse(null);

    }

    //Crear una nueva laptop en BD
    @PostMapping("/api/laptops")
    public Laptop Create(@RequestBody Laptop laptop){
        // Guardar la laptop recibido por parámetro en BD
        return laptopRepository.save(laptop);
    }

    //Actualizar una laptop existente en BD

    //Borrar una laptop en BD
}
