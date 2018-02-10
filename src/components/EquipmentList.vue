<template>
  <div class="content">
    <p>
      <span class="md-title">
        {{ bikeCount }} bikes
      </span>
      <span class="md-subheading">
        {{bikeDistance | metersToMiles}} miles
      </span>
    </p>
    <div class="md-layout md-gutter">
      <div class="md-layout-item" >
        <EquipmentCard
          v-for="bike in bikes" v-bind:key="bike.id"
          :equipment="bike"
          :distance-total="bikeDistance"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import store from '../store/index'
import { types } from '../store/modules/athlete'
import { fetchAthlete } from '../data/athlete'
import EquipmentCard from './EquipmentCard.vue'
import DistanceChart from './DistanceChart.vue'

export default {
  components: {
    EquipmentCard,
    DistanceChart
  },
  computed: {
    ...mapGetters('athlete', [
      'bikeCount',
      'bikeDistance'
    ]),
    bikes () {
      let { athlete } = this.$store.state
      if (!athlete) {
        return []
      }
      return athlete.bikes
    }
  },
  methods: {
    fetchAthlete () {
      let { athlete, authentication } = this.$store.state
      if (athlete && (athlete.bikes || athlete.shoes)) {
        return
      }
      debugger
      if (!(authentication && authentication.access_token)) {
        return
      }
      fetchAthlete(authentication.access_token)
        .then(response => {
          let athlete = response.data
          // store.dispatch({
          //   type: types.SetAthlete,
          //   athlete
          // })
          debugger
          store.dispatch(`athlete/${types.SetAthlete}`, athlete, {root: true})
        })
    }
  },
  created () {
    this.fetchAthlete()
  }
}
</script>
