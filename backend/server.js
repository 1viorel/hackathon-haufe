const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(cors()); // Configure CORS first

app.use(bodyParser.json());

app.post('/submit-address', (req, res) => {
  console.log(req.body.address);
  const address = req.body.address; // Assuming the address is sent in the request body
  // Process the address as needed
  res.json({ message: 'Address data received successfully', receivedAddress: address });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
