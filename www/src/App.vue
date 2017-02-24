<template>
  <div id="app">
    <div>
   <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">HOME</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/login">LOGIN </router-link></li>
        <li><router-link to="/register"> REGISTER</router-link></li>
        
      </ul>
    
    </div>
  </nav>
 </div>
   
   <error></error>
    <router-view></router-view>
  </div>
</template>

<script>
import Error from './components/Error'
export default {
  name: 'app',
  components:{
    Error
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.nav-wrapper{
  position: fixed;
}
</style>
