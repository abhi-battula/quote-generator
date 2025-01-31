// server.js   .
import express from 'express'; // Default import for express
import { json } from 'express'; // Named import for json() method


import cors from 'cors';

const app = express();
const PORT = 3000;

// Use CORS to allow cross-origin requests from Angular frontend
app.use(cors());
app.use(json());

// Hardcoded quotes array (for now)
const quotes = [
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
];

// Endpoint to fetch a random quote
app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// // ---------------- without using express--------------------------

// // Import the http module from Node.js
// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   // Check the request method and URL
//   if (req.method === 'GET' && req.url === '/api/quote') {
//     // If the URL is '/api/quote', send a random quote
//     const quotes = [
//       { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
//       { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
//       { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
//       { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
//       { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
//     ];

//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

//     // Set the response header to indicate it's JSON
//     res.writeHead(200, { 'Content-Type': 'application/json' });
    
//     // Send the quote as a JSON response
//     res.end(JSON.stringify(randomQuote));
//   } else {
//     // If the request is not '/api/quote', send a 404 Not Found error
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
//   }
// });

// // Listen on port 3000 for incoming requests
// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });




//------------------------------using API-------------------------------
// import express from 'express'; // Default import for express
// import { json } from 'express'; // Named import for json() method
// import cors from 'cors';
// import axios from 'axios'; // Import axios

// const app = express();
// const PORT = 3000;

// // Use CORS to allow cross-origin requests from Angular frontend
// app.use(cors());
// app.use(json());

// // Endpoint to fetch a random quote from an external API
// app.get('/api/quote', async (req, res) => {
//   try {
//     // Fetch random quote from the public Quotes API
//     const response = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random');
//     const randomQuote = response.data.data[0]; // Extracting the quote data
//     res.json(randomQuote); // Send the quote as JSON response
//     console.log("*********************");
//     console.log(randomQuote);
    
    
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//     res.status(500).json({ error: 'Unable to fetch quote' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
