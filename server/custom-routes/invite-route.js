let Users = require('../models.user')

export default {
    inviteToBoard: {
        path: '/invite',
        reqType: 'post',
        method(req, res, next){
            let action = "Invite your friends"
        }
    }
}