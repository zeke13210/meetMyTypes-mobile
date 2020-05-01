import axios from 'axios';

function loginUser(email, password) {
  let token;
  if (email.length == 0) {
    console.log('email too short');
  }
  console.log('This email is: ' + email);
  console.log('The password is: ' + password);
  return new Promise(async function (resolve, reject) {
    axios.post('https://q1jp3exnqb.execute-api.us-east-1.amazonaws.com/dev/user/login', { email: email, password: password })
      .then(res => {
        console.log(res.data.token)
        token = res.data.token
        resolve(res.data.token)
      }).catch(err => {
        console.log("Error logging in", err)
        reject(err)
      })
  })}

export default loginUser;
