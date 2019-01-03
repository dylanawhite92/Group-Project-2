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

CREATE TABLE salaries (
  id INT NOT NULL,
  player VARCHAR(100) NULL,
  team VARCHAR(100) NULL,
  2018-2019 INT NOT NULL,
  2019-2020 INT NULL,
  2020-2021 INT NULL,
  2021-2022 INT NULL,
  2022-2023 INT NULL,
  2023-2024 INT NULL,
  signed VARCHAR(100) NULL,
  guaranteed INT,
  PRIMARY KEY (id)
);