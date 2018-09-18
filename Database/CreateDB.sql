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
	ID_product int not null identity,
	ID_category int not null,
	PName nvarchar(50) not null,
	Photo image null,
	Discription nvarchar(max) null,
	Avaliability bit not null,
	Amount decimal(3,0) not null,
	Cost money not null,
	ID_sale int null
);
