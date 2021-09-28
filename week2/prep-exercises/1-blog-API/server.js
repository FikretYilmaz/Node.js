const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
app.get('/', function (req, res) {
  res.send('Hello World');
});

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

app.get('/posts/', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const camelizeTitle = camelize(title);
  fs.writeFileSync(camelizeTitle, content);
  res.end('ok');
});

app.post('/posts/', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const camelizeTitle = camelize(title);
  fs.writeFileSync(camelizeTitle, content);
  res.end('ok');
});

app.put('/posts/:title', (req, res) => {
  const titleParam = req.params.title;
  const title = req.body.title;
  const content = req.body.content;
  if (fs.existsSync(camelize(titleParam))) {
    fs.writeFileSync(camelize(title), content);
    res.end('ok');
  } else {
    throw new Error("The title is doesn't exist");
  }
});

app.delete('/posts/:title', (req, res) => {
  const titleParam = req.params.title;
  const title = req.body;
  if (fs.existsSync(camelize(titleParam))) {
    fs.unlinkSync(camelize(titleParam));
    res.end('ok');
  } else {
    throw new Error("The title is doesn't exist");
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT);
