function formValidation(event) {
  event.preventDefault();

  var userName = document.getElementById("name").value;
  var Email =document.getElementById("email").value;
  var Phone_Number =document.getElementById("number").value;
  var Password =document.getElementById("password").value;
  
  localStorage.setItem('name', userName);
  localStorage.setItem('email', Email);
  localStorage.setItem('number', Phone_Number);
  localStorage.setItem('password', Password);
  window.location = "loginForm.html";
}
