CREATE DATABASE prueba_testing;

USE prueba_testing;

CREATE TABLE profesores (
    id INT NOT NULL AUTO_INCREMENT,
    rut VARCHAR(20),
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE alumnos (
    id INT NOT NULL AUTO_INCREMENT
    rut VARCHAR(20),
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    nota INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE cursos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100),
    tipo_curso VARCHAR(100),
    id_profesores INT,
    id_alumnos INT,
    PRIMARY KEY (id),
    FOREIGN KEY (id_profesores) REFERENCES profesores(id),
    FOREIGN KEY (id_alumnos) REFERENCES alumnos(id)
);

INSERT INTO profesores VALUES 
(1, '123456789', 'Raul', 'Vergara'),
(2, '123456799', 'Felipe', 'Vergara'),
(3, '123456999', 'Domingo', 'Lunes'),
(4, '123459999', 'Feria', 'Sabado');