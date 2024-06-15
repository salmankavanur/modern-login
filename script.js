const container = document.getElementById('container');
const signInButton = document.getElementById('login');
const signUpButton = document.getElementById('register');

signInButton.addEventListener('click', () => {
    container.classList.remove('active');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('active');
});
