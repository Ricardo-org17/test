document.addEventListener("DOMContentLoaded", () => {
  // Create and add a button to the page
  const button = document.createElement("button");
  button.textContent = "Click Me";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  document.body.appendChild(button);
  
  // Create a div to show messages
  const messageDiv = document.createElement("div");
  messageDiv.style.marginTop = "20px";
  messageDiv.style.fontSize = "18px";
  document.body.appendChild(messageDiv);

  // Add click event listener to the button
  button.addEventListener("click", () => {
      messageDiv.textContent = "Hello! You clicked the button.";
  });
});
