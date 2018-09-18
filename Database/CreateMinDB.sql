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
	ID_product bigint not null identity primary key,
	ID_category bigint not null,
	PName nvarchar(50) not null,
	Amount decimal(3,0) not null,
	Cost money not null
);
create table Categories
(
	ID_category bigint not null identity primary key,
	ID_subcategory bigint null,
	CName nvarchar(50) not null
);
create table Items_of_orders
(
	ID_item bigint not null identity primary key,
	ID_product bigint not null,
	ID_order bigint not null,
	Amount decimal(3,0) not null,
	Cost money not null
);
create table Orders
(
	ID_order bigint not null identity primary key,
	ID_user bigint not null,
	StatusO bit not null,
	Cost money not null
);
create table Users
(
	ID_user bigint not null identity primary key,
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
alter table Products
add foreign key (ID_category) references Categories(ID_category)
alter table Categories
add foreign key (ID_category) references Categories(ID_category)
alter table Items_of_orders
add foreign key (ID_product) references Products(ID_product)
alter table Items_of_orders
add foreign key (ID_order) references Orders(ID_order)
alter table Orders
add foreign key (ID_user) references Users(ID_user)

-- Insert data
insert into dbo.Categories (ID_subcategory, CName)
	values(NULL, 'Bombs')
go
insert into dbo.Categories (ID_subcategory, CName)
	values(1, 'Bombs with glitter')
go
insert into dbo.Products (ID_category, PName, Amount, Cost)
	values (1, 'Bomb', 5, 150)
go
insert into dbo.Products (ID_category, PName, Amount, Cost)
	values (2, 'Bomb1', 0, 200)
go