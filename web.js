const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Njabulo Jb AI!');
});

app.post('/chat', (req, res) => {
  const userInput = req.body.input;
  // Process user input and generate response
  const response = `You said: ${userInput}`;
  res.send({ response });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});