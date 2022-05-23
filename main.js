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

const img = document.getElementById('file');
img.addEventListener("change", function(){
    alert("File added");
    var readimgfile= new FileReader();
        readimgfile.onload= function(){
            localStorage.setItem('file', readimgfile.result);
            alert(readimgfile.result);
        }
    readimgfile.readAsDataURL(this.files[0]);
});