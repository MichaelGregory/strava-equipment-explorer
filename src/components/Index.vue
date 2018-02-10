<template>
  <div>
    <md-toolbar class="md-primary" md-elevation="1">
      <h3
        class="md-title"
        style="flex: 1; align-content: flex-start"
      >
        <md-avatar class="md-med">
          <img :src="avatarUrl" alt="Avatar">
        </md-avatar>
        {{name}}
      </h3>
      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <EquipmentList/>
        <!-- <DistanceChart/> -->
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { logIn } from '../data/authentication'
  import { loadState, store } from '../store/index'
  import EquipmentList from './EquipmentList.vue'
  import DistanceChart from './DistanceChart.vue'

  export default {
    components: {
      DistanceChart,
      EquipmentList
    },
    computed: mapState({
      avatarUrl: function (state) {
        let {athlete} = state
        if (!athlete) {
          return ''
        }
        return athlete.profile_medium
      },
      name: function (state) {
        let {athlete} = state
        if (!athlete) {
          return ''
        }
        return `${athlete.firstname} ${athlete.lastname}`
      }
    }),
    created () {
      loadState(store)
      debugger
      if (this.$store.state.authentication.access_token) {
        return
      }
      logIn()
    }
  }
</script>

<style>
  .md-toolbar {
    margin-bottom: 24px;
  }

  .md-title {
    text-align: initial
  }
</style>