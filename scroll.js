let currentScrollPosition = 0;
let scrollAmount = 400;
const  sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");
btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
 function scrollHorizontally(val){
     currentScrollPosition += (val * scrollAmount);
     sCont.style.left = currentScrollPosition + "px";
     if(currentScrollPosition >= 0){
          currentScrollPosition = 0
          btnScrollLeft.style.opacity = "0";
     }
     else{
       btnScrollLeft.style.opacity = "1";
     }
     if(currentScrollPosition <= maxScroll){
         currentScrollPosition = maxScroll;
         btnScrollRight.style.opacity = "0";

     }
     else{
       btnScrollRight.style.opacity = "1";
     }
     sCont.style.left=currentScrollPosition + "px"; 
 }

    var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


