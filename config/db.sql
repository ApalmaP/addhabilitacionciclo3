CREATE DATABASE basedatos_tienda;

USE basedatos_tienda;

CREATE TABLE usuarios(
    id INT(12) NOT NULL,
    nombreUsuario VARCHAR(18) NOT NULL,
    contraseña VARCHAR(30) NOT NULL,
    nombreCompleto VARCHAR(100)
);

ALTER TABLE usuarios
    ADD PRIMARY KEY (id);

ALTER TABLE usuarios
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT;

DESCRIBE usuarios;


CREATE TABLE autopartes(
    id INT(12) NOT NULL, 
    repuestos VARCHAR(20) NOT NULL,
    sistema VARCHAR(15) NOT NULL,
    linea_vehicular VARCHAR(16) NOT NULL,
);

ALTER TABLE autopartes
    ADD PRIMARY KEY (id);
ALTER TABLE autopartes
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT;
ALTER TABLE autopartes
    ADD valor_unitario INT(30) NOT NULL;
ALTER TABLE autopartes
    ADD cantidad INT(10) NOT NULL;

INSERT INTO autopartes(repuestos, sistema, linea_vehicular, valor_unitario, cantidad) 
    VALUES ('Turbo', 'Motor', 'Chevrolet', 650000, 8);
INSERT INTO autopartes(repuestos, sistema, linea_vehicular, valor_unitario, cantidad) 
    VALUES ('Radiador', 'Motor', 'Volvo', 800000, 12);

SELECT * FROM autopartes;

DESCRIBE autopartes;


CREATE TABLE ventas(
    id INT(12) NOT NULL,
    repuestos VARCHAR(20) NOT NULL,
    valor_unitario INT(30) NOT NULL,
    user_id INT(12),
    create_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_usuario FOREIGN KEY(user_id) REFERENCES usuarios(id)
);  

ALTER TABLE ventas
    ADD PRIMARY KEY (id);

ALTER TABLE ventas
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT;

DESCRIBE ventas;


