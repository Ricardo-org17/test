document.addEventListener("DOMContentLoaded", () => {
  // Create an input field
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type something...";
  input.style.padding = "10px";
  input.style.fontSize = "16px";
  document.body.appendChild(input);

  // Create a button
  const button = document.createElement("button");
  button.textContent = "Submit";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.marginLeft = "10px";
  document.body.appendChild(button);
  
  // Create a div to display user input
  const resultDiv = document.createElement("div");
  resultDiv.style.marginTop = "20px";
  resultDiv.style.fontSize = "18px";
  document.body.appendChild(resultDiv);

  // Handle button click
  button.addEventListener("click", () => {
      resultDiv.textContent = `You entered: ${input.value}`;
  });
});
