Create Table Usuarios (
    id int primary key,
    nome varchar(100)
);

Create Table Pedidos (
    id int primary key,
    usuario_id int,
    produto varchar(100),
    foreign key (usuario_id) 
    references Usuarios(id)
);