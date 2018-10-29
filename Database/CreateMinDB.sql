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
	ProductID int not null identity primary key,
	PName nvarchar(50) not null,
	Amount decimal(3,0) not null,
	Cost money not null,
	PImageName nvarchar(50) not null
);
create table ItemsOfOrders
(
	ItemID int not null identity primary key,
	ProductID int not null,
	OrderID int not null,
	Amount decimal(3,0) not null,
	Cost money not null
);
create table Orders
(
	OrderID int not null identity primary key,
	UserID int not null,
	StatusO bit not null,
	Cost money not null
);
create table Users
(
	UserID int not null identity primary key,
	LoginProvider nvarchar(20) not null,
	PasswordProvider nvarchar(20) not null,
	FirstName nvarchar(50) not null,
	Surname nvarchar(50) not null,
	Email nvarchar(20) not null,
	Phone varchar(11) not null,
	AddressResidence nvarchar(100) not null,
	IsAdmin bit not null
);

-- Foreign keys
alter table ItemsOfOrders
add foreign key (ProductID) references Products(ProductID)
alter table ItemsOfOrders
add foreign key (OrderID) references Orders(OrderID)
alter table Orders
add foreign key (UserID) references Users(UserID)