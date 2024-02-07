document.addEventListener("DOMContentLoaded", (event) => {
  // Select the input elements in the document
  const r = document.querySelector("#red");
  const g = document.querySelector("#green");
  const b = document.querySelector("#blue");

  // Define a new function
  function updateBackground() {
    // Set the background color of the document's body to the values of the inputs
    document.body.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`; // example : rgb(255,255,255)
  }

  // Fire the function whenever any of the input's change
  r.addEventListener("change", updateBackground);
  b.addEventListener("change", updateBackground);
  g.addEventListener("change", updateBackground);
});
