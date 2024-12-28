document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate registration process
    localStorage.setItem(username, password);
    document.getElementById('registrationMessage').textContent = 'Registration successful';
});
