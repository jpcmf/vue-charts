<template>
  <kendo-chart
    :title-text="'Realtime Stockchart'"
    :legend-position="'bottom'"
    :series="series"
    :category-axis-categories="categories"
    :value-axis="axis"
    :theme="'sass'">
  </kendo-chart>
</template>

<script>
import io from "socket.io-client";
var socket = io.connect("http://localhost:4000");

export default {
  name: 'ChartRealTime',
  data() {
    return {
      series:[],
      categories: ["Product1", "Product2", "Product3", "Product4"],
      axis: [
        {
          name: "stockrange",
          labels: {
              format: "{0}%"
          }
        },
      ],
    }
  },
  mounted() {
    this.getSeriesData();
  },
  created() {
    this.getRealtimeData();
  },
  methods: {
    getSeriesData(fetchedData) {
      this.series = [
        {
          name: 'Microsoft',
          data: [this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData)],
          axis: "stockrange"
        },
        {
          name: 'Google',
          data: [this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData)],
          axis: "stockrange"
        },
        {
          name: 'Sealuse',
          data: [this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData),
                this.getRandomChartValues(fetchedData)],
          axis: "stockrange"
        }
      ]
    },
    getRealtimeData() {
      socket.on("newdata", fetchedData => {
        this.getSeriesData(fetchedData)
      })
    },
    getRandomChartValues(number) {
      return Math.floor(Math.random() * number) + 10;
    }
  }
}
</script>

<style scoped></style>
