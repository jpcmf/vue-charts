<template>
  <div>
  <form v-on:submit.prevent="getFormData">
    <label for="">Buscar cidade:</label>
    <input type="text" v-model="city">
    <button type="submit">Send</button>
  </form>
  <div v-show="loading">
    Loading...
  </div>
  <hr>
  <div v-show="chart != null"></div>
    <weather-chart :chart-data="datacollection"></weather-chart>
  </div>
</template>
<script>
import axios from 'axios';
import WeatherChart from '../WeatherChart.js'

export default {
  name: 'ChartWeahter',
	components: {
		WeatherChart,
	},
	data() {
		return {
      datacollection: null,
      chart: null,
      city: '',
			xdates: [],
			xmin: [],
      xmax: [],
      loading: false,
      errored: false,
		}
	},
	mounted() {
		this.getData();
	},
	methods: {

    getFormData() {
      this.loading = true;

      // if (this.chart == null) {
      //   this.chart.destroy();
      // }

      axios.get('https://api.hgbrasil.com/weather?', {
        params: {
          format: 'json-cors',
          key: '6e1755b2',
          city_name: this.city,
        }
      })
      .then(response => {
        const data = response.data.results.forecast;

        data.forEach((row) => {
          const date = row.date;
          const min = row.min;
          const max = row.max;
          this.xdates.push(date);
          this.xmin.push(min);
          this.xmax.push(max);
        });

        this.datacollection = {
          labels: this.xdates,
          datasets: [
            {
              label: 'Mínima',
              backgroundColor: 'transparent',
              borderColor: "blue",
              data: this.xmin,
            },
            {
              label: 'Máxima',
              // backgroundColor: "purple",
              borderColor: "red",
              data: this.xmax,
            }
          ]
        }

      })
      .catch(() => {
        // console.log(error);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
    },

		async getData() {
      const { data: result } = await axios
				.get('https://api.hgbrasil.com/weather?woeid=455822', {
          params: {
            format: 'json-cors',
            key: '6e1755b2',
          }
        })

			const data = result.results.forecast;

			data.forEach((row) => {
				const date = row.date;
				const min = row.min;
				const max = row.max;
				this.xdates.push(date);
				this.xmin.push(min);
				this.xmax.push(max);
			});

			this.datacollection = {
				labels: this.xdates,
				datasets: [
					{
						label: 'Mínima',
						// backgroundColor: 'coral',
            borderColor: "coral",
            borderWidth: 1,
						data: this.xmin,
					},
					{
            label: 'Máxima',
						// backgroundColor: "purple",
						borderColor: "purple",
            borderWidth: 1,
						data: this.xmax,
					}
				]
			}
		},
	}
}
</script>

<style>
</style>

