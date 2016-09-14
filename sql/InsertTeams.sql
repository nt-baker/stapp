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

-- WEEK 1 GAMES
INSERT INTO `game` (`GameId`, `HomeTeamId`, `AwayTeamId`, `WinTeamId`, `Week`, `Kickoff`)
VALUES (NULL, '8', '1', '1', '1', '2016-09-11'),
  (NULL, '13', '5', '5', '1', '2016-09-11'),
  (NULL, '6', '4', '6', '1', '2016-09-12'),
  (NULL, '7', '23', '7', '1', '2016-09-08'),
  (NULL, '31', '9', '31', '1', '2016-09-11'),
  (NULL, '2', '10', '10', '1', '2016-09-11'),
  (NULL, '30', '11', '30', '1', '2016-09-11'),
  (NULL, '3', '16', '16', '1', '2016-09-11'),
  (NULL, '12', '17', '17', '1', '2016-09-11'),
  (NULL, '28', '18', '18', '1', '2016-09-11'),
  (NULL, '19', '32', '19', '1', '2016-09-11'),
  (NULL, '29', '20', '20', '1', '2016-09-11'),
  (NULL, '14', '22', '14', '1', '2016-09-11'),
  (NULL, '21', '24', '24', '1', '2016-09-11'),
  (NULL, '26', '25', '25', '1', '2016-09-11'),
  (NULL, '15', '27', '27', '1', '2016-09-12');


-- PICKS
INSERT INTO `pick` (`PickId`, `UserId`, `TeamId`, `GameId`, `UserStreak`, `PickTimeEst`)
VALUES (NULL, '3', '30', '9', '0', '2016-09-07 00:00:00'),
  (NULL, '4', '31', '7', '0', '2016-09-07 00:00:00'),
  (NULL, '5', '26', '17', '0', '2016-09-07 00:00:00'),
  (NULL, '6', '30', '9', '0', '2016-09-07 00:00:00'),
  (NULL, '7', '30', '9', '0', '2016-09-07 00:00:00'),
  (NULL, '8', '31', '7', '0', '2016-09-07 00:00:00'),
  (NULL, '9', '30', '9', '0', '2016-09-07 00:00:00'),
  (NULL, '10', '1', '3', '0', '2016-09-07 00:00:00'),
  (NULL, '11', '19', '13', '0', '2016-09-07 00:00:00'),
  (NULL, '12', '12', '11', '0', '2016-09-07 00:00:00'),
  (NULL, '13', '2', '8', '0', '2016-09-07 00:00:00'),
  (NULL, '14', '12', '11', '0', '2016-09-07 00:00:00'),
  (NULL, '15', '25', '17', '0', '2016-09-07 00:00:00'),
  (NULL, '16', '3', '10', '0', '2016-09-07 00:00:00'),
  (NULL, '17', '28', '12', '0', '2016-09-07 00:00:00');



-- USERS
INSERT INTO `user` (`UserId`, `Name`, `Password`, `CurrentStreak`, `Email`)
VALUES (NULL, 'John', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Josh', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Peter', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Ryan', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Shawn', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Jake', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Durban', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Tom', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Lauren', 'wideopen', '1', 'test@test.com'),
  (NULL, 'Brad', 'wideopen', '0', 'test@test.com'),
  (NULL, 'Connie', 'wideopen', '0', 'test@test.com'),
  (NULL, 'Sam', 'wideopen', '0', 'test@test.com'),
  (NULL, 'Kyle', 'wideopen', '0', 'test@test.com'),
  (NULL, 'Scott', 'wideopen', '0', 'test@test.com'),
  (NULL, 'Tyler', 'wideopen', '0', 'test@test.com');
