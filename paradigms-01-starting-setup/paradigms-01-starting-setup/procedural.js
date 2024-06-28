const form = document.getElementById('user-input');

function signupHandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById('username');
  const enteredUsername = userNameInput.value;
  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('Invalid input -username is empty!');
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert('Invalid input -password is empty or less than 6!');
    return;
  }

  const user={
    username: enteredUsername,
    password: enteredPassword
  }

  console.log(user)
  console.log("Hello "+user.username)
}
form.addEventListener('submit', signupHandler);
