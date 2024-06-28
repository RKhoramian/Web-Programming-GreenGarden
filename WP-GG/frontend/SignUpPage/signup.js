document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = '../homepage/index.html'; // Replace 'index.html' with the path to your home page
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const confirmpassword = document.getElementById('confirmpassword').value.trim();

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Get error message elements
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const phoneError = document.getElementById('phone-error');
    const confirmpasswordError = document.getElementById('confpassword-error');

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

    // Validate password
    if (password === "") {
        passwordError.textContent = 'لطفا رمز عبور را وارد کنید';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'رمز عبور باید حداقل ۸ کاراکتر باشد';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    // Validate phone
    if (phone === "") {
        phoneError.textContent = 'شماره موبایل الزامی است';
        phoneError.style.display = 'block';
        isValid = false;
    } else if (phone.length != 11) {
        phoneError.textContent = 'شماره موبایل باید ۱۱ رقمی باشد';
        phoneError.style.display = 'block';
        isValid = false;
    } else if (isNaN(phone)) {
        phoneError.textContent = 'شماره موبایل را صحیح وارد کنید';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.textContent = '';
        phoneError.style.display = 'none';
    }

    // Validate confirm password
    if (password !== confirmpassword) {
        confirmpasswordError.textContent = 'رمز عبور و تایید رمز عبور مطابقت ندارند';
        confirmpasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmpasswordError.textContent = '';
        confirmpasswordError.style.display = 'none';
    }

     /////////////

    // دریافت اطلاعات کاربر
    const username = document.getElementById('username').value;
   
    // ذخیره اطلاعات کاربر در localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);
    ///

    // If all validations pass, allow form submission
    if (isValid) {
        alert('ثبت نام موفق بود');
        event.target.submit();
        window.location.href = '../homepage/index.html'; // Replace 'index.html' with the path to your home page
    }


});

//////

