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


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);