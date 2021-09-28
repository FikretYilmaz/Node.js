/**
 * 2. Authentication
 *
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
import fetch from 'node-fetch';
import json from 'express';
const app = json();

app.get('/', (req, res) => {
  async function printBooks() {
    try {
      const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
      const authKey = 'YWRtaW46aHZnWDhLbFZFYQ==';
      const response = await fetch(url, {
        headers: {
          Authorization: 'Basic YWRtaW46aHZnWDhLbFZFYQ==',
        },
      });
      const data = await response.json();
      console.log(data);
      res.send(data);
    } catch (err) {
      console.error(err);
    }
  }
  printBooks();
});

app.listen(3000);

// data.forEach((element) => {
//   `<ul>
//   <li>Title:${element.title}</li>
//   <li>Author:${element.author}</li>
//   <li>Id:${element.id}</li>
// </ul>`;
// }),
