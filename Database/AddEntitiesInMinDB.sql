/***** Add entities in database MinOnlineStore *****/
use master
if exists (select * from sys.databases where name = 'MinOnlineStore')
use MinOnlineStore
	insert dbo.Products (PName, Amount, Cost) values ('RedBomb', 10, 150)
	insert dbo.Products (PName, Amount, Cost) values ('BlueBomb', 10, 150)
	insert dbo.Products (PName, Amount, Cost) values ('PinkBomb', 10, 150)
go