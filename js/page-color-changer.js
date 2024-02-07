document.addEventListener("DOMContentLoaded", () => {
  // Capture the RGB input elements in the document
  const r = document.querySelector("#red");
  const g = document.querySelector("#green");
  const b = document.querySelector("#blue");

  // Define a new function for the inputs
  function updateBackground() {
    // Set the background color of the document's body to the values of the inputs
    document.body.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`; // example : rgb(255,255,255)
  }

  // Attach a listener to each input to update the background-color on every change.
  for (const input of document.querySelectorAll("input"))
    input.addEventListener("change", updateBackground);

  // End of Code
}); // https://github.com/eldritch-quinn/comp-1073-lab-1
