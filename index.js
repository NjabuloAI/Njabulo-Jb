const readline = require('readline');

class NjabuloJbAI {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async start() {
    console.log("Hello, I'm Njabulo Jb AI. What's on your mind?");
    this.rl.setPrompt('You: ');
    this.rl.prompt();

    this.rl.on('line', (input) => {
      const response = this.processInput(input);
      console.log(`Njabulo Jb AI: ${response}`);
      this.rl.prompt();
    });
  }

  processInput(input) {
    // Add your logic here to process user input
    // For now, let's just echo the input
    return `You said: ${input}`;
  }
}

const bot = new NjabuloJbAI();
bot.start();