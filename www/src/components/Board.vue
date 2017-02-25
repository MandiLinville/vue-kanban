<template>
  <div>
    Active Board: {{board.name}}
    <form @submit.prevent="createList">
      <input placeholder="TITLE" v-model="listTitle">
      <input type="text" placeholder="DESCRIPTION" v-model="listDescription">
      <button @click="createList">Add List</button>
    </form>


    <form @submit.prevent="createCard">
      <input placeholder="TITLE" v-model="cardTitle">
      <button>Add card</button>
    </form>


    <ul>
      <li class="card" v-for="list in lists"><span @click="setActiveList(list)">{{list.name}}</span>

        <div v-for="card in cards"><div v-if="card.listId == list._id" >{{ card.name}}</div></div><span @click="removeList(list)">x</span>
        </li>
    </ul>

  </div>
</template>

<script>
  import list from './List'
  import card from './Card'
  
  export default {
    data() {
      return {
        listTitle: '',
        listDescription: '',
        cardTitle: '',
        activeListId: ''
      }
    },
    name: 'board',
    mounted() {
      this.$root.$data.store.actions.getBoard(this.$route.params.id)
    },
    computed: {
      board() {
        return this.$root.$data.store.state.activeBoard
      },
      lists() {
        return this.$root.$data.store.state.activeLists
      },
      cards(){
        return this.$root.$data.store.state.activeCards
      }
    },
    methods: {
      createList: function () {
        this.$root.$data.store.actions.createList({
          name: this.listTitle,
          description: this.listDescription,
          boardId: this.$route.params.id
        }, this.$route.params.id)
        this.showListForm = false
        this.listTitle = ''
        this.listDescription = ''
      },
      removeList(list) {
        this.$root.$data.store.actions.removeList(list, this.$route.params.id)
      },
        createCard: function () {
        this.$root.$data.store.actions.createCard({
          name: this.cardTitle,
          listId: this.activeListId
        }, this.$route.params.id)
        this.showListForm = false
        this.cardTitle = ''
  
      },
      removeCard(card) {
        this.$root.$data.store.actions.removeCard(card, this.$route.params.id)
      },
      setActiveList: function(list){
        this.activeListId = list._id
        Materialize.toast('selected list ' + list.name, 1000)
      }
    }
  }
</script>

<style scoped>
li {
  display: inline-block;
  padding: 20px;
}
</style>