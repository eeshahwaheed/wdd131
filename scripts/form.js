// Product Array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  // Populate the Product Name dropdown
  document.addEventListener("DOMContentLoaded", function() {
      const productSelect = document.getElementById("productName");
  
      products.forEach(product => {
          const option = document.createElement("option");
          option.value = product.id; // Use the id as the value
          option.textContent = product.name; // Use the name for display
          productSelect.appendChild(option);
      });
  });
  
  const copyrightYear = document.querySelector("#currentyear");
  const lastModified = document.querySelector("#lastModified");
  
  
  const today = new Date();
  copyrightYear.textContent = today.getFullYear(); 
  
  
  lastModified.textContent = "Last Modified: " + document.lastModified; 