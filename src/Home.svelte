<script>

	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import { Chart } from 'svelte-echarts';

	const options = {
		tooltip: {},
		series: [
			{
				type: 'pie',
				clockwise: true,
				label: {
					position: 'outside',
					fontSize: 18,
					color: '#2b2b2b'
				},
				data: [
					{ value: 63, name: 'No Dietary\nRestriction' },
					{ value: 23, name: 'Avoidance\nof Allergen' },
					{ value: 38, name: 'Concern Not\nAddressed' },
				],
				itemStyle: {
					opacity: 0.7,
					color: '#8fd7e0',
					borderWidth: 1,
					borderColor: '#2b2b2b'
				}
			}
		]
	};

	let pieChart;
	window.onresize = function() { window.echarts.getInstanceById(pieChart).resize(); }

</script>

<div class="paper-container">
	<Paper variant="unelevated" color="primary">
		<div>
			<Subtitle>What is this website?</Subtitle>
			<Content>Content</Content>
		</div>
		<div>
			<Subtitle>Who can benefit from this?</Subtitle>
			<Content>Content</Content>
			<div class="card-container">
			<div class="card">
				<h1>Physician Recommendations</h1>
				<h1>for Chestfeeding</h1>
				<h1>Infants with Allergies</h1>
				<div class="chart">
					<Chart class="chart" { options } bind:this={pieChart}/>
				</div>
			</div>
			<div class="card">
				<h1>Information About Pie Chart</h1>
				<h2>To-Do</h2>
				<p>Add content here</p>
				<p>Add Percentage Labels</p>
				<p>Change Tooltips to Percentages</p>
				<p>Check contrast</p>
				<p>Add additional diagrams</p>
				<p>Chart resizing on small screens</p>
			</div>
		</div>
		<Content>Content</Content>
		</div>
		<div>
			<Subtitle>How do I use this tool?</Subtitle>
			<Content>Content</Content>
			<Content>[Not Medical Advice Disclaimer]</Content>
		</div>
		<div>
			<Subtitle>What are the sources for the data?</Subtitle>
			<Content>Content</Content>
		</div>
	</Paper>
</div>

<style>
	.paper-container{
		margin: 0 auto;
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		justify-content: center;
	}

	.card {
		padding: 20px 30px;
		background-color: #faf9f6;
	}

	.chart {
		height: 50vh;
		width: 100%;
	}

	* {
		padding: 0;
		margin: 0;
	  	-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
</style>