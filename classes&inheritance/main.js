'use strict';

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static countUsers() {
    console.log('there are 50 users');
  }
  register() {
    console.log(this.username + ' is now registered');
  }
}

// let bob = new user('bob', 'bob@email', 'bob@4251');
// bob.register();
// user.countUsers();

class member extends User {
  constructor(username, email, password, memberPackage) {
    super(username, email, password);
    this.package = memberPackage;
  }
  getPackage() {
    console.log(
      this.username + ' is subscribed to the ' + this.package + ' package '
    );
  }
}
let mike = new member('mike', 'mike@email.com', 'mike@4251', 'standard');

// mike.getPackage();
mike.register();
