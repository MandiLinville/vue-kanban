import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created: { type: Number, default: Date.now() },
    	// Relations
  dashboardId: {type: ObjectId, ref: models.dashboard, required: true},
  lists: {type: ObjectId, ref: 'List'}
});


module.exports = mongoose.model(models.board.name, schema);