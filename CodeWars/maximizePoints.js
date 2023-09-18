function maximizePoints(team1, team2) {
    let wins = 0;
    team1.sort((a, b) => b - a);
    team2.sort((a, b) => b - a);
  
    while (team1.length > 0) {
      if (team1[0] > team2[0]) {
        team1.shift();
        wins++;
      } else {
        team1.pop();
      }
      team2.shift();
    }
  
    return wins;
  }
  
  // Example usage:
  const team1 = [3, 2, 4];
  const team2 = [1, 2, 3];
  const maxPoints = maximizePoints(team1, team2);
  console.log(`Maximum points for your team: ${maxPoints}`);
  