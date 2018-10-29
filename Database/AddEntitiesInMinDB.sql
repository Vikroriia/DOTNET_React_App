/***** Add entities in database MinOnlineStore *****/
use master
if exists (select * from sys.databases where name = 'MinOnlineStore')
use MinOnlineStore
	/***** Add to Products table *****/
	insert dbo.Products (PName, Amount, Cost, PImageName) values ('RedBomb', 7, 150, 'redbomb.jpg')
	insert dbo.Products (PName, Amount, Cost, PImageName) values ('BlueBomb', 10, 140, 'bluebomb.jpg')
	insert dbo.Products (PName, Amount, Cost, PImageName) values ('PirpleBomb', 5, 170, 'pirplebomb.jpg')
	insert dbo.Products (PName, Amount, Cost, PImageName) values ('SpaceBomb', 5, 200, 'spacebomb.jpg')
	insert dbo.Products (PName, Amount, Cost, PImageName) values ('GreenBomb', 5, 170, 'greenbomb.jpg')
	insert dbo.Products (PName, Amount, Cost, PImageName) values ('BrawnBomb', 5, 170, 'brawnbomb.jpg')
	insert dbo.Products (PName, Amount, Cost, PImageName) values ('WoodBomb', 5, 170, 'woodbomb.jpg')

	/***** Add to Users table *****/
	insert dbo.Users (LoginProvider, PasswordProvider, FirstName, Surname, Email, Phone, AddressResidence, IsAdmin) 
				values ('vikaveris','vikaveris1234', 'Victoriia','Veris','vikaveris@ya.ru','79213137950','SPb',1)
go