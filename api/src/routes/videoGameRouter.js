const { Router } = require('express');

const { getGamesHandler } = require('../handlers/videoGameHandler');
const { getGameById } = require('../handlers/videoGameIdHandler');
const { createGameHandler } = require('../handlers/createGameHandler');
const { deleteGame } = require ('../controllers/deleteGame');

const videoGameRouter = Router();

videoGameRouter.get('/', getGamesHandler);
videoGameRouter.get('/:id', getGameById);
videoGameRouter.post('/', createGameHandler);
videoGameRouter.delete("/videogames/:id", deleteGame);

module.exports = videoGameRouter;