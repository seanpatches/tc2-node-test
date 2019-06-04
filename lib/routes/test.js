const { Router } = require('express');

module.export = Router()
  .get('/', (req, res) => {
    console.log('accessed get route')
  })