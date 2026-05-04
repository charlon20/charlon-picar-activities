function sample () {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   var user = 'admin';
   var pass = 'password';
   const errorMsg = document.getElementById('error');

   if (username.length === 0 || password.length === 0) {
    errorMsg.style.visibility = "visible";
    errorMsg.style.backgroundColor = "red";
    errorMsg.style.Color = "red";
    errorMsg.innerHTML = "All Fields Are Required";
   }
   else if (username != user || password != pass) {
      if (username === user && password != pass) {
      errorMsg.style.visibility = "visible";
      errorMsg.style.backgroundColor = "red";
      errorMsg.style.textColor = "white";
      errorMsg.innerHTML = "Incorrect password";
      }
      else if (password === pass && username != user) {
      errorMsg.style.visibility = "visible";
      errorMsg.style.backgroundColor = "red";
      errorMsg.style.textColor = "white";
      errorMsg.innerHTML = "Incorrect Username";
      }
      else {
      errorMsg.style.visibility = "visible";
      errorMsg.style.backgroundColor = "red";
      errorMsg.style.textColor = "white";
      errorMsg.innerHTML = "Username and Password Are Incorrect";
      }
   }
   else {
      errorMsg.style.visibility = "visible";
      errorMsg.style.backgroundColor = "lightgreen";
      errorMsg.style.Color = "darkgreen";
      errorMsg.innerHTML = "Login Succesfully";
   }
}