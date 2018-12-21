DROP DATABASE IF EXISTS sequelize_nba;
CREATE DATABASE sequelize_nba;
USE DATABASE sequelize_nba;

CREATE TABLE teams
(
	id int NOT NULL AUTO_INCREMENT,
	team_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE teams
(
    id int NOT NULL AUTO_INCREMENT,
    player_name varchar(255) NOT NULL,
	player_position varchar(255) NOT NULL,
	player_salary int NOT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);
