function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

console.log(gameObject());


const game = gameObject();


function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());

//TESTS

/*
returns number of points. Think about where in the object you will find a player's points.
How can you iterate down into that level? Think about the return value of your function.
Points are found nested in the gameObject>home/away>players[2]>player(string)>points[2].
*/

function numPointsScored(playerName) {
    let homePlayer = game.home.players[playerName];
    let awayPlayer = game.away.players[playerName];
    if (homePlayer) {
        return homePlayer.points;
    } else if (awayPlayer) {
        return awayPlayer.points;
    }
    return null;
}

console.log(numPointsScored("Alan Anderson"));


/*
that takes in an argument of a player's name and returns the shoe size for that player.
Think about how you will find the shoe size of the correct player. How can you check 
and see if a player's name matches the name that has been passed into the function as an argument?
*/
function shoeSize(playerName) {
    let homePlayer = game.home.players[playerName];
    let awayPlayer = game.away.players[playerName];
    if (homePlayer) {
        return homePlayer.shoe;
    } else if (awayPlayer) {
        return awayPlayer.shoe;
    }
}

console.log(shoeSize("Alan Anderson"));


//returns an array of that teams colors.
function teamColors(teamName) {
    let homeTeam = game.home;
    let awayTeam = game.away;
    let homeTeamColors = game.home.colors;
    let awayTeamColors = game.away.colors;
    if (homeTeam) {
        return homeTeamColors;
    } else if (awayTeam) {
        return awayTeamColors;
    }
}

console.log(teamColors("Charlotte Hornets"));


//operates on the game object to return an array of the team names.
function teamNames() {
    let teamNames = [game.home.teamName, game.away.teamName];
    return teamNames;
}

console.log(teamNames());


//returns an array of the jersey numbers for that team
function playerNumbers(teamName) {
    const jerseyNumbers = [];
    if (teamName === game.home.teamName) {
      for (let player in game.home.players) {
        jerseyNumbers.push(game.home.players[player].number);
      }
    } else if (teamName === game.away.teamName) {
      for (let player in game.away.players) {
        jerseyNumbers.push(game.away.players[player].number);
      }
    }
  
    return jerseyNumbers;
  }

console.log(playerNumbers("Charlotte Hornets"));


//returns an object of that player's stats.
function playerStats(playerName) {
    let homePlayer = game.home.players[playerName];
    let awayPlayer = game.away.players[playerName];
    if (homePlayer) {
        return homePlayer;
    } else if (awayPlayer) {
        return awayPlayer;
    }
    return null;
}

console.log(playerStats("Bismak Biyombo"));


//return the number of rebounds associated with the player that has the largest shoe size.
//First, find the player with the largest shoe size.
//Then, return that player's number of rebounds.
//Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.
function bigShoeRebounds() {
    let homeShoes = [];
    let awayShoes = [];
    for (let player in game.home.players) {
        homeShoes.push(game.home.players[player].shoe);
    } for (let player in game.away.players) {
        awayShoes.push(game.away.players[player].shoe);
    }
    let shoes = [...homeShoes, ...awayShoes];
    let maxShoe = Math.max(...shoes);
    let largestShoePlayer = 0;
    for (let player in game.home.players) {
        if (game.home.players[player].shoe === maxShoe) {
            largestShoePlayer = (game.home.players[player]); 
        }
    } for (let player in game.away.players) {
        if (game.away.players[player].shoe === maxShoe) {
            largestShoePlayer = (game.away.players[player]);
        }
    } return largestShoePlayer.rebounds;
}

console.log(bigShoeRebounds());


//Which player has the most points?
function mostPointsScored() {
    let homePoints = [];
    let awayPoints = [];
    for (let player in game.home.players) {
        homePoints.push(game.home.players[player].points);
    } for (let player in game.away.players) {
        awayPoints.push(game.away.players[player].points);
    }
    let points = [...homePoints, ...awayPoints];
    let maxPoints = Math.max(...points);
    for (let player in game.home.players) {
        if (game.home.players[player].points === maxPoints) {
            mostPointsPlayer = (game.home.players[player]); 
            return player;
        }
    } for (let player in game.away.players) {
        if (game.away.players[player].points === maxPoints) {
            mostPointsPlayer = (game.away.players[player]);
            return player;
        }
    }
}

console.log(mostPointsScored());

//Which team has the most points?
function winningTeam() {
    let homePointsTotal = 0;
    let awayPointsTotal = 0;
    for (let player in game.home.players) {
        homePointsTotal += game.home.players[player].points;
    } for (let player in game.away.players) {
        awayPointsTotal += game.away.players[player].points;
    } if (homePointsTotal > awayPointsTotal) {
        return "Home team wins!";
    } else if (awayPointsTotal > homePointsTotal) {
        return "Away team wins!";
    } else {
        return "It's a Tie!";
    }
}
console.log(winningTeam());

//Which player has the longest name?
function playerWithLongestName() {
    for (let playerName in game.home.players[playerName]) {
    }
}

//returns true if the player with the longest name had the most steals.
//Find player with longest name (FUNCTION ABOVE playerWithLongestName)
//Find number of steals.
function doesLongNameStealATon() {
}
