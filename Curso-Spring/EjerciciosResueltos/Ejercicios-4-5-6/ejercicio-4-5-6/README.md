# Ejercicio 1

1. Crear un proyecto Spring Boot con las dependencias:

- H2
- Spring Data JPA
- Spring Web
- Spring Boot dev tools

2. Crear una clase HelloController que sea un controlador REST. Dentro de la clase crear un método que retorne un saludo. Probar que retorna el saludo desde el navegador y desde Postman.

# Ejercicio 2

1. Dentro de la misma app crear las clases necesarias para trabajar con "ordenadores":
   1. Laptop (entidad)
   2. LaptopRepository (repositorio)
   3. LaptopController (controlador)

2. Desde LaptopController crear un método que devuelva una lista de objetos Laptop.
3. Probar que funciona desde Postman.
4. Los objetos Laptop se pueden insertar desde el método main de la clase principal.


# Ejercicio 3

1. Crear un método en LaptopController que reciba un objeto Laptop enviado en formato JSON desde Postman y persistirlo en la base de datos.

2. Comprobar que al obtener de nuevo los laptops aparece el nuevo ordenador creado.