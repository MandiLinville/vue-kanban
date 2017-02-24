<template>
   <div class="card"> 
     <ul>
         

         </li>
     </ul>
     Active Board: {{board.name}}
   </div>
 </template>
 
 <script>
import list from './List'

 export default {
   name: 'board',
   mounted(){
     this.$root.$data.store.actions.getBoard(this.$route.params.id)
   },
   computed:{
     board(){
       return this.$root.$data.store.state.activeBoard
     }
   },
   methods:{
       createList(){
           this.$root.$data.store.state.lists
       }
   }
 }
 </script>
 
 <style scoped>
 
 </style>