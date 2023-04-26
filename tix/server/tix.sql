CREATE TABLE CLIENT(    id_client INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    nom VARCHAR(100),    email VARCHAR(255),    password varchar(255),    cin VARCHAR(8),    img VARCHAR(255));
CREATE TABLE ticket(    id_ticket INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    id_match int    );
CREATE TABLE achat(    id_achat INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    id_tichet int,    id_client int);
CREATE TABLE predire(    id_predir INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    id_client int,    date_predir date,    date_fin date);
CREATE TABLE match_predire(    id_match_predire INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    id_predire int,    id_match_api int,    score varchar(10)    );
CREATE TABLE prix_par_place(    id_prix_par_place INT PRIMARY KEY NOT NULL AUTO_INCREMENT,    id_ticket int,    place_type VARCHAR(20),    prix int,    nbr_total int);
