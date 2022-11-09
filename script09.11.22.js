class Users {
  firstName;
  lastName;
  city;
  borrowedBook;
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.borrowedBook = [];
  }
  borrowedBooks(namebook) {
    this.borrowedBook.push(namebook);
  }
}
let user1 = new Users(`hila`, `faingold`, `Qiryat_shemona`);
let user2 = new Users(`lior`, `faingold`, `Lod`);
let user3 = new Users(`shiran`, `faingold`, `Tel_aviv`);

user1.borrowedBooks(" The lord of the ring ");
user1.borrowedBooks(" Harry poter ");
user1.borrowedBooks(" Spiderman ");
user1.borrowedBooks(" Avengers ");
user2.borrowedBooks(" The walking dead ");
user2.borrowedBooks(" visca BARCA ");
user3.borrowedBooks(" Messi ");

class BookReport {
  constructor(name) {
    this.name = name;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.firstName +
          " " +
          element.lastName +
          " from " +
          element.city +
          " borrows this books: " +
          element.borrowedBook
      );
    });
  }
}
let a = new BookReport("weeklyReport");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);

a.printReport();
