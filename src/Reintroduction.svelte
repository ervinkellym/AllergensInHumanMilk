<script>
	// @ts-nocheck

	import { Chart } from 'svelte-echarts';

	let dark_teal = '#114d5f';
	let med_teal = '#8fd7e0';
	let light_teal = '#d2f3f7';
	let dark_yellow = '#9b810b';
	let light_yellow = '#fbe093';
	let fg_gray = '#2b2b2b';
	let bg_white = '#faf9f6';

	// Cow's Milk Outgrowth Chart Config
	$: milkOptions = {
		legend: {},
		tooltip: {},
		xAxis: {
			type: 'category',
			data: ['Before Age 1', '1 Year Old', '2 Years Old', '3 Years Old']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [39, 17, 9, 7],
				type: 'bar',
				stack: 'a',
				name: 'Allergic',
				label: {
				show: true,
				position: 'inside'
				},
				itemStyle: { color: dark_yellow }
			},
			{
				data: [0, 22, 30, 32],
				type: 'bar',
				stack: 'a',
				name: 'Allergy Outgrown',
				label: {
				show: true,
				position: 'inside'
				},
				itemStyle: { color: dark_teal }
			},
		]
	};

	// Atopic Derm Outgrowth Chart Config
	$: atopicOptions = {
		legend: { itemStyle: { borderColor: fg_gray }}, // FIXME
		tooltip: {},
		xAxis: {
			type: 'category',
			data: ['1 Year Old', '2 Years Old', '3 Years Old']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [0, 12, 32],
				type: 'bar',
				stack: 'a',
				name: 'Did Not Challenge',
				label: {
				show: true,
				position: 'inside'
				},
				itemStyle: { color: bg_white, borderColor: fg_gray }
			},
			{
				data: [56, 40, 20],
				type: 'bar',
				stack: 'a',
				name: 'Allergic',
				label: {
				show: true,
				position: 'inside'
				},
				itemStyle: { color: dark_yellow }
			},
			{
				data: [19, 23, 23],
				type: 'bar',
				stack: 'a',
				name: 'Allergy Outgrown',
				label: {
				show: true,
				position: 'inside'
				},
				itemStyle: { color: dark_teal }
			},
		]
	};

	// Eight Year Outgrowth Chart Config
	$: eightYearOptions = {
		legend: {},
		tooltip: {},
		xAxis: {
			type: 'category',
			data: ["Cow's Milk", 'Egg', 'Wheat']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [7.9, 6.5, 7.2],
				type: 'bar',
				label: {
					show: true,
					position: 'inside',
				},
				itemStyle: { color: dark_teal }
			}
		]
	};


</script>

<div class="tab-content">
	<div>
		<h2>Outgrowing & Reintroducing Infant Food Allergies</h2>
		<p>[Content about children outgrowing infant food allergies]</p>
	</div>
	<div class="card-container">
		<div class="card">
			<h3>Children Outgrowing Cow's Milk Allergies</h3>
			<div class="chart">
				<Chart options = { milkOptions } />
			</div>
		</div>
		<div class="card">
			<p>[How to read this chart, information about the study it is derived from]</p>
		</div>
	</div>
	<div class="card-container">
		<div class="card">
			<h3>Children Experiencing Atopic Dermatitis Outgrowing Food Hypersensitivities</h3>
			<div class="chart">
				<Chart options = { atopicOptions } />
			</div>
		</div>
		<div class="card">
			<p>[How to read this chart, information about the study it is derived from]</p>
		</div>
	</div>
	<div class="card-container">
		<div class="card">
			<h3>Median Allergy Outgrowth Age in the First 8 Years of Life</h3>
			<div class="chart">
				<Chart options = { eightYearOptions } />
			</div>
		</div>
		<div class="card">
			<p>[How to read this chart, information about the study it is derived from]</p>
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
