// Remove the <main> element with id 'main'
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to 'newHeader'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Joe is the champion'; // <-- Replace YOUR-NAME with your actual name

// Add the newHeader to the document body
document.body.appendChild(newHeader);