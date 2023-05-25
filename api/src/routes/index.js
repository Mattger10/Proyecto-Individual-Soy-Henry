const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const videoGameRouter = require('./videoGameRouter');
const genresRouter = require('./genresRouter');
const platformsRouter = require('./platformsRouter');
// const deleteGame = require ('../controllers/deleteGame');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videoGameRouter);
router.use('/genres', genresRouter);
router.use('/platforms', platformsRouter);
// router.delete("/videogames/:id", deleteGame);


module.exports = router;
