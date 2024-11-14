const inputData = document.getElementById("userInput");

// Calling addEventListener
inputData.addEventListener("paste", function (event) {
  event.preventDefault();
  alert("Sorry mate, paste is not allowed here!");
});
