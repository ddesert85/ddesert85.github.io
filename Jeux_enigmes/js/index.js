const nav = document.createElement("nav");
const header = document.getElementById("header");
const a = document.createElement("a");
const img = document.createElement("img");
const h1 = document.createElement("h1");


header.prepend(nav);
nav.classList.add("nav");

nav.appendChild(a).classList.add("nav__link");
nav.appendChild(h1).classList.add("nav__title");


a.appendChild(img).classList.add("nav__img");
a.setAttribute("href", "enigme0 _accueil.html");
img.setAttribute("src", "../images/Logo.png");
img.setAttribute("alt", "Logo");
h1.textContent = "Chasse au Trésor";





// <nav class="nav">
//    <a href="enigme0 _accueil.html" class="nav__link">
//        <img class = "nav__img" src="../images/Logo.png" alt="Logo">
//    </a>
//    <h1 class="nav__title">Chasse au Trésor</h1>

// </nav>