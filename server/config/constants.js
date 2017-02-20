const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  board: {
    name: 'Board',
    endpoint: 'boards'
  },
  dashboard: {
    name: 'Dashboard',
    endpoint: 'dashboards'
  },
  list: {
    name: 'List',
    endpoint: 'lists'
  },
  card: {
    name: 'Card',
    endpoint: 'cards'
  },
  comment: {
    name: 'Comment',
    endpoint: 'comments'
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}
export {
  actions,
  models
}