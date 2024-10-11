
// Grab our button from our HTML index page
const btn = document.getElementById('button');
// There are also getElementByClass(), querySelector(), and querySelectorAll()

// Add an "event" listener so the browser checks for a button click
btn.addEventListener('click', () => {
    document.getElementById('name').innerHTML = "My name is Daisy";
})

// What you can do with DOM manipulation like this:
// Create elements
// Set innerHTML/text content of an element
// Append an element
// Insert one element before another
// Replace a child element - replaceChild()
// Remove a child element - removeChild()
// Add or remove CSS styling

