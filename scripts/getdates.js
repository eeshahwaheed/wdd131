
const copyrightYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");


const today = new Date();
copyrightYear.textContent = today.getFullYear(); 


lastModified.textContent = "Last Modified: " + document.lastModified; 
