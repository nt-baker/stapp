

-- Pick results for all users
SELECT u.Name, g.Week, t.Name, t.TeamId, g.GameId, (p.TeamId = g.WinTeamId) as Correct, p.UserStreak
FROM `user` u
INNER JOIN pick p ON u.UserId = p.PickId
INNER JOIN game g ON p.GameId = g.GameId
INNER JOIN team t on p.TeamId = t.TeamId;

-- Correct picks for specific user
SELECT u.Name, g.Week, t.Name, t.TeamId, g.GameId, p.UserStreak
FROM `user` u
INNER JOIN pick p ON u.UserId = p.PickId
INNER JOIN game g ON p.GameId = g.GameId
INNER JOIN team t on p.TeamId = t.TeamId
WHERE p.TeamId = g.WinTeamId
AND u.UserId = 2;
