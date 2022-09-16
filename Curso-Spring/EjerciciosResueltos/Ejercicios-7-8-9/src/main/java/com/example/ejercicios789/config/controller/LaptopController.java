package com.example.ejercicios789.config.controller;

import com.example.ejercicios789.entities.Laptop;
import com.example.ejercicios789.repository.LaptopRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;
import java.util.Optional;

@RestController
public class LaptopController {

    private final Logger log = LoggerFactory.getLogger(LaptopController.class);
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
    @ApiOperation("Buscar un libro por clave primaria id Long")
    public ResponseEntity<Laptop> findOneById(@ApiParam("Clave primaria tipo Long") @PathVariable Long id){

        Optional<Laptop> LaptopOpt = laptopRepository.findById(id);
        if(LaptopOpt.isPresent())
            return ResponseEntity.ok(LaptopOpt.get());
        else
            return ResponseEntity.notFound().build();
        //return LaptopOpt.orElse(null);

    }

    /**
     * Crear una nueva Laptop en base de datos
     * Método POST, no colisiona con findAll porque son diferentes métodos HTTP: GET vs. POST
     * @param laptop
     * @param headers
     * @return
     *
     */
    @PostMapping("/api/laptops")
    public ResponseEntity<Laptop> create(@RequestBody Laptop laptop, @RequestHeader HttpHeaders headers){
        System.out.println(headers.get("User-Agent"));
        // guardar la laptop recibida por parámetro en la base de datos
        if(laptop.getId() != null){ // quiere decir que existe el id y por tanto no es una creación
            log.warn("trying to create a laptop with id");
            System.out.println("trying to create a laptop with id");
            return ResponseEntity.badRequest().build();
        }
        Laptop result = laptopRepository.save(laptop);
        return ResponseEntity.ok(result); // La laptop devuelta tiene una clave primaria
    }

    /**
     * actualizar una laptop existente en base de datos
     */
    @PutMapping("/api/laptops")
    public ResponseEntity<Laptop> update(@RequestBody Laptop laptop){
        if(laptop.getId() == null ){ // si no tiene id quiere decir que sí es una creación
            log.warn("Trying to update a non existent laptop");
            return ResponseEntity.badRequest().build();
        }
        if(!laptopRepository.existsById(laptop.getId())){
            log.warn("Trying to update a non existent laptop");
            return ResponseEntity.notFound().build();
        }

        // El proceso de actualización
        Laptop result = laptopRepository.save(laptop);
        return ResponseEntity.ok(result); // el libro devuelto tiene una clave primaria
    }

    @ApiIgnore
    @DeleteMapping("/api/laptops/{id}")
    public ResponseEntity<Laptop> delete(@PathVariable Long id){

        if(!laptopRepository.existsById(id)){
            log.warn("Trying to delete a non existent laptop");
            return ResponseEntity.notFound().build();
        }

        laptopRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
    @ApiIgnore // ignorar este método para que no aparezca en la documentación de la api Swagger
    @DeleteMapping("/api/laptops")
    public ResponseEntity<Laptop> deleteAll(){
        log.info("REST Request for delete all laptops");
        laptopRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }
}
