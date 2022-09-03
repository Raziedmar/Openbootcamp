package com.ejercicio;

import org.springframework.stereotype.Component;

@Component
public class UserService {
    NotificationService notification;

    public UserService(NotificationService notification) {
        System.out.println("Construyendo objeto UserService");
        this.notification = notification;

    }
}
