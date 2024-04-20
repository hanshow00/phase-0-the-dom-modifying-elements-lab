// Write your code here!
// Remove the main element with id 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// Assign id 'victory' to newHeader
newHeader.setAttribute('id', 'victory');

// Set text content of newHeader
const yourName = "Hans"; // Replace 'Your Name' with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append newHeader to the body
document.body.appendChild(newHeader);