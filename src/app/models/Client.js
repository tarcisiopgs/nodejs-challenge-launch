const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({ }, { strict: false })

module.exports = mongoose.model('Client', ClientSchema)
