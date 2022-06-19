const name = document.getElementById('name');
const pass = document.getElementById('pass');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
form.addEventListener('submit', (e) => {
    let messages = [];
    if (name.value === '' || name.value == null) {
        messages.push("Name is Required");
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(',');
    }
});