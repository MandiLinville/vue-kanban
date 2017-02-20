import { models } from '../config/constants'
let mongoose = require('mongoose')
// let Schema = mongoose.Schema
let ObjectId = mongoose.Schema.ObjectId

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    created: { type: Number, default: Date.now()},
    // Relations
    boards: [{ type: ObjectId, ref: 'Board' }]
})

module.exports = mongoose.model(models.dashboard.name, schema);