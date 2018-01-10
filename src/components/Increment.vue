<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <md-button class="md-icon-button md-raised md-primary" v-on:click="increment()">
          <md-icon>add</md-icon>
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
      increment () {
        store.dispatch({
          type: type.Increment,
          amount: 1
        })
      }
    }
  }
</script>