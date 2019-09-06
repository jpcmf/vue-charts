<template>
	<div class="chart">
		<canvas id="planet-chart"></canvas>
	</div>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from '../PlanetChart.js';

export default {
	components: {

	},
	data() {
		return {
      planetChartData: planetChartData,
		}
	},
	mounted() {
		this.createChart('planet-chart', this.planetChartData);
	},
	methods: {
		createChart(chartId, chartData) {
      myChart;
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
	}
}
</script>

<style>

</style>
