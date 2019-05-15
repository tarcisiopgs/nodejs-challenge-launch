const express = require('express')

const routes = express.Router()

const controllers = require('./app/controllers')

/**
 * Clients
 * @type {Router}
 */
routes.get('/clients', controllers.ClientController.index)
routes.get('/clients/:id', controllers.ClientController.show)
routes.post('/clients', controllers.ClientController.store)
routes.put('/clients/:id', controllers.ClientController.update)
routes.delete('/clients/:id', controllers.ClientController.destroy)

module.exports = routes
