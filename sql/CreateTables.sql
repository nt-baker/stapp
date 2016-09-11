
CREATE TABLE `team` (
 `TeamId` int(11) NOT NULL AUTO_INCREMENT,
 `Location` varchar(50) NOT NULL,
 `Name` varchar(50) NOT NULL,
 PRIMARY KEY (`TeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1


CREATE TABLE `game` (
 `GameId` int(11) NOT NULL AUTO_INCREMENT,
 `HomeTeamId` int(11) NOT NULL,
 `AwayTeamId` int(11) NOT NULL,
 `WinTeamId` int(11) NOT NULL,
 `Week` int(11) NOT NULL,
 `Kickoff` datetime NOT NULL,
 PRIMARY KEY (`GameId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1


CREATE TABLE `pick` (
 `PickId` int(11) NOT NULL AUTO_INCREMENT,
 `TeamId` int(11) NOT NULL,
 `GameId` int(11) NOT NULL,
 `UserStreak` int(11) NOT NULL,
 PRIMARY KEY (`PickId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1


CREATE TABLE `user` (
 `UserId` int(11) NOT NULL AUTO_INCREMENT,
 `Name` varchar(80) NOT NULL,
 `Password` varchar(100) NOT NULL,
 `CurrentStreak` int(11) NOT NULL,
 `Email` varchar(80) NOT NULL,
 PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1


CREATE TABLE `userpick` (
 `UserId` int(11) NOT NULL,
 `PickId` int(11) NOT NULL,
 PRIMARY KEY (`UserId`,`PickId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
