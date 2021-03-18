const data = require('./guests.json');
let urlParams = new URLSearchParams(window.location.search);
let firstName;
let building;
let nameUser = document.querySelector("#guest");
let guestHeading = document.querySelector("#spec-1");
let guestList = document.querySelector("#spec-2");
let listItem = document.querySelector("#spec-3");

if (urlParams.has("id")) {
    let person = urlParams.get("id");
    firstName = data["guests"][person].firstname;
    building = data["guests"][person].building;
    
    nameUser.innerHTML = firstName;

    if (building === "flat") {
      listItem.innerHTML = "Kvadratsmart förvaring";
    }
    if (building === "house") {
      listItem.innerHTML = "Projekt för din trädgård";
    }
    
  } 
else {
    firstName = "Skapare";
    guestHeading.style.display = "none";
    guestList.style.display = "none";
  }