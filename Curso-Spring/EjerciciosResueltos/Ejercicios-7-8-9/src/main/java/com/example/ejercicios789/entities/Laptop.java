package com.example.ejercicios789.entities;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

@Entity
@Table(name="LAPTOPS")
@ApiModel("Entidad Laptop para representar un elemento informático")
public class Laptop {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @ApiModelProperty("Clave ficticia autoincremental tipo Long")
    private Long id;
    private String marca;
    private String procesador;
    private Integer ram;
    @ApiModelProperty("Precio en doalres, con dos decimales utilizando . como separador")
    private Double price;
    private Boolean online;

    public Laptop() {
    }

    public Laptop(Long id, String marca, String procesador, Integer ram, Double price, Boolean online) {
        this.id = id;
        this.marca = marca;
        this.procesador = procesador;
        this.ram = ram;
        this.price = price;
        this.online = online;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getProcesador() {
        return procesador;
    }

    public void setProcesador(String procesador) {
        this.procesador = procesador;
    }

    public Integer getRam() {
        return ram;
    }

    public void setRam(Integer ram) {
        this.ram = ram;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getOnline() {
        return online;
    }

    public void setOnline(Boolean online) {
        this.online = online;
    }

    @Override
    public String toString() {
        return "Laptop{" +
                "id=" + id +
                ", marca='" + marca + '\'' +
                ", procesador='" + procesador + '\'' +
                ", ram=" + ram +
                ", price=" + price +
                ", online=" + online +
                '}';
    }
}
