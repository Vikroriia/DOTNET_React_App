/***** Add entities in database MinOnlineStore *****/
use master
if exists (select * from sys.databases where name = 'MinOnlineStore')
use MinOnlineStore
	/***** Add to Products table *****/
	insert dbo.Products (PName, Amount, Cost) values ('RedBomb', 7, 150)
	insert dbo.Products (PName, Amount, Cost) values ('BlueBomb', 10, 140)
	insert dbo.Products (PName, Amount, Cost) values ('PirpleBomb', 5, 170)

	/***** Add to Users table *****/
	insert dbo.Users (LoginProvider, PasswordProvider, FirstName, Surname, Email, Phone, AddressResidence, IsAdmin) 
				values ('vikaveris','vikaveris1234', 'Victoriia','Veris','vikaveris@ya.ru','79213137950','SPb',1)
	
	/***** Add to Orders table *****/
	insert dbo.Orders (UserID, StatusO, Cost) values (1, 1, 150)

	/***** Add to Items_of_orders table *****/
	insert dbo.ItemsOfOrders (ProductID, OrderID, Amount, Cost) values (1,1,1,150)
go