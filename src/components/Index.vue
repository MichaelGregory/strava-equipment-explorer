<template>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">
              <Counter/>
            </div>
          </md-card-header>
          <md-card-actions>
            <Increment />
            <Decrement />
          </md-card-actions>
        </md-card>
      </div>
    </div>
</template>

<script>
  import { logIn } from '../data/authentication'
  import { loadState, store } from '../store/index'

  import Counter from './Counter.vue'
  import Increment from './Increment.vue'
  import Decrement from './Decrement.vue'

  export default {
    components: {
      Counter,
      Increment,
      Decrement
    },
    mounted () {
      loadState(store)
      if (this.$store.state.athlete) {
        return
      }
      logIn()
    }
  }
</script>
