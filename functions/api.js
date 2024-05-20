const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let todos = [
  {
    title: 'This is a sample todo'
  }
];

router.get('/', (req, res) => {
  res.send('Edge function running successfully');
});

router.get('/todos', (req, res) => {
  res.send({
    data: todos
  }).status(200)
})

app.use('/api', router);
module.exports.handler = serverless(app);