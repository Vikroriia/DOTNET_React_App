/***** Create DATABASE for OnlineStore *****/
use master
if exists (select * from sys.databases where name = 'MinOnlineStore')
	drop database MinOnlineStore
go

create database MinOnlineStore
go

use MinOnlineStore

--- Create TABLES
create table Products 
(
	ID_product int not null identity primary key,
	PName nvarchar(50) not null,
	Amount decimal(3,0) not null,
	Cost money not null
);
create table Items_of_orders
(
	ID_item int not null identity primary key,
	ID_product int not null,
	ID_order int not null,
	Amount decimal(3,0) not null,
	Cost money not null
);
create table Orders
(
	ID_order int not null identity primary key,
	ID_user int not null,
	StatusO bit not null,
	Cost money not null
);
create table Users
(
	ID_user int not null identity primary key,
	LoginProvider nvarchar(20) not null,
	PasswordProvider nvarchar(20) not null,
	FirstName nvarchar(50) not null,
	SecondName nvarchar(50) not null,
	Email nvarchar(20) not null,
	Phone varchar(11) not null,
	AddressResidence nvarchar(100) not null,
	IsAdmin bit not null
);

-- Foreign keys
alter table Items_of_orders
add foreign key (ID_product) references Products(ID_product)
alter table Items_of_orders
add foreign key (ID_order) references Orders(ID_order)
alter table Orders
add foreign key (ID_user) references Users(ID_user)