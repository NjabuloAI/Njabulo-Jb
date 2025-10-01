class Njabulo {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  respond(input) {
    console.log(`You said: ${input}`);
    // Add logic to generate a response based on user input
  }
}

module.exports = Njabulo;