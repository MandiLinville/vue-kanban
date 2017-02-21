let Cards = require('../models/card')

export default {
  listCards: {
    path: '/lists/:id/cards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Cards'
      Cards.find({listId: req.params.id})
        .then(cards => {
          res.send(handleResponse(action, cards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
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