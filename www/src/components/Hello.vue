<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>What is a Kanban?</h2>
    <ul>
      <li><a href="https://trello.com" target="_blank">Trello</a></li>
      <li><a href="https://help.github.com/articles/about-projects/" target="_blank">Github Projects</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'welcome to trello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
