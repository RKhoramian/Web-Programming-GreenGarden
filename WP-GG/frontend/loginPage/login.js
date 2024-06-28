// Add event listener to the back button
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = '../homepage/index.html'; // Replace 'index.html' with the path to your home page
});

// Add event listener to the form submit event
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

    let isValid = true;

    // Validate email
    if (email === "" || !emailPattern.test(email)) {
        emailError.textContent = 'لطفا یک ایمیل معتبر وارد کنید';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
console.log(password);
console.log(password.length);
console.log(typeof(password));

    // Validate password
    if (password === "" || password.length<8 ) {
          if(password === "")
        passwordError.textContent = 'لطفا رمز عبور را وارد کنید';
        if(password.length<8 & password!=""){
            passwordError.textContent = 'رمز نادرست است';

        }
        passwordError.style.display = 'block';
        isValid = false;
    }
     else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    // If both email and password are valid, allow form submission
    if (isValid) {
        alert('فرم با موفقیت ارسال شد');
        event.target.submit();
        window.location.href = '../homepage/index.html'; // Replace 'index.html' with the path to your home page

    }
});
