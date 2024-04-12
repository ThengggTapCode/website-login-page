function checkData(inpUsername, inpPassword) {
  const validUsername = "ThengggTapCode";
  const validPassword = "jqka2";

  if (inpUsername !== validUsername) {
    return false;
  }
  if (inpPassword !== validPassword) {
    return false;
  }
  return true;
}
function loginSuccessful(inpUsername) {
  let newH1 = document.createElement("h1"); // make a new h1 tag
  let loginStatus = document.getElementById("login-status");

  newH1.textContent = "Login successful! Welcome back " + inpUsername; // create contents for h1 tag
  loginStatus.innerHTML = ""; // remove former login status
  loginStatus.appendChild(newH1); // assign h1 content for login status
}
function loginFailed() {
  let newH1 = document.createElement("h1"); // make a new h1 tag
  let loginStatus = document.getElementById("login-status");

  newH1.textContent = "Login Failed"; // create contents for h1 tag
  loginStatus.innerHTML = ""; // remove former login status
  loginStatus.appendChild(newH1); // assign h1 content for login status
}
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
