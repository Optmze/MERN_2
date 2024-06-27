// Get the login form and add an event listener
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);

// Function to handle the login form submission
function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login logic here (e.g., send the values to a server)
  console.log('Username:', username);
  console.log('Password:', password);

  // Reset the form (for demonstration purposes, remove in production)
  loginForm.reset();
}

// Get the Facebook and Google login buttons and add event listeners
const facebookLoginBtn = document.getElementById('facebook-login');
const googleLoginBtn = document.getElementById('google-login');

facebookLoginBtn.addEventListener('click', handleFacebookLogin);
googleLoginBtn.addEventListener('click', handleGoogleLogin);

// Functions to handle the social media login buttons
function handleFacebookLogin() {
  // Implement Facebook login logic here
  console.log('Facebook login clicked');
}

function handleGoogleLogin() {
  // Implement Google login logic here
  console.log('Google login clicked');
}

// Get the "Forgot password" link and add an event listener
const forgotPasswordLink = document.getElementById('forgot-password');
forgotPasswordLink.addEventListener('click', handleForgotPassword);

// Function to handle the "Forgot password" link click
function handleForgotPassword() {
  // Implement the "Forgot password" logic here
  console.log('Forgot password link clicked');
}

// Get the "Sign up" link and add an event listener
const signUpLink = document.getElementById('sign-up');
signUpLink.addEventListener('click', handleSignUp);

// Function to handle the "Sign up" link click
function handleSignUp() {
  // Implement the "Sign up" logic here
  console.log('Sign up link clicked');
}
