CREATE TABLE `inventory`.`coupons` ( 
	`id` INT(5) NOT NULL AUTO_INCREMENT, 
	`title` VARCHAR(250) NOT NULL , 
	`description` VARCHAR(250) NULL , 
	`code` VARCHAR(200) NOT NULL , 
	`active` BOOLEAN NOT NULL DEFAULT TRUE , 
	`expiration` DATE NULL , PRIMARY KEY (`id`)
	) ENGINE = InnoDB;