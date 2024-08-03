// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
/*const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();*/

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
    
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

/*window.addEventListener("scroll", show);

function show(){
  let sections= document.querySelectorAll(".section");

  for(let i=0; i < sections.length; i++){
     let windowHeight= window.innerHeight;
     let showTop= sections[i].getBoundingClientRect().top;
     let showPoint= 150;

     if(showTop < windowHeight - showPoint){
      sections[i].classList.add("show");

     }else{
      sections[i].classList.remove("show");
      //window.removeEventListener("scroll", show)
     }
  }
}*/
const contactForm= document.querySelector("#contact-form");
let name= document.querySelector("#name");
let email= document.querySelector("#email");
let subject= document.querySelector("#subject");
let message= document.querySelector("#message");

contactForm.addEventListener('submit', (e) =>{
  e.preventDefault();

  let formData= {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  };

  let xhr= new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload= function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('email sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    }else{
      alert(`something went wrong`)
    }
  }

  xhr.send(JSON.stringify(formData));
})

/*const projectArray=['https://react-quote-generator-gilt.vercel.app/',
'https://image-converter-tau.vercel.app/',
'https://image-editor-sand.vercel.app/',
 'https://phone-number-validator-seven.vercel.app/', 
 'https://guess-game-nu.vercel.app/'];*/
 
 const projectArray=[
  "https://world-wunda.vercel.app/",
  "https://yangyfurniture.netlify.app/",
  "https://edtech-landing-page-khaki.vercel.app/",
  "https://business-dashboard-jet.vercel.app/",
  "https://react-quote-generator-gilt.vercel.app/"

 ]

const articleArray=['https://olaitanferanmi.hashnode.dev/how-to-create-a-react-custom-hook',
 'https://olaitanferanmi.hashnode.dev/python-dictionaries',
'https://medium.com/@olaitanferanmi41/cost-optimization-in-software-engineering-584b3e3f8ad',
 'https://medium.com/@olaitanferanmi41/the-unspoken-addiction-b74c87385843', 
'https://medium.com/@olaitanferanmi41/what-is-cybersecurity-d1bfc9750240'];

const project1= document.querySelector('.container1 img');
const project2= document.querySelector('.container2 img');
const project3= document.querySelector('.container3 img');
const project4= document.querySelector('.container4 img');
const project5= document.querySelector('.container5 img');

project1.addEventListener("click", () => {
  window.open(`${projectArray[0]}`)
});

project2.addEventListener("click", () => {
  window.open(`${projectArray[1]}`)
});

project3.addEventListener("click", () => {
  window.open(`${projectArray[2]}`)
});

project4.addEventListener("click", () => {
  window.open(`${projectArray[3]}`)
});

project5.addEventListener("click", () => {
  window.open(`${projectArray[4]}`)
});

const article1= document.querySelector('.article1 img');
const article2= document.querySelector('.article2 img');
const article3= document.querySelector('.article3 img');
const article4= document.querySelector('.article4 img');
const article5= document.querySelector('.article5 img');

article1.addEventListener("click", () => {
  window.open(`${articleArray[0]}`)
});
article2.addEventListener("click", () => {
  window.open(`${articleArray[1]}`)
});
article3.addEventListener("click", () => {
  window.open(`${articleArray[2]}`)
});
article4.addEventListener("click", () => {
  window.open(`${articleArray[3]}`)
});
article5.addEventListener("click", () => {
  window.open(`${articleArray[4]}`)
});
/*const observer= new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

let sections= document.querySelectorAll('.section');
sections.forEach((section) => observer.observe(section));*/