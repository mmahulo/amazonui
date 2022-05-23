function password_verify (){
  if (pwd1.value.length >= 1) {
      pwd1.style.border = "1px solid red";
      pwd1.style.display = "none"
    return true;
  }
}

function email_verify (){
  if (fname.value.length >= 1) {
      fname.style.border = "1px solid red";
      fname.style.display = "none"
    return true;
  }
}
var fname = document.forms['form']['fname'];
var pwd1 = document.forms['form']['pwd1'];

var fname = document.getElementById('fname');
var pwd1 = document.getElementById('pwd1');

fname.addEventListener('textInput', email_verify);
pwd1.addEventListener('textInput', password_verify);

function logIn(event) {
  event.preventDefault();
  var usernanme = document.getElementById("fname").value;
  var Password = document.getElementById("pwd1").value;
  if(fname.length < 1) {
      fname.style.border = "1px solid red";
      fname.style.display = "block"
      fname.focus();
      return false;
  }

  if (pwd1.length < 1) {
      pwd1.style.border = "1px solid red";
      pwd1.style.display = "block"
      pwd1.focus();
      return false;
    }

    var Name = localStorage.getItem('name');
    var Password = localStorage.getItem('password');
    if(usernanme == Name && Password == Password){
        window.location = "home.html";
    }else{
        pwd1.style.display = "block";
        fname.focus();
    }
}