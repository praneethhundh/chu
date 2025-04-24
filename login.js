// login.js

class User {
  validate(username, password) {
    if (username === password) {
      return "Login Successful";
    } else {
      return "Login Failed";
    }
  }
}
const user = new User();
console.log(user.validate("admin", "admin")); 
console.log(user.validate("admin", "1234"));  

module.exports = User;