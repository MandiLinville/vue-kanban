let Lists = require('../models/list')
let Boards = require('../models/board')
let Users = require('../models/user')
let Cards = require('../models/card')

export default {
  boardLists: {
    path: '/boards/:id/lists',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Lists'
      Lists.find({boardId: req.params.id})
        .then(lists => {
          res.send(handleResponse(action, lists))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  boardCards: {
    path: '/boards/:id/cards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Cards'
      Cards.find({boardId: req.params.id})
        .then(cards => {
          res.send(handleResponse(action, cards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

  

    inviteToBoard: {
        path: '/boards/:boardId/invite',
        reqType: 'post',
        method(req, res, next){
            let action = "Invite your friends"
             Users.findOne({email: req.body.email})
        .then(user => {
             Boards.findById(req.params.boardId)
             .then(board => {
                 board.collaborators.push(user._id)
                 board.save()
                 .then(()=>{
          res.send(handleResponse(action, board))

                 })
             })
        }).catch(error => {
          res.send(handleResponse(action, null, error))
        })
    }
  },
  inviteToBoard: {
        path: '/boards/:boardId/invite',
        reqType: 'post',
        method(req, res, next){
            let action = "Invite your friends"
             Users.findOne({email: req.body.email})
        .then(user => {
             Boards.findById(req.params.boardId)
             .then(board => {
                 board.collaborators.push(user._id)
                 board.save()
                 .then(()=>{
          res.send(handleResponse(action, board))

                 })
             })
        }).catch(error => {
          res.send(handleResponse(action, null, error))
        })
    }
  }
        }




function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }