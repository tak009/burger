CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name TEXT NOT NULL,
  devoured BOOLEAN
);
