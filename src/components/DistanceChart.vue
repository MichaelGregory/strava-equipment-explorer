<template>
  <div class="small">
    <pie-chart
      :data="data"
      :options="options"
    />
  </div>
</template>

<script>
  import PieChart from './PieChart.js'

  export default {
    components: {
      PieChart
    },
    props: ['data', 'options']
  }
</script>
