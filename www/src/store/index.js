import axios from 'axios'

let api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    withCredentials: true,
    timeout: 2000

})

api.post('http://localhost:3000/login', {
   
    email: 'test@gmail.com',
    password: '1234'
})

//register all data here
let state = {
    boards: [{name: 'this is crap'}],
    activeBoard: {},
    error: {}
}




let handleError = (err) => {
    state.error = err
}



export default {
    //all data lives in the state
    state,
    //actions are responsible for managing all async requests
    actions: {
        getBoards() {
            api('boards').then(res => {
                state.boards = res.data.data
            }).catch(handleError)
        },
        getBoard(id) {
            api('boards/' + id)
                .then(res => {
                    state.activeBoard = res.data.data
                })
                .catch(handleError)
        },
        createBoard(board) {
            api.post('boards/', board)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },
        removeBoard(board) {
            api.delete('boards/' + board._id)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        }

    }
}