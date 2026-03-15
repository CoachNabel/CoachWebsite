const form = document.getElementById("leadForm")
const message = document.getElementById("formMessage")

form.addEventListener("submit", function(e){

e.preventDefault()

emailjs.sendForm(
"service_zx16ady",
"template_pvejrf5",
this
)

.then(function(){

message.innerText="Thank you! Coach Nabel will contact you soon."
form.reset()

},

function(error){

message.innerText="Something went wrong. Please try again."

})

})

const cards = document.querySelectorAll(".card")

window.addEventListener("scroll", ()=>{

cards.forEach(card=>{

const position = card.getBoundingClientRect().top
const screen = window.innerHeight

if(position < screen - 100){

card.style.opacity = 1
card.style.transform = "translateY(0)"

}

})

})