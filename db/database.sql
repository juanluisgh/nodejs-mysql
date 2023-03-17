CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE empleados(
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) DEFAULT NULL,
  salario INT(5) DEFAULT NULL,
  PRIMARY KEY(id)
);
DESCRIBE empleados;
INSERT INTO empleados VALUES
  (1,'Joe',1000),
  (2,'Henry',2000),
  (3,'Sam',2500),
  (4,'Max',1500);
  
