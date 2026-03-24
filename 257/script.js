// Registration Form Validation
function validateRegistration() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!name || !email || !password || !confirmPassword) {
    alert('Please fill all fields');
    return false;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email');
    return false;
  }

  if (password.length < 6) {
    alert('Password should be at least 6 characters');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }

  alert('Registration successful!');
  return true;
}
