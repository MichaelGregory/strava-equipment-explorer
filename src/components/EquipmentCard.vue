<template>
  <md-card>
    <md-card-header>
      <div class="md-title">{{equipment.name}}</div>
      <div class="md-subhead">{{equipment.distance | metersToMiles}} miles</div>
    </md-card-header>
    <md-card-content>
      <DistanceChart
        :data="chartData"
        :options="chartOptions
      "/>
    </md-card-content>
    <md-card-actions>
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions>
  </md-card>
</template>
<script>
  import DistanceChart from './DistanceChart.vue'

  export default {
    components: {
      DistanceChart
    },
    props: ['equipment', 'distanceTotal'],
    computed: {
      chartData: (self) => {
        let {name, distance} = self.equipment
        let otherDistance = self.distanceTotal - distance
        return {
          // labels: ['a', 'b'],
          datasets: [
            {
              label: [name, 'that'],
              backgroundColor: ['#f87979', '#e8e8e8'],
              data: [distance, otherDistance],
              borderWidth: 1
            }
          ]
        }
      },
      chartOptions: () => ({
        tooltips: {
          enabled: false
        }
      })
    }
  }
</script>

<style>
  .md-card-header {
    height: 116px;
  }

  .small {
    max-width: 600px;
    margin:  24px;
  }
</style>