// Function to handle user registration
function register(username, password) {
    // Check if username already exists in Local Storage
    if (localStorage.getItem(username)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    // Register the user if username is unique
    localStorage.setItem(username, password);
    alert('Registration successful!');
}
