let urlParams = new URLSearchParams(window.location.search);
let firstName;
let building;
let nameUser = document.querySelector.("span");

if (urlParams.has("id")) {
    /* hämta namn och hustyp kopplat till id */
    firstName = /* object value array grej?? (Rekas: urlParams.get("firstname");) */
    building = /*  object value array grej?? (Rekas: (urlParams.get("building");) */
  } else {
    firstName = "Skapare";
  }
  
  nameUser.textContent = firstName;



  /* GUEST LIST WITH ID, NAME & TYPE OF BUILDING/HOME */