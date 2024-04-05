// 1. Створення класу та об'єкта:

// Створіть клас Person з властивостями name та age.

// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const newPerson = new Person("John", 30);

// 2. Методи класу:

// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// 3. Наслідування:

// Створіть клас Student, який наслідує від класу Person.

// Додайте властивість studentId до класу Student.

// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  study() {
    console.log(`Student ${this.name} has an ID - ${this.studentID}`);
  }
}
