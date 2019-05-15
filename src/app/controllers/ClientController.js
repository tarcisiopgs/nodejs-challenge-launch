const Client = require('../models/Client')

class ClientController {
  async index(req, res) {
    const clients = await Client.find()

    return res.json(clients)
  }

  async show(req, res) {
    const client = await Client.findById(req.params.id)

    return res.json(client)
  }

  async store(req, res) {
    const client = await Client.create({ ...req.body })

    return res.json(client)
  }

  async update(req, res) {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(client)
  }

  async destroy(req, res) {
    await Client.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new ClientController()
