DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo; 

USE todo;

CREATE TABLE Person (
    pid int NOT NULL AUTO_INCREMENT,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    PRIMARY KEY (pid)
);

CREATE TABLE Todolist (
    tid int NOT NULL AUTO_INCREMENT,
    text varchar(255) NOT NULL,
    status boolean NOT NULL,
    pid int NOT NULL,
    PRIMARY KEY (tid),
    FOREIGN KEY (pid) REFERENCES Person(pid)
);

INSERT INTO Person (firstName, lastName) VALUES
("Max", "Mustermann"),
("Mex", "Mestermann"),
("Mox", "Mostermann");

/*
INSERT INTO Todolist (text, status, pid) VALUES
("TEST1", false, 1),
("TEST2", true, 2),
("TEST3", false, 3);*/





