create database if not exists valomkt;
use valomkt;

-- Create Table --
drop table if exists guntypes;
drop table if exists skintypes;
drop table if exists gun_skin_combination;
drop table if exists user_items;
drop table if exists cart_items;
drop table if exists user_items_shorten;
drop table if exists cart_items_shorten;
drop table if exists user;
drop table if exists currentuser;
drop table if exists cart_items_price;
drop table if exists register_card;

create table guntypes (
	gunID int, 
	gunType varchar(20), 
	gunCost float  
	);
create table skintypes (
	skinID int,
	skinType varchar(20),
	skinCost float
	);

insert into guntypes values 
	(1, 'Classic', 0),
 	(2, 'Sheriff', 800),
 	(3, 'Spectre', 1600),
 	(4, 'Vandal', 2900),
 	(5, 'Phantom', 2900);

insert into skintypes values 
	(1, 'Regular', 0),
 	(2, 'Red', 200),
 	(3, 'Sakura', 500),
 	(4, 'Prime', 800), 
 	(5, 'Glitchpop', 1000);

create table gun_skin_combination (
	combination_ID int auto_increment primary key,
	gunID int,
	skinID int,
	gunType varchar(20), 
	skinType varchar(20),
	totalCost float
	);

insert into gun_skin_combination (gunID, skinID, gunType, skinType, totalCost)
select 
	g.gunID, 
	s.skinID, 
	g.gunType,
	s.skinType,
	(g.gunCost + s.skinCost) as totalCost
from guntypes g
cross join skintypes s
order by g.gunID asc, s.skinID asc;

select * from guntypes;
select * from skintypes;
select * from gun_skin_combination;

create table cart_items_shorten (
	customerName varchar(50),
	combination_ID int
	);

create table user_items_shorten (
	customerName varchar(50),
	combination_ID int
	);

create table cart_items (
	numberOfItems int auto_increment primary key,
	customerName varchar(50),
	gunType varchar(20),
	skinType varchar(20)
	);

create table cart_items_price (
	numberOfItems int auto_increment primary key,
	customerName varchar(50),
	gunType varchar(20),
	skinType varchar(20),
	totalCost int
	);

create table user_items (
	customerName varchar(50),
	gunType varchar(20),
	skinType varchar(20)
	);

insert into cart_items_shorten (customerName, combination_ID) values 
	('George', 2),
	('Mark', 1),
	('Mark', 2),
	('Jay', 21),
	('Jay', 22),
	('Jay', 23),
	('Jay', 24),
	('Jay', 25);


insert into user_items_shorten (customerName, combination_ID) values 
	('George', 1),
	('Mark', 25),
	('Jay', 1),
	('Jay', 2),
	('Jay', 3),
	('Jay', 4),
	('Jay', 5);

insert into cart_items (customerName, gunType, skinType)
select  
	c.customerName,
	g.gunType,
	g.skinType
from gun_skin_combination g
join cart_items_shorten c ON g.combination_ID = c.combination_ID;

insert into user_items (customerName, gunType, skinType)
select  
	c.customerName,
	g.gunType,
	g.skinType
from gun_skin_combination g
join user_items_shorten c ON g.combination_ID = c.combination_ID;

create table user (
	numberOfUsers int auto_increment primary key,
	userid varchar(20), 
	password varchar(20),
	email varchar(100),
	phone int
	);

insert into user (userid, password, email, phone) values 
	('George','12345', 'George@gmail.com', '90000000'),
	('Mark', '12345', 'Mark@gmail.com', '91111111'),
	('Jay', '12345', 'Jay@gmail.com', '92222222');

create table currentuser(
	current_userid varchar(20)
);

select * from cart_items;
select * from user_items;
select * from user; 	
select * from currentuser;

create table register_card(
	username varchar(20),
	amount float,
	name varchar(20), 
	cardNumber text, 
	expiry text, 
	cvv text,
	postalcode text);

/*insert into currentuser values 
	('George');
*/
/*SELECT c.customerName, c.gunType, c.skinType, g.totalCost FROM cart_items c INNER JOIN gun_skin_combination g ON c.gunType = g.gunType AND c.skinType= g.skinType WHERE c.customerName = ?;
*/ 

