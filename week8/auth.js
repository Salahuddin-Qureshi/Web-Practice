function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showLoggedInUI();
    } else {
        showLoggedOutUI();
    }
}

// Function to handle user login
function login(username, password) {
    // You should have some server-side validation here in a real-world application
    // For demonstration purposes, I'll just check if the username and password are not empty
    if (username && password) {
        // Simulate authentication
        // In a real-world application, this would involve sending a request to the server and verifying credentials
        localStorage.setItem('loggedInUser', username);
        showLoggedInUI();
    } else {
        alert('Invalid username or password.');
    }
}

// Function to handle user logout
function logout() {
    localStorage.removeItem('loggedInUser');
    showLoggedOutUI();
}

// Function to display UI elements when the user is logged in
function showLoggedInUI() {
    document.getElementById('loginForm').style.display = 'none'; // Hide login form
    document.getElementById('logoutButton').style.display = 'block'; // Show logout button
    document.getElementById('loggedInMessage').innerText = `Welcome, ${localStorage.getItem('loggedInUser')}!`; // Display welcome message
}

// Function to display UI elements when the user is logged out
function showLoggedOutUI() {
    document.getElementById('loginForm').style.display = 'block'; // Show login form
    document.getElementById('logoutButton').style.display = 'none'; // Hide logout button
    document.getElementById('loggedInMessage').innerText = ''; // Clear welcome message
}

// Event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
});

// Event listener for the logout button
document.getElementById('logoutButton').addEventListener('click', logout);

// Check login status when the page loads
checkLoginStatus();
