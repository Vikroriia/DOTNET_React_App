/***** Create DATABASE for OnlineStore *****/

use master
if exists (select * from sys.databases where name = 'OnlineStore')
	drop database OnlineStore
go

create database OnlineStore
go

use OnlineStore

--- Create TABLES
create table Products 
(
	ID_product bigint not null identity primary key,
	ID_category bigint not null,
	PName nvarchar(50) not null,
	Photo image null,
	Descript nvarchar(max) null,
	Avaliability bit not null,
	Amount decimal(3,0) not null,
	Cost money not null,
	ID_sale bigint null
);
create table Categories
(
	ID_category bigint not null identity primary key,
	ID_subcategory bigint null,
	CName nvarchar(50) not null,
	Photo image null,
	Descript nvarchar(max) null,
	Avaliability bit not null
);
create table Sales
(
	ID_sale bigint not null identity primary key,
	SName nvarchar(50) not null,
	Descript nvarchar(max) null,
	Amount decimal(3,0) not null,
	StartDate date not null,
	EndDate date not null
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
	ID_buyer bigint not null,
	ID_statusO int not null,
	ApplicationDate smalldatetime not null,
	DeliveryDate date not null,
	ID_deliveryMethod int not null,
	ID_paymentMethod int not null,
	Cost money not null,
	Comments nvarchar(max) null
);
create table Statuses_of_orders
(
	ID_statusO int not null identity primary key,
	SOName nvarchar(50) not null
);
create table Delivery_methods
(
	ID_deliveryMethod int not null identity primary key,
	DMName nvarchar(50) not null,
	Cost money not null
);
create table Payment_methods
(
	ID_paymentMethod int not null identity primary key,
	PMName nvarchar(50) not null,
	Descript nvarchar(max) null
);
create table Buyers
(
	ID_buyer bigint not null identity primary key,
	LoginProvider nvarchar(20) not null,
	PasswordProvider nvarchar(20) not null,
	FirstName nvarchar(50) not null,
	SecondName nvarchar(50) not null,
	Email nvarchar(20) not null,
	Phone varchar(11) not null,
	ID_addressGroup int not null,
	AddressResidence nvarchar(100) not null,
	ID_statusB int not null,
	ID_userPermission int not null,
	ID_discount int not null
);
create table Address_groups
(
	ID_addressGroup int not null identity primary key,
	AGName nvarchar(100) not null,
	DeliveryCost money not null
);
create table Statuses_of_buyers
(
	ID_statusB int not null identity primary key,
	SBName nvarchar(50) not null
);
create table User_permissions
(
	ID_userPermission int not null,
	UPName nvarchar(20) not null,
	Descrip nvarchar(max) null
);
create table Discounts
(
	ID_discount int not null identity primary key,
	DName nvarchar(50) not null,
	Amount decimal(3,0) not null
);
create table Comments
(
	ID_comment bigint not null identity primary key,
	ID_buyer bigint not null,
	Title nvarchar(50) not null,
	Content nvarchar(max) not null
);
create table Comment_of_product
(
	ID_comment_of_product bigint not null identity primary key,
	ID_product bigint not null,
	ID_comment bigint not null
)

-- Foreign keys
/*alter table Products
add foreign key (ID_product) references Comment_of_product(ID_product)*/
alter table Products
add foreign key (ID_category) references Categories(ID_category)
alter table Products
add foreign key (ID_sale) references Sales(ID_sale)
alter table Categories
add foreign key (ID_category) references Categories(ID_category)
alter table Items_of_orders
add foreign key (ID_product) references Products(ID_product)
alter table Items_of_orders
add foreign key (ID_order) references Orders(ID_order)
alter table Orders
add foreign key (ID_buyer) references Buyers(ID_buyer)
alter table Orders
add foreign key (ID_deliveryMethod) references Delivery_methods(ID_deliveryMethod)
alter table Orders
add foreign key (ID_paymentMethod) references Payment_methods(ID_paymentMethod)
alter table Orders
add foreign key (ID_statusO) references Statuses_of_orders(ID_statusO)
alter table Buyers
add foreign key (ID_addressGroup) references Address_groups(ID_addressGroup)
alter table Buyers
add foreign key (ID_statusB) references Statuses_of_buyers(ID_statusB)
alter table Buyers
add foreign key (ID_discount) references Discounts(ID_discount)
alter table Comments
add foreign key (ID_buyer) references Buyers(ID_buyer)
alter table Comment_of_product
add foreign key (ID_product) references Products(ID_product)
alter table Comment_of_product
add foreign key (ID_comment) references Comments(ID_comment)

-- Insert data
insert into dbo.Sales (SName, Descript, Amount, StartDate, EndDate)
	values('Say hello', 'We opened', 10, '2018-10-25', '2018-10-25')
go
insert into dbo.Categories (ID_subcategory, CName, Photo, Descript, Avaliability)
	values(NULL, 'Bombs', NULL, 'Magic in your bath', 1)
go
insert into dbo.Categories (ID_subcategory, CName, Photo, Descript, Avaliability)
	values(1, 'Bombs with glitter', NULL, NULL, 0)
go
insert into dbo.Products (ID_category, PName, Photo, Descript, Avaliability, Amount, Cost, ID_sale)
	values (1, 'Bomb', NULL, 'Pink bomb with the smell of roses', 1, 5, 150, NULL)
go
insert into dbo.Products (ID_category, PName, Photo, Descript, Avaliability, Amount, Cost, ID_sale)
	values (2, 'Bomb1', NULL, 'Pink bomb with the smell of roses', 0, 0, 200, NULL)
go