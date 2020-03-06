function loginUser(email, password) {
  if (email.length == 0) {
    console.log('email too short');
  }
  console.log('This email is: ' + email);
  console.log('The password is: ' + password);

  return 'login successful';
}

export default loginUser;
