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
   photo varchar(100)DEFAULT "default.pjg",
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/
 INSERT INTO events (name, description, category, comments, email, phone, photo)  VALUES ("Henry", "Hondureño", "man", "student", "tot@hotmail.com", "0000000000", "" );
