
// Grab our button from our HTML index page
const btn = document.getElementById('button');
// There are also getElementByClass(), querySelector(), and querySelectorAll()

// Add an "event" listener so the browser checks for a button click
btn.addEventListener('click', () => {
    document.getElementById('name').innerHTML = "My name is Daisy";
})