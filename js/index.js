const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = siteContent["nav"]["img-src"];

// assigning NAV
document.querySelector("nav :nth-child(1)").textContent = siteContent["nav"]["nav-item-1"];
document.querySelector("nav :nth-child(2)").textContent = siteContent["nav"]["nav-item-2"];
document.querySelector("nav :nth-child(3)").textContent = siteContent["nav"]["nav-item-3"];
document.querySelector("nav :nth-child(4)").textContent = siteContent["nav"]["nav-item-4"];
document.querySelector("nav :nth-child(5)").textContent = siteContent["nav"]["nav-item-5"];
document.querySelector("nav :nth-child(6)").textContent = siteContent["nav"]["nav-item-6"];

// assigning change to color text of NAV
let newColor = document.querySelectorAll("nav a");
newColor.forEach( color => color.style.color = "green");

// assigning two new items at start and end of NAV
let firstItem = document.createElement("a")
firstItem.textContent = "Hey!";
document.querySelector("nav").prepend(firstItem);
firstItem.style.color = "white";

// assigning background color to NAV bar
document.querySelector("nav").style.background = "lightgray";
document.querySelector("nav").style.padding = "1vw";

let lastItem = document.createElement("a");
lastItem.textContent = "Bye!";
document.querySelector("nav").appendChild(lastItem);
lastItem.style.color = "black";

// assigning header titles, and pictures.
document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"];
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];
document.querySelector(".cta img").src = siteContent["cta"]["img-src"];

// assigning first paragraph.
document.querySelector(".top-content :first-child h4").textContent = siteContent["main-content"]["features-h4"];
document.querySelector(".top-content :first-child p").textContent = siteContent["main-content"]["features-content"];

// assigning second paragraph.
document.querySelector(".top-content :last-child h4").textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".top-content :last-child p").textContent = siteContent["main-content"]["about-content"];

// assigning middle image
document.querySelector(".middle-img").src = siteContent["main-content"]["middle-img-src"];

// assigning bottom first paragraph
document.querySelector(".bottom-content :first-child h4").textContent = siteContent["main-content"]["services-h4"];
document.querySelector(".bottom-content :first-child p").textContent = siteContent["main-content"]["services-content"];

// assigning bottom second paragraph
document.querySelector(".bottom-content :nth-of-type(even) h4").textContent = siteContent["main-content"]["product-h4"];
document.querySelector(".bottom-content :nth-of-type(even) p").textContent = siteContent["main-content"]["product-content"];

// assigning bottom third paragraph
document.querySelector(".bottom-content :last-child h4").textContent = siteContent["main-content"]["vision-h4"];
document.querySelector(".bottom-content :last-child p").textContent = siteContent["main-content"]["vision-content"];

// assigning contact section
document.querySelector(".contact :first-child").textContent = siteContent["contact"]["contact-h4"];

// assigning street in contact
document.querySelector(".contact :nth-child(2)").textContent = siteContent["contact"]["address"];

// assigning phone
document.querySelector(".contact :nth-child(3)").textContent = siteContent["contact"]["phone"];

// assigning email
document.querySelector(".contact :last-child").textContent = siteContent["contact"]["email"];

// assigning footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];
