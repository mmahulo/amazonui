function setFormMessage(formElement,type,message){
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message--success","form_message--error");
    messageElement.classList.add('form_message--${type}');
}
function setInputError(inputElement,message){
    inputElement.classList.add("form_input--error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

function clearInputError(inputElement)
{

inputElement.classList.remove("form_input--error");
inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}

/*setFormMessage(signinForm,"success","You're logged in!");*/

document.addEventListener("DOMContentLoaded",() => {
    const signinForm = document.querySelector("#signin");
    const signupForm = document.querySelector("#signup");

    document.querySelector("#linkSignUp").addEventListener("click",e=> {
        e.preventDefault();
        signinForm.classList.add("form--hidden");
        signupForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkSignIn").addEventListener("click",e=>{
        e.preventDefault();
        signinForm.classList.remove("form--hidden");
        signupForm.classList.add("form--hidden");
    });

    signinForm.addEventListener("submit",e=> {
        e.preventDefault();
    
        setFormMessage(signinForm,"error","Invalid username/password");
});
document.querySelectorAll(".form_input").forEach(inputElement => {
    inputElement.addEventListener("blur",e=>{
        if(e.target.id == "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 10){
            setInputError(inputElement,"Username must be at least 10 characters in length");
        }
    });
    inputElement.addEventListener("input",e => {
        clearInputError(inputElement);
    })
});
});
var swiper = new Swiper(".books_slider",{
    spaceBetween: 10,
    loop:true,
centeredSlides: true,
autoplay:{
    delay:9500,
    disableOnInteraction:false,
},
navigation:{
    nextE1:".swiper-button-next",
    prevE1:"swiper-button-prev",
},
breakpoints:{
    0:{
        slidePerView:1,
    },
    450:{
    slidePerView:2,
    },
    768:{
    slidePerView:3,
    },
    1024:{
    slidePerView:4,
    },
},
});

