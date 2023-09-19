const express = require('express');
const { favourites } = require('../controllers/favController');
const Favrouter = express.Router()

Favrouter.post("/favourites", favourites);

module.exports = {Favrouter}