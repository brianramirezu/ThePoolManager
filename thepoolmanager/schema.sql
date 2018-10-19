DROP DATABASE IF EXISTS nodemysql;


CREATE DATABASE nodemysql;

USE  nodemysql;

CREATE TABLE events(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  description varchar(50) NOT NULL,
   category varchar(50) NOT NULL,
   comments varchar(50) NOT NULL,
   email varchar(50)NOT NULL,
   phone varchar(10)NOT NULL,

  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/
 INSERT INTO events (name, description, category, comments, email, phone)  VALUES ("Henry", "Hondureño", "man", "student", "tot@hotmail.com", "0000000000");



 CREATE TABLE fotos(
   id int NOT NULL AUTO_INCREMENT,
   photo varchar(100)DEFAULT "default.pjg",
   PRIMARY KEY (ID)
 );

 /*  Execute this file from the command line by typing:
  *    mysql -u root -p < schema.sql
  *  to create the database and the tables.*/
  INSERT INTO fotos ( photo)  VALUES ("" );


  CREATE TABLE eventform(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50)NOT NULL,
    activity varchar(50)NOT NULL,
    dayinfo varchar(50)NOT NULL,
    inviteType varchar(50)NOT NULL,o
    PRIMARY KEY (ID)
  );

  INSERT INTO eventform (name, activity, dayinfo, inviteType) VALUES ('Hola code', 'pizza parties', 'oct 16 2018', 'open');

  CREATE TABLE booking(
  id int NOT NULL AUTO_INCREMENT,
  company varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  reason varchar(50) NOT NULL,
  hour varchar(50) NOT NULL,
  date varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);
INSERT INTO booking (company,name,reason,hour,date) VALUES ("Holacode","B","Meeting","12:30","11-2-18");
