const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validasi input kosong
  if (usernameInput.value.trim() === '') {
    alert('Username harus diisi!');
    usernameInput.focus();
    return;
  }

  if (passwordInput.value.trim() === '') {
    alert('Password harus diisi!');
    passwordInput.focus();
    return;
  }

  // Jika input username dan password valid, submit form
  alert('Login berhasil!');
  window.location.href = 'index.html';
});
