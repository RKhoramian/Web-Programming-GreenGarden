document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Get error message elements
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Validate email
    if (!email || !emailPattern.test(email)) {
        emailError.textContent = 'لطفا یک ایمیل معتبر وارد کنید';
        emailError.style.display = 'block';
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // Validate password
    if (!password) {
        passwordError.textContent = 'لطفا رمز عبور را وارد کنید';
        passwordError.style.display = 'block';
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    // If both email and password are valid, allow form submission
    if (email && emailPattern.test(email) && password) {
        alert('فرم با موفقیت ارسال شد');
        event.target.submit();
    }
});

// Add event listener to the back button
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = '../homepage/index.html'; // Replace 'index.html' with the path to your home page
});

document.getElementById('submitlogin').addEventListener('click', function() {
    window.location.href = '../homepage/index.html'; // Replace 'index.html' with the path to your home page
});

