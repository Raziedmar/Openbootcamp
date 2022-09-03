package com.ejercicio;

import org.springframework.stereotype.Component;

@Component
public class NotificationService {
    public NotificationService(){
        System.out.println("Construyendo objeto NotificacionService");
    }
    public String imprimirSaludo(){
        return "Hola Soy Mario Urquiza. Este es el ejercicio 2";
    }
}
