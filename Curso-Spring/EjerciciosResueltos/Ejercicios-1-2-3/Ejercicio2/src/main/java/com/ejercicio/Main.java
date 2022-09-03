package com.ejercicio;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {

        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

        // Opción 2. Recibir un objeto de Spring
        //NotificationService notification = (NotificationService) context.getBean("notificationService");
        //cargar un bean dentro de otro bean
        UserService service = (UserService) context.getBean("userService");
        System.out.println(service.notification.imprimirSaludo());

    }
}
