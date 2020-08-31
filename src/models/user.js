
class User {
  constructor(username, email, hash) {
    this.username = username
    this.email = email
    this.hash = hash
  }

  test() {
    console.log("TEST");
  }
}



module.exports = { User };
