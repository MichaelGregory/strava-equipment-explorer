<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <md-button class="md-icon-button md-raised md-primary" v-on:click="decrement()">
          <md-icon>remove</md-icon>
        </md-button>
      </div>
  </div>
  </div>
</template>

<script>
  import store from '../store/index'
  import * as type from '../store/types'

  export default {
    methods: {
      decrement () {
        store.dispatch({
          type: type.Decrement,
          amount: 1
        })
      }
    }
  }
</script>