var database = [
  {
    username: "mohammad1",
    password: "abcd1",
  },
  {
    username: "mohammad2",
    password: "abcd2",
  },
  {
    username: "mohammad3",
    password: "abcd3",
  },
  {
    username: "mohammad4",
    password: "abcd4",
  },
  {
    username: "mohammad5",
    password: "abcd5",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning! ",
  },
  {
    username: "Sally",
    timeline: "Javascript is soooooo coooool!",
  },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

var userNamePrompt = prompt("What's your username? ");
var PasswordPrompt = prompt("What's your password? ");

signIn(userNamePrompt, PasswordPrompt);
