/***** Add entities in database MinOnlineStore *****/
use master
if exists (select * from sys.databases where name = 'MinOnlineStore')
use MinOnlineStore
	/***** Add to Products table *****/
	insert dbo.Products (PName, Amount, Cost, PImage) values ('RedBomb', 7, 150, CONVERT(varbinary(MAX), 'C:\DOTNET_React_App\ReduxReactApp\onlinestore\src\image\redbomb.jpg'))
	insert dbo.Products (PName, Amount, Cost, PImage) values ('BlueBomb', 10, 140, CONVERT(varbinary(MAX), 'C:\DOTNET_React_App\ReduxReactApp\onlinestore\src\image\bluebomb.jpg'))
	insert dbo.Products (PName, Amount, Cost, PImage) values ('PirpleBomb', 5, 170, CONVERT(varbinary(MAX), 'C:\DOTNET_React_App\ReduxReactApp\onlinestore\src\image\pirplebomb.jpg'))
	insert dbo.Products (PName, Amount, Cost, PImage) values ('SpaceBomb', 5, 200, CONVERT(varbinary(MAX), 'C:\DOTNET_React_App\ReduxReactApp\onlinestore\src\image\spacebomb.jpg'))
	insert dbo.Products (PName, Amount, Cost, PImage) values ('GreenBomb', 5, 170, CONVERT(varbinary(MAX), 'C:\DOTNET_React_App\ReduxReactApp\onlinestore\src\image\greenbomb.jpg'))
	insert dbo.Products (PName, Amount, Cost, PImage) values ('BrawnBomb', 5, 170, CONVERT(varbinary(MAX), 'C:\DOTNET_React_App\ReduxReactApp\onlinestore\src\image\brawnbomb.jpg'))
	insert dbo.Products (PName, Amount, Cost, PImage) values ('WoodBomb', 5, 170, CONVERT(varbinary(MAX), 'C:\DOTNET_React_App\ReduxReactApp\onlinestore\src\image\woodbomb.png'))

	/***** Add to Users table *****/
	insert dbo.Users (LoginProvider, PasswordProvider, FirstName, Surname, Email, Phone, AddressResidence, IsAdmin) 
				values ('vikaveris','vikaveris1234', 'Victoriia','Veris','vikaveris@ya.ru','79213137950','SPb',1)
go