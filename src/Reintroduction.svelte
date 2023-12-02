<script>
	// @ts-nocheck

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

<div class="tab-content">
	<div class="card-container">
		<div class="card">
			<h2>Cow's Milk Sankey</h2>
			<div class="chart">
				<Chart class="chart" { options } />
			</div>
		</div>
		<div class="card">
			<h2>Information About Sankey</h2>
			<br>
			<h2>To-Do</h2>
			<p>Add content</p>
			<p>Change abs values to percentages</p>
			<p>Add numerical labels to links</p>
			<p>Check contrast</p>
			<p>Add additional diagrams</p>
		</div>
	</div>
</div>

<style lang='scss'>
	@import './theme/style.scss';
</style>
