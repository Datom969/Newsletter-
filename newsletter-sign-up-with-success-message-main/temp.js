const form = document.querySelector(".form")
const mail = document.querySelector(".mail")
const emailError= document.getElementById("emailError");
const dismiss  = document.querySelector(".dismiss");
const confirmPage = document.querySelector(".confirm-page");
const subscribe = document.querySelector(".subscribe");
const container = document.querySelector(".container");
mail.addEventListener ("input", validate);
function validate(){
   const email =mail.value;
   const  validEmail = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/

   //Email not valid:
   if ((!validEmail.test(email))){
      emailError.innerHTML = "Valid email required" ;
      mail.classList.toggle("active");
      return false;
   }
   //Valid Email:
   emailError.innerHTML = " " ;
   mail.classList.remove("active");
   container.classList.toggle("active");
   confirmPage.classList.toggle("active");
}

subscribe.addEventListener("click", validate);