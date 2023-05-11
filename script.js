const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// create a reference to players
let team = players;

// create a copy of players
let team1 = [...players];

// create a copy of person
let cap1 = {...person};

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
