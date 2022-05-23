function myFunc(event) {
    event.preventDefault();
    var signupUsername_login= document.getElementById("signupUsername_login").value;
    var enter_email =document.getElementById("email").value;
    var Phone_Number =document.getElementById("phone").value;
    var pwd_login =document.getElementById("pwd_login").value;

    localStorage.setItem('signupUsername_reg', signupUsername_login);
    localStorage.setItem('email', enter_email);
    localStorage.setItem('phone', Phone_Number);
    localStorage.setItem('pwd_reg', pwd_login);
    window.location = "Login.html";
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







