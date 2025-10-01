class NjabuloJbAIService {
  constructor() {
    this.responses = {
      greetings: ["Hello!", "Hi there!", "Hey!"],
      farewells: ["Goodbye!", "See you later!", "Bye!"],
      defaultResponse: "I'm not sure I understand. Can you please rephrase?"
    };
  }

  getResponse(input) {
    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
      return this.getRandomResponse(this.responses.greetings);
    } else if (lowerCaseInput.includes("bye") || lowerCaseInput.includes("goodbye")) {
      return this.getRandomResponse(this.responses.farewells);
    } else {
      return this.responses.defaultResponse;
    }
  }

  getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

module.exports = NjabuloJbAIService;