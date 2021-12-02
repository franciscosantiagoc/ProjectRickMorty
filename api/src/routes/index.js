const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const character = require('./character.js')
const router = Router()


router.use('/character',character);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router
