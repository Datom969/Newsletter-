const form = document.querySelector(".form")
const mail = document.querySelector(".mail")
const emailError= document.querySelector(".emailError");
const dismiss  = document.querySelector(".dismiss");
const confirmPage = document.querySelector(".confirm-page");
const submitButton = document.querySelector(".submit");
const container = document.querySelector(".container");

const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
window.addEventListener("load", () =>{
  const validate =mail.value.length ===0 || emailRegex.test(mail.value);
  mail.className = validate ? "valid" : "invalid";

  mail.addEventListener("input", ()=>{
    const validate = mail.value.length ===0 || emailRegex.test(mail.value);
    if(validate){
      mail.className = "valid"
      emailError.innerHTML="";
    }
    else{
      mail.className = "invalid";
      emailError.innerHTML="Valid email required";
    }
  })
})

form.addEventListener("submit", (e)=>{
   e.preventDefault()
  const notValidate = mail.value.length === 0 || !emailRegex.test(mail.value);
  if(notValidate){
    mail.classList.add("invalid");
    emailError.innerHTML= "Valid email required"; 
  }
  else {
    confirmPage.classList.toggle("active");
    container.classList.toggle("active");
    const msg = document.querySelector("#confirm-mail");
    msg.innerHTML = " "+ mail.value + ". ";
  }
})

dismiss.addEventListener("click", ()=>{
   confirmPage.classList.remove("active");
   container.classList.toggle("active");
   mail.value ="";
})

