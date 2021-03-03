create database banco
create  table persona(
     id int (11) primary key NOT NULL,
     cedula varchar (20) NOT NULL,
     nombres varchar (200)NOT NULL,
     telefono varchar (10) NOT NULL,
     direccion varchar (300) NOT NULL
 );
 alter table persona MODIFY id  int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =1;

create table  tranferencia(
     id int(11) primary key NOT NULL,
     tipo_cuenta varchar (30) NOT NULL,
     monto numeric NOT NULL,
     fecha_tranferencia date  NOT NULL,
     descripcion varchar (200)  NOT NULL  
     );
 alter table tranferencia MODIFY id  int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =1;
 
create  table cuenta(
     id int (11) primary key NOT NULL,
     tipo_cuenta int (11) NOT NULL,
     persona  int (11) NOT NULL,
     fecha_apertura date  NOT NULL,
     saldo varchar (500) NOT NULL,
     constraint fk_persona  foreign key(persona) references persona(id),
     constraint fk_tipo_cuenta foreign key(tipo_cuenta) references tranferencia(id)
     );
      alter table cuenta MODIFY id  int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =1;


