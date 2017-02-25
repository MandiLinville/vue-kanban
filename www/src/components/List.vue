<template>
<div>
 
    <form @submit.prevent="createCard">
      <input placeholder="TITLE" v-model="cardTitle">
      
      <button @click="createCard">Add card</button>
    </form>
    <ul>
      <li> 
          <card></card> 
        </li>
    </ul>

  </div>
</template>

<script>
import card from './Card'

    export default {
    data() {
      return {
        cardInfo: ''
      }
    },
    name: 'list',
    // mounted() {
    //   this.$root.$data.store.actions.getBoard(this.$route.params.id)
    // },
    // computed: {
    //   board() {
    //     return this.$root.$data.store.state.activeBoard
    //   },
    //   lists() {
    //     return this.$root.$data.store.state.activeLists
    //   }
    // },
    methods: {
      createCard: function () {
        this.$root.$data.store.actions.createCard({
          name: this.cardTitle,
          listId: this.$route.params.id
        
        }, this.$route.params.id)
        this.showListForm = false
        this.cardTitle = ''
      },
      removeCard(card) {
        this.$root.$data.store.actions.removeCard(card, this.$route.params.id)
      }
    }
  }

</script>



<style>

    
</style>