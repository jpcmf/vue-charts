<template>
	<div>
		<kendo-chart
			:title-text="'API'"
			:legend-position="'bottom'"
			:series="weather"
			:category-axis-categories="categorias"
			:value-axis="axis"
			:theme="'blueOpal'">
		</kendo-chart>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'chart-api',
	components: {

	},
	data() {
		return {
			cripto: [],
			weather: [],
			categorias: ['Previsão próximos 5 dias'],
			axis: [
				{
					title: {text: 'Mínima'},
					name: 'temperaturemin',
					labels: {
						format: '{0}C'
					}
				},
				{
					title: {text: 'Máxima'},
					name: 'temperaturemax',
					labels: {
						format: '{0}C'
					}
				},
			]
		}
	},
	async mounted() {

		// const { data: {bpi:result} } = await axios
		// 	.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    // let listOfObjects = Object.keys(result).map((key) => {
    //   return {
    //     name: result[key].code,
    //     data: [result[key].rate_float],
    //     axis: 'stockrange',
    //   }
		// });
		// this.cripto = listOfObjects;
		// console.log(listOfObjects);

		const { data: result } = await axios
      .get('https://api.hgbrasil.com/weather?woeid=455822', {
        params: {
          format: 'json-cors',
          key: '6e1755b2',
        }
      })

		// console.log(result.results.forecast);

		let listOfObjects = Object.keys(result.results.forecast).map((key) => {

			// console.log(result.results.forecast[key]);

			return {
				name: result.results.forecast[key].date,
				data: [result.results.forecast[key].max],
				// data: [
				// 	{
				// 		name: 'Máxima',
				// 		data: [result.results.forecast[key].max],
				// 		axis: "temperaturemax"
				// 	},
				// 	{
				// 		name: 'Mínima',
				// 		data: [result.results.forecast[key].min],
				// 		axis: "temperaturemin"
				// 	}
				// ]
			}
		});

		this.weather = listOfObjects;

		// console.log(listOfObjects);
	},
}
</script>

<style>

</style>
