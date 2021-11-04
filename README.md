# app-biblioteca
Este es un ejemplo sencillo de backend usando mysql y nodejs

Requerimientos:

En mysql:
crear la base de datos library y la tabla libros

código sql para crear la tabla libros:
CREATE TABLE `library`.`libros` (
`id` INT NOT NULL AUTO_INCREMENT,
`titulo` VARCHAR(100) NOT NULL,
`autor` VARCHAR(100) NOT NULL,
`edicion` INT NOT NULL,
PRIMARY KEY (`id`));
  

En nodejs:
instalar los módulos express, nodemon, cors
instalar express-myconnection

En Visual Studio Code
instalar rest client

Fuente: canal de youtube MonkeyWit
