const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received feedback from ${name} (${email}): ${message}`);
  res.json({ message: 'Thank you for your feedback!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
