<template>
  <div id="app">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">
              <router-view/>
            </div>
          </md-card-header>
          <md-card-actions>
            <Increment />
            <Decrement />
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue'
  import Increment from './components/Increment.vue'
  import Decrement from './components/Decrement.vue'

  export default {
    name: 'app',
    components: {
      Counter,
      Increment,
      Decrement
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
  margin-top: 60px;
}
</style>
