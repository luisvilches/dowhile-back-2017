const express = require('express');
const router = express.Router();
const controller = require('.././controllers');
const auth = require('../bin/controllers/auth');

module.exports = router;


/////////////// Routes  /////////////////////////////

router.get('/', controller.main.index)
router.post('/login', auth.auth)

//users

router.get('/users', controller.users.users)
router.post('/users/create', controller.users.createuser)
router.get('/user/:id', controller.users.userid)
router.delete('/user/:id', controller.users.delete)
router.put('/user/update/:id',controller.users.update)



//rutas para banner
router.get('/banner', controller.banner.bannerFind)
router.get('/banner/id/:id', controller.banner.bannerFindById)
router.post('/banner', controller.banner.bannerCreate)
router.put('/banner/:id', controller.banner.bannerUpdate)
router.delete('/banner/:id', controller.banner.bannerDelete)



//rutas para servicios
router.get('/servicios', controller.servicios.serviciosFind)
router.get('/servicios/id/:id', controller.servicios.serviciosFindById)
router.post('/servicios', controller.servicios.serviciosCreate)
router.put('/servicios/:id', controller.servicios.serviciosUpdate)
router.delete('/servicios/:id', controller.servicios.serviciosDelete)



//rutas para clientesBanner
router.get('/clientesBanner', controller.clientesBanner.clientesBannerFind)
router.get('/clientesBanner/id/:id', controller.clientesBanner.clientesBannerFindById)
router.post('/clientesBanner', controller.clientesBanner.clientesBannerCreate)
router.put('/clientesBanner/:id', controller.clientesBanner.clientesBannerUpdate)
router.delete('/clientesBanner/:id', controller.clientesBanner.clientesBannerDelete)

