import { models } from '../config/constants'
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let dasboardSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    created: { type: Number, default: Date.now()},
    // Relations
    boards: [{ type: ObjectId, ref: 'Board' }]
})

module.exports = mongoose.model(models.dashboardModel, schema);