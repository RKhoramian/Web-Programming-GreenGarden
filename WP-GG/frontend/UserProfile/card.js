window.addEventListener('load', function() {
    loadProfile();

    document.getElementById('editUsername').addEventListener('click', function() {
        toggleEdit('profileUsername', 'usernameInput');
    });
    document.getElementById('editEmail').addEventListener('click', function() {
        toggleEdit('profileEmail', 'emailInput');
    });
    document.getElementById('editPhone').addEventListener('click', function() {
        toggleEdit('profilePhone', 'phoneInput');
    });
    document.getElementById('editPassword').addEventListener('click', function() {
        toggleEdit('profilePassword', 'passwordInput');
    });

    document.getElementById('saveButton').addEventListener('click', function() {
        saveEdits();
    });
});

function loadProfile() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const password = localStorage.getItem('password');

    if (username && email && phone && password) {
        document.getElementById('profileUsername').textContent = username;
        document.getElementById('profileEmail').textContent = email;
        document.getElementById('profilePhone').textContent = phone;
        document.getElementById('profilePassword').textContent = '********';
    } else {
        window.location.href = '../HomePage/index.html';
    }
}

function toggleEdit(spanId, inputId) {
    const span = document.getElementById(spanId);
    const input = document.getElementById(inputId);
    const saveButton = document.getElementById('saveButton');

    if (input.classList.contains('hidden')) {
        input.value = span.textContent === '********' ? '' : span.textContent;
        input.classList.remove('hidden');
        span.classList.add('hidden');
        saveButton.classList.remove('hidden');
    } else {
        span.textContent = input.value;
        input.classList.add('hidden');
        span.classList.remove('hidden');
    }
}

function saveEdits() {
    const username = document.getElementById('usernameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    const password = document.getElementById('passwordInput').value;

    if (username) localStorage.setItem('username', username);
    if (email) localStorage.setItem('email', email);
    if (phone) localStorage.setItem('phone', phone);
    if (password) localStorage.setItem('password', password);

    loadProfile();

    document.getElementById('usernameInput').classList.add('hidden');
    document.getElementById('emailInput').classList.add('hidden');
    document.getElementById('phoneInput').classList.add('hidden');
    document.getElementById('passwordInput').classList.add('hidden');

    document.getElementById('profileUsername').classList.remove('hidden');
    document.getElementById('profileEmail').classList.remove('hidden');
    document.getElementById('profilePhone').classList.remove('hidden');
    document.getElementById('profilePassword').classList.remove('hidden');

    document.getElementById('saveButton').classList.add('hidden');
}


///

  // دکمه اسکرول به بالا
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // نمایش یا مخفی کردن دکمه براساس اسکرول
  window.onscroll = function() {
      toggleScrollTopBtn();
  };

  function toggleScrollTopBtn() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          scrollTopBtn.style.display = "block";
          console.log("kk");
      } else {
        console.log("ll");
          scrollTopBtn.style.display = "none";
      }
  }

  // اسکرول به بالای صفحه با کلیک روی دکمه
  scrollTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
