CREATE DATABASE IF NOT exists Questionpapers;
use Questionpapers ;
CREATE TABLE UPLOADPAPER(ID INT(12),
filename varchar(255),
file blob NOT NULL);