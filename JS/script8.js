const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');
const errorMessage = document.getElementById('errorMessage');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Reset any previous error messages
  errorMessage.textContent = '';

  let isValid = true;

  // Validate first name (required)
  const firstName = document.getElementById('firstname').value.trim();
  if (!firstName) {
    errorMessage.textContent = 'Please enter your first name.';
    isValid = false;
  }

  // Validate email (required, valid format)
  const email = document.getElementById('email').value.trim();
  if (!email) {
    errorMessage.textContent = 'Please enter your email address.';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate password (required, minimum length)
  const password = document.getElementById('password').value.trim();
  if (!password) {
    errorMessage.textContent = 'Please enter a password.';
    isValid = false;
  } else if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long.';
    isValid = false;
  }

  // Validate password confirmation (matches password)
  const confirmPassword = document.getElementById('repassword').value.trim();
  if (!confirmPassword) {
    errorMessage.textContent = 'Please confirm your password.';
    isValid = false;
  } else if (confirmPassword !== password) {
    errorMessage.textContent = 'Passwords do not match.';
    isValid = false;
  }

  // Validate agree checkbox (required)
  const agreeCheckbox = document.getElementById('agree');
  if (!agreeCheckbox.checked) {
    errorMessage.textContent = 'Please agree to the terms and conditions.';
    isValid = false;
  }

  // Submit the form if validation passes
  if (isValid) {
    form.submit(); // Submit the form if all checks pass
  }
});
