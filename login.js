document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple client-side validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required!';
        return;
    }

    // For demonstration purposes, use hardcoded credentials
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
        window.location.href = 'welcome.html'; // Redirect on successful login
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
