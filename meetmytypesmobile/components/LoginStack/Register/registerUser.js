import axios from 'axios';

function registerUser(registrationInfo) {
  console.log('registration: ', registrationInfo);

  if (registrationInfo.email.length == 0) {
    console.log('email too short');
  }
  
  return new Promise(async function (resolve, reject) {
    axios.post('https://q1jp3exnqb.execute-api.us-east-1.amazonaws.com/dev/user/register', registrationInfo)
      .then(res => {
        console.log("this is response: ", res.data.errorMessage)
        //token = res.data.token
        resolve(res)
      }).catch(err => {
        console.log("Error logging in", err.message)
        reject(err)
      })
  })}

export default registerUser;
