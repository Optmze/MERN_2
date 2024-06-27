const form = document.getElementById('contact-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const websiteField = document.getElementById('website');
const messageField = document.getElementById('message');
const requiredMessages = document.querySelectorAll('.required-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  if (!nameField.value) {
    showRequiredMessage(nameField);
    isValid = false;
  } else {
    hideRequiredMessage(nameField);
  }

  if (!emailField.value || !isValidEmail(emailField.value)) {
    showRequiredMessage(emailField);
    isValid = false;
  } else {
    hideRequiredMessage(emailField);
  }

  if (!websiteField.value || !isValidURL(websiteField.value)) {
    showRequiredMessage(websiteField);
    isValid = false;
  } else {
    hideRequiredMessage(websiteField);
  }

  if (!messageField.value) {
    showRequiredMessage(messageField);
    isValid = false;
  } else {
    hideRequiredMessage(messageField);
  }

  if (isValid) {
    form.submit();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function showRequiredMessage(field) {
  field.style.borderColor = '#e74c3c';
  field.nextElementSibling.style.display = 'block';
}

function hideRequiredMessage(field) {
  field.style.borderColor = '#ddd';
  field.nextElementSibling.style.display = 'none';
}