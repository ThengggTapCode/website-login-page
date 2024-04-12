function checkConfirmPassword(inpPassword, confirmPassword) {
  if (inpPassword !== confirmPassword) {
    return false;
  } else {
    return true;
  }
}
function registrySuccessful(inpUsername) {
  let newH1 = document.createElement("h1"); // creates a new h1 tag
  let registryStatus = document.getElementById("registry-status");

  newH1.textContent = "Welcome " + inpUsername + "!"; // create contents for h1 tag
  registryStatus.innerHTML = ""; // remove former registry status
  registryStatus.appendChild(newH1); // assign h1 content for login status
}
function registryFailed() {
  let newH1 = document.createElement("h1"); // create a new h1 tag
  let registryStatus = document.getElementById("registry-status");

  newH1.textContent = "Incorrect Password confirmed, try again"; // create contents for h1 tag
  registryStatus.innerHTML = ""; // remove former registry status
  registryStatus.appendChild(newH1); // assign h1 content for login status
}
function main() {
  // get data from html
  let inpUsername = document.getElementById("inp-username").value;
  let inpPassword = document.getElementById("inp-password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (checkConfirmPassword(inpPassword, confirmPassword) === true) {
    registrySuccessful(inpUsername);
  } else {
    registryFailed();
  }
}
