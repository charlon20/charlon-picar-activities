function sample () {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   const confirm_password = document.getElementById('confirm-password').value
   var user = 'rod dela cruz';
   const errorMsg = document.getElementById('error');

   if (username === user) {
    errorMsg.style.visibility = "visible";
    errorMsg.style.backgroundColor = "red";
    errorMsg.style.Color = "red";
    errorMsg.innerHTML = "username already exist";
   }
   else if (password != confirm_password) {
   errorMsg.style.visibility = "visible";
   errorMsg.style.backgroundColor = "red";
   errorMsg.style.Color = "red";
   errorMsg.innerHTML = "password doesnt match";
      }
      
   else {
      errorMsg.style.visibility = "visible";
      errorMsg.style.backgroundColor = "lightgreen";
      errorMsg.style.Color = "darkgreen";
      errorMsg.innerHTML = "Account Registered";
   }
}