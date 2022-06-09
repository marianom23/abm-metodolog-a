# ABM Parcial Metodología

_El back fue creado con node, express y javascript, el front con react, javascript, bootstrap_

## Crear la base de datos
_Hay que crearla usando el siguiente script en mysql_

```
CREATE SCHEMA `library` ;
USE `library`;
DROP TABLE IF EXISTS `books`;

CREATE TABLE `library`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NULL,
  `autor` VARCHAR(100) NULL,
  `edicion` INT NULL,
  PRIMARY KEY (`id`));
  
  INSERT INTO books(titulo, autor, edicion) VALUES ('El Patito Feo', 'Hans Christian Andersen', 5), ('Cuentos de la Selva', 'Horacio Quiroga', 7);
```

## Instalar dependencias de node

_Abrir ambas carpetas con visual studio tanto la del backend y frontend e instalar las dependencias de node con:_

```
npm install
```

## Inicializar Back

_En la terminal del back luego de instalar las dependencias de node tipear:_

```
npm run dev
```

## Inicializar Front

_En la terminal del front luego de instalar las dependencias de node tipear:_

```
npm start
```
## Y con eso ya se puede manipular el abm de libros.

