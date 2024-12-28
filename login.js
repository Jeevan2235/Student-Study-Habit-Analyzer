document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate login process
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        document.getElementById('loginMessage').textContent = 'Login successful';
        // Store username in local storage
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'home.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password';
    }
});
