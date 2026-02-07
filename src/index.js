import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

loadHome();

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);
contactBtn.addEventListener("click", loadContact);

console.log("Hello World!");