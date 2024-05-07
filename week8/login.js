// Function to handle user login
function login(username, password) {
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        localStorage.setItem('loggedInUser', username);
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to main page after login
    } else {
        alert('Invalid username or password.');
    }
}
