// Script to show the login form after clicking the login button
document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.querySelector('.buttons').style.display = 'none'; // Hide the buttons
});

// Script to show the register form after clicking the register button
document.getElementById('registerButton').addEventListener('click', function() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.querySelector('.buttons').style.display = 'none'; // Hide the buttons
});

// Script to switch back to register form from login form
document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
});

// Script to switch back to login form from register form
document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
});
