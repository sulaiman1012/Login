const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email && password) {
        // Simulate API call
        setTimeout(() => {
            if (email === 'example@example.com' && password === 'password') {
                // Login successful
                window.location.href = 'https://example.com/dashboard';
            } else {
                // Login failed
                errorMsg.textContent = 'Invalid email or password';
            }
        }, 2000);
    } else {
        errorMsg.textContent = 'Please fill in all fields';
    }
});