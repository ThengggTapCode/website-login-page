// incorrect username
function incorrectUsername() {
  let newP = document.createElement("p"); // create a new p tag
  let usernameStatus = document.getElementById("username-status");

  newP.textContent = "Incorrect Username"; // content for p tag
  usernameStatus.innerHTML = ""; // remove former status
  usernameStatus.appendChild(newP); // assign content for status
}
// incorrect password
function incorrectPassword() {
  let newP = document.createElement("p"); // create a new p tag
  let passwordStatus = document.getElementById("password-status");

  newP.textContent = "Incorrect Password"; // content for p tag
  passwordStatus.innerHTML = ""; // remove former status
  passwordStatus.appendChild(newP); // assign content for status
}
// check input data
function checkData(inpUsername, inpPassword) {
  const validUsername = "ThengggTapCode";
  const validPassword = "jqka2";

  if (inpUsername !== validUsername) {
    incorrectUsername();
    return false;
  }
  if (inpPassword !== validPassword) {
    incorrectPassword();
    return false;
  }
  return true;
}
// login successful
function loginSuccessful(inpUsername) {
  let newH1 = document.createElement("h1"); // make a new h1 tag
  let loginStatus = document.getElementById("login-status");

  newH1.textContent = "Login successful! Welcome back " + inpUsername; // create contents for h1 tag
  loginStatus.innerHTML = ""; // remove former login status
  loginStatus.appendChild(newH1); // assign h1 content for login status
}
// login failed
function loginFailed() {
  let newH1 = document.createElement("h1"); // make a new h1 tag
  let loginStatus = document.getElementById("login-status");

  newH1.textContent = "Login Failed"; // create contents for h1 tag
  loginStatus.innerHTML = ""; // remove former login status
  loginStatus.appendChild(newH1); // assign h1 content for login status
}
// main
function main() {
  // get data from html
  let inpUsername = document.getElementById("inp-username").value;
  let inpPassword = document.getElementById("inp-password").value;

  // check data
  if (checkData(inpUsername, inpPassword) === true) {
    loginSuccessful(inpUsername);
  } else {
    loginFailed();
  }
}
