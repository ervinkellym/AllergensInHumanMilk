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
	<div>
		<h2>Outgrowing & Reintroducing Infant Food Allergies</h2>
		<p>[Content about children outgrowing infant food allergies]</p>
	</div>
	<div>
		<div class="card-container">
			<div class="card">
				<h3>How Many Children Outgrow Cow's Milk Allergies by Age 3?</h3>
				<div class="chart">
					<Chart class="chart" { options } />
				</div>
			</div>
			<div class="card">
				<p>[How to read this chart, information about the study it is derived from]</p>
			</div>
		</div>
	</div>
	<div>
		<h3>Food Reintroduction Ladders</h3>
		<p>[Explanation of reintroduction ladders]</p>
		<p>[Links to ladders (ideally reformatted for consistency and displayed in this site)]</p>
	</div>
</div>
x
<style lang='scss'>
	@import './theme/style.scss';
</style>
