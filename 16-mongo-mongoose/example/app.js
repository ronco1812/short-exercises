const express = require('express');
const mongoose = require('mongoose');
const app = new express();
const cors = require('cors');
const path = require("path");
const Accountant = require('./models/accountant');

mongoose.connect('mongodb://localhost:27017/accounting', {
  useNewUrlParser: true
})

app.get('/cities', function(req, res) {
  Accountant.find({}).distinct('city') // distinct values
    .then((cities) => {
      res.json(cities);
    })
});

app.get('/accountants-by-city/:city_name', function(req, res) {
  Accountant.find({city: req.params.city_name})
    .then((accountants) => {
      res.json(accountants);
    })
});

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
