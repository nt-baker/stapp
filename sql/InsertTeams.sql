INSERT INTO `Team` (`Location`, `Name`) VALUES ('Green Bay', 'Packers');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Atlanta ', 'Falcons');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Arizona', 'Cardinals');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Los Angeles ', 'Rams');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Oakland', 'Raiders');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('San Francisco', '49ers');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Denver', 'Broncos');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Jacksonville', 'Jaguars');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Miami', 'Dolphins');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Tampa Bay', 'Buccaneers');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Chicago', 'Bears');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Indianapolis', 'Colts');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('New Orleans', 'Saints');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Baltimore', 'Ravens');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Washington', 'Redskins');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('New England', 'Patriots');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Detriot', 'Lions');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Minnesota', 'Vikings');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Kansas Location', 'Chiefs');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('New York', 'Giants');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('New York', 'Jets');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Buffalo', 'Bills');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Carolina', 'Panthers');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Cincinnati', 'Bengals');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Cleveland', 'Browns');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Philadelphia', 'Eagles');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Pittsburgh', 'Steelers');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Tennessee', 'Titans');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Dallas', 'Cowboys');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Houston', 'Texans');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('Seattle', 'Seahawks');
INSERT INTO `Team` (`Location`, `Name`) VALUES ('San Diego', 'Chargers');

-- GAMES
INSERT INTO `game` (`GameId`, `HomeTeamId`, `AwayTeamId`, `WinTeamId`, `Week`, `Kickoff`)
VALUES (NULL, '7', '23', '0', '1', '2016-09-08 08:30:00'),
      (NULL, '8', '1', '0', '1', '2016-09-11 13:00:00');


--Create teams
CREATE TABLE `team` (
 `TeamId` int(11) NOT NULL AUTO_INCREMENT,
 `Location` varchar(50) NOT NULL,
 `Name` varchar(50) NOT NULL,
 PRIMARY KEY (`TeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1

--Create game
CREATE TABLE `game` (
 `GameId` int(11) NOT NULL AUTO_INCREMENT,
 `HomeTeamId` int(11) NOT NULL,
 `AwayTeamId` int(11) NOT NULL,
 `WinTeamId` int(11) NOT NULL,
 `Week` int(11) NOT NULL,
 `Kickoff` datetime NOT NULL,
 PRIMARY KEY (`GameId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1
