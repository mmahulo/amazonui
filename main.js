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
$(document).ready(function() {
new Swiper('.swiper-container', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1028: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});
});
