// Mobile menu
function toggleMenu(){
let menu = document.getElementById("navMenu");

if(menu.style.display === "flex"){
menu.style.display = "none";
}else{
menu.style.display = "flex";
}
}

// Smooth scroll
function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

let msg = document.getElementById("formMessage");

// validation
if(name === "" || email === "" || message === ""){
    msg.innerHTML = "Please fill in all fields.";
    msg.style.color = "yellow";
    return;
}

// SEND EMAIL TO YOU
emailjs.send("service_63hus3t", "template_z3toloj", {
    from_name: name,
    from_email: email,
    message: message
})

// AUTO RESPONSE TO USER
.then(function() {
    return emailjs.send("service_63hus3t", "template_3bgrakg", {
        from_name: name,
        from_email: email,
        message: message
    });
})

// SUCCESS
.then(function() {
    msg.innerHTML = "Message sent successfully!";
    msg.style.color = "lightgreen";

    // clear form
    document.getElementById("contactForm").reset();
})

// ERROR
.catch(function(error) {
    msg.innerHTML = "Failed to send message.";
    msg.style.color = "red";
    console.log(error);
});
  
});

// Back to top button
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
topBtn.style.display = "block";
}
else{
topBtn.style.display = "none";
}

}

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}




function openService(service){

let title = document.getElementById("modalTitle");
let list = document.getElementById("modalList");
let image = document.getElementById("modalImage");

list.innerHTML = "";

let services = {
office:{
title:"Office Cleaning",
image:"ist.jpg",
items:[
"Office Floor Cleaning",
"Desk & Workspace Cleaning",
"Restroom Sanitation",
"Kitchen Cleaning",
"Waste Removal"
]
},

carpet:{
title:"Carpet Cleaning",
image:"carpt.webp",
items:[
"Deep Carpet Shampoo",
"Stain Removal",
"Steam Cleaning",
"Odor Removal"
]
},

window:{
title:"Window Cleaning",
image:"window-cleaning.jpg",
items:[
"Interior Window Cleaning",
"Exterior Window Cleaning",
"High-rise Window Cleaning",
"Glass Polishing"
]
},

industrial:{
title:"Industrial Cleaning",
image:"ind.png",
items:[
"Industrial Cleaning",
"Heat Exchanger Cleaning",
"Pipe & Tube Bundle Cleaning",
"Rigid & Flexi Lance Cleaning",
"Air Heater Cleaning",
"Condenser Cleaning"
]
},

hiring:{
title:"Hiring equipments",
image:"gal.png",
items:[
"Ultra high water pressure",
"Super high water pressure",
"high water pressure"

]
}
};

title.innerText = services[service].title;
image.src = services[service].image;

services[service].items.forEach(item=>{
let li = document.createElement("li");
li.innerText = item;
list.appendChild(li);
});

document.getElementById("serviceModal").style.display = "block";

}

function closeService(){

document.getElementById("serviceModal").style.display = "none";

}
