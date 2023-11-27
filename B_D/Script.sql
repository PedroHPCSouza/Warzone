
create database warzone;

drop database warzone;

use warzone;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fksugestao int,
foreign key (fksugestao) references sugestao (Idsugestao)
);

create table sugestao (
idsugestao int primary key auto_increment,
nome varchar (45),
sugestao mediumtext
);

 select * from usuario;
 
 insert into usuario values
 (null,"pedro","pedro@.com","1234");