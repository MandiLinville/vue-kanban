<template>

  <div> 
    <form @subit.prevent="createBoard">
    <input placeholder="TITLE">
    <textarea type="text" placeholder="DESCRIPTION">
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
        name: 'Testing board creation',
        description: 'blarg'
      })
     
     
  
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
  
  ul {
  
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
</style>