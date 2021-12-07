import {menu} from "./modules/menu.js";
import {contact} from "./modules/contact.js";
import {home} from "./modules/home.js";

const content = document.getElementById("content");

function makeHeader(){
    const header = document.createElement("h1");
    header.textContent = "Restaurant";
    content.appendChild(header);
}

function makeNavigationBar(){
    const navBar = document.createElement("div");

    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.addEventListener("click", () => {
        makePage();
        home();
    });
    navBar.appendChild(homeButton);

    const menuPage = document.createElement("button");
    menuPage.innerHTML = "Menu";
    menuPage.addEventListener("click", () => {
        makePage();
        menu();
    });
    navBar.appendChild(menuPage);

    const contactPage = document.createElement("button");
    contactPage.innerHTML = "Contact";
    contactPage.addEventListener("click", () => {
        makePage();
        contact();
    });
    navBar.appendChild(contactPage);

    content.appendChild(navBar);
}

function makePage(){
    content.innerHTML = "";
    makeHeader();
    makeNavigationBar();
}

makePage();
home();