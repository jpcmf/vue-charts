<template>
  <div id="app">
    <div class="chart">
      <visualisation />
    </div>
		<hr>
    <div class="chart">
      <chart-planet />
    </div>
		<hr>
    <div class="chart">
      <chart-api />
    </div>
    <hr>
    <div class="chart">
      <chart-weather />
    </div>
    <hr>
    <div class="chart">
      <!-- <chart-real-time /> -->
    </div>
  </div>
</template>

<script>
import Visualisation from './components/Visualisation.vue';
import ChartPlanet from './components/ChartPlanet.vue';
import ChartApi from './components/ChartApi.vue';
import ChartWeather from './components/ChartWeather.vue';
// import ChartRealTime from './components/ChartRealTime.vue';

export default {
  name: 'app',
  components: {
    Visualisation,
    ChartPlanet,
    ChartApi,
    ChartWeather,
    // ChartRealTime,
  },
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

.graph,
.chart {
  margin: 0 auto;
  max-width: 600px;
}
</style>
