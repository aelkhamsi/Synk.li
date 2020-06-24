
class User {
  constructor(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
  }

  test() {
    console.log("TEST");
  }
}



module.exports = { User };
