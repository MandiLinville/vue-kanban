<template>

  <div> 
    <form @submit.prevent="createBoard">
    <input placeholder="TITLE" v-model="boardTitle">
    <input type="text" placeholder="DESCRIPTION" v-model="boardDescription">
    <button @click="createBoard">Add Board</button>
    </form>
  
    <ul>
      <li v-for="board in boards"><router-link class="card" :to="'/boards/'+board._id">{{board.name}}</router-link><span @click="removeBoard(board)">x</span></li>
    </ul>
    
  </div>

</template>

<script>
export default {
  name: 'boards',
  data(){
    return {
    boardTitle: '',
    boardDescription: ''
    }
  },
  mounted(){
    this.$root.$data.store.actions.getBoards()
  },
  computed:{
    boards(){
      return this.$root.$data.store.state.boards
    }
  },
  methods:{
    createBoard(){
      this.$root.$data.store.actions.createBoard({
        name: this.boardTitle,
        description: this.boardDescription
        
      })
      this.boardTitle = '',
      this.boardDescription = ''
    
     
  
    },
    removeBoard(board){
      this.$root.$data.store.actions.removeBoard(board)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  

  
  li {
    display: inline-block;
    padding: 20px;
  }
  
  a {
    color: #42b983;
  }
  
</style>