CREATE TABLE Materiales
(
  Clave numeric(5),
  Descripcion varchar(50),
  Costo numeric(8,2)
)

CREATE TABLE Proyectos 
(
	Numero NUMERIC(5),
	Denominacion VARCHAR(50)
)

CREATE TABLE Proveedores 
(
	RFC CHAR(13),
)




--DROP TABLE Materiales, Proveedores, Proyectos, Entregan

--select*from sysobjects where xtype='U'