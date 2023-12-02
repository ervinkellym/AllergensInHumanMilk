<script>
	// @ts-nocheck

	// Svelte / SvelteMUI Imports
	import { onMount, onDestroy } from 'svelte';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import { Chart } from 'svelte-echarts';

	const sankeyLineStyle = { color: 'target', opacity: 0.7 };
	const sankeyBlueStyle = { color: '#8fd7e0' };
	const sankeyYellowStyle = { color: '#fbe093' };

	// Cow's Milk Sankey Chart Config
	const options = {
		tooltip: { trigger: 'item', triggerOn: 'mousemove' },
		series: [{
			type: 'sankey',
			data: [
				{ name: 'Allergic Before Age 1', depth: 0, itemStyle: sankeyYellowStyle },
				{ name: 'Allergic at Age 1', depth: 1, itemStyle: sankeyYellowStyle  },
				{ name: 'Allergic at Age 2', depth: 2, itemStyle: sankeyYellowStyle  },
				{ name: 'Allergic at Age 3', depth: 3 , itemStyle: sankeyYellowStyle },
				{ name: 'Tolerant', depth: 3, itemStyle: sankeyBlueStyle  },
			],
			links: [
				{ 
					source: 'Allergic Before Age 1', target: 'Allergic at Age 1', 
					value: 17, lineStyle: sankeyLineStyle
				},
				{
					source: 'Allergic at Age 1', target: 'Allergic at Age 2',
					value: 9, lineStyle: sankeyLineStyle
				},
				{
					source: 'Allergic at Age 2', target: 'Allergic at Age 3',
					value: 5, lineStyle: sankeyLineStyle
				}, 
				{
					source: 'Allergic at Age 2', target: 'Tolerant',
					value: 4, lineStyle: sankeyLineStyle
				},
				{
					source: 'Allergic at Age 1', target: 'Tolerant',
					value: 8, lineStyle: sankeyLineStyle
				},
				{
					source: 'Allergic Before Age 1', target: 'Tolerant',
					value: 44, lineStyle: sankeyLineStyle
				},
			],
			layoutIterations: 0,
			nodeGap: 25,
			lineStyle: { curveness: 0.5 }
		}]
    }

</script>

<div class="paper-container">
	<Paper variant="unelevated" color="primary">
		<Content>Content</Content>
		<div class="card-container">
			<div class="card">
				<h1>Cow's Milk Sankey</h1>
				<div class="chart">
					<Chart class="chart" { options } />
				</div>
			</div>
			<div class="card">
				<h1>Information About Sankey</h1>
				<h2>To-Do</h2>
				<p>Add content here</p>
				<p>Change abs values to percentages</p>
				<p>Add numerical labels to links</p>
				<p>Check contrast</p>
				<p>Add additional diagrams</p>
				<p>Chart resizing on small screens</p>
			</div>
		</div>
		<Content>Content</Content>
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
		min-width: 45%;
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
