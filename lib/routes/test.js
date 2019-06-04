const { Router } = require('express');

module.exports = Router()
  .get('/', (req, res) => {
    console.log('accessed get route')
  })