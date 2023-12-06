<script>
// @ts-nocheck

	// Imports
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Checkbox from '@smui/checkbox';
  	import FormField from '@smui/form-field';
  	import Button, { Label } from '@smui/button';
	import { Chart } from 'svelte-echarts'

	// Charts
	let chart1, chart2;

	// Dialogs
	let milkDialogOpen = false;
	let eggDialogOpen = false;
	let wheatDialogOpen = false;
	let peanutDialogOpen = false;

	// Checkboxes
	let milkChecked = true;
	let eggChecked = true;
	let wheatChecked = true;
	let peanutChecked = true;

	// Colors
	let dark_teal = '#114d5f';
	let med_teal = '#8fd7e0';
	let light_teal = '#d2f3f7';
	let dark_yellow = '#9b810b';
	let light_yellow = '#fbe093';
	let fg_white = '#faf9f6';
	let fg_gray = '#2b2b2b';

	// Images
	import BLactoTimeSeries from '/src/assets/BLactoTimeSeries.jpeg';
	import FourXOvaTimeSeries from '/src/assets/4xOvaTimeSeries.jpeg';
	import EggFourWaysTimeSeries from '/src/assets/Egg4WaysTimeSeries.jpeg';
	import PeanutTimeSeries from '/src/assets/PeanutTimeSeries.jpeg';

	$: peakData = [
		{
			value: 6, name: "Cow's Milk",
			title: { offsetCenter: ['0%', '-30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '-20%'] },
			itemStyle: { color: dark_teal, opacity: milkChecked },
		},
		{
			value: 6, name: 'Egg',
			title: { offsetCenter: ['0%', '0%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '10%'] },
			itemStyle: { color: light_yellow, opacity: eggChecked },
		},
		{
			value: 4, name: 'Wheat',
			title: { offsetCenter: ['0%', '30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: med_teal, opacity: wheatChecked },
		},
		{
			value: 2, name: 'Peanut',
			title: { offsetCenter: ['0%', '30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: dark_yellow, opacity: peanutChecked },
		}							
	];

	$: peakOptions = { 
		tooltip: { formatter: function(value) { return value.name + ': ' + value.value + ' hours'; } },
		// legend: {
		// 	bottom: 10,
		// 	left: 'center',
		// 	data: [ 
		// 		{ name: 'Cow\'s Milk' },
		// 		{ name: 'Egg' },
		// 		{ name: 'Wheat' },
		// 		{ name: 'Peanut' },
		// 	]
		// },
		series: [{
			type: 'gauge',
			min: 0, max: 24, splitNumber: 8,
			startAngle: 90, endAngle: -270,
			pointer: { show: false },
			progress: {
				show: true,
				overlap: false,
				roundCap: true,
				itemStyle: { borderWidth: 1, borderColor: '#2b2b2b' }
			},
			axisLine: { lineStyle: { width: 40 } },
			splitLine: { show: true, distance: 0, length: 10 },
			axisTick: { show: true, distance: 0, splitNumber: 3 },
			axisLabel: { 
				show: true, 
				distance: 50, 
				formatter: function(value) { return value == 24 ? '' : value; } 
			},
			data: peakData,
			title: { show: false },
			detail: { show: false },
		}]
	};

	$: untraceableData = [
		{
			value: 24, name: "Cow's Milk",
			title: { offsetCenter: ['0%', '-30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '-20%'] },
			itemStyle: { color: dark_teal, opacity: 0 },
		},
		{
			value: 24, name: 'Egg',
			title: { offsetCenter: ['0%', '0%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '10%'] },
			itemStyle: { color: light_yellow, opacity: eggChecked },
		},
		{
			value: 72, name: 'Wheat',
			title: { offsetCenter: ['0%', '30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: med_teal, opacity: 0 },
		},
		{
			value: 8, name: 'Peanut',
			title: { offsetCenter: ['0%', '30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: dark_yellow, opacity: peanutChecked },
		}							
	];

	$: untraceableOptions = {
		tooltip: { formatter: function(value) { return value.name + ': ' + value.value + ' hours'; } }, 
		legend: { show: true, type: 'plain' },
		series: [{
			type: 'gauge',
			min: 0, max: 24, splitNumber: 8,
			startAngle: 90, endAngle: -270,
			pointer: { show: false },
			progress: {
				show: true,
				overlap: false,
				roundCap: true,
				itemStyle: { borderWidth: 1, borderColor: '#2b2b2b' }
			},
			axisLine: { lineStyle: { width: 40 } },
			splitLine: { show: true, distance: 0, length: 10 },
			axisTick: { show: true, distance: 0, splitNumber: 3 },
			axisLabel: { 
				show: true, 
				distance: 50, 
				formatter: function(value) { return value == 24 ? '' : value; } 
			},
			data: untraceableData,
			title: { show: false },
			detail: { show: false },
		}]
	};

</script>

<main>
	<div class="tab-content">
		<div class='tab-inner'>
			<h2>How Long Do Allergenic Proteins Persist In My Milk?</h2>
			<p>[how to use these gauges]</p>
			<div class='card-container'>
				<FormField>
					<Checkbox bind:checked = { milkChecked }/>
					<button 
						slot="label" 
						class="legend-element"
						sr-only="More information about cow's milk protein transfer in human milk."
						on:click = { () => (milkDialogOpen = true) }
						style='
							--bg-color: { milkChecked ? dark_teal : fg_white }; 
							--fg-color: { milkChecked ? fg_white : fg_gray };
					'>Cow's Milk &#9432</button>
				</FormField>
				<FormField>
					<Checkbox bind:checked = { eggChecked }/>
					<button 
						slot="label" 
						class="legend-element" 
						sr-only="More information about egg protein transfer in human milk."
						on:click = { () => (eggDialogOpen = true) }
						style='
							--bg-color: { eggChecked ? light_yellow : fg_white };
							--fg-color: { fg_gray };
					'>Egg &#9432</button>
				</FormField>
				<FormField>
					<Checkbox bind:checked = { wheatChecked }/>
					<button
						slot="label"
						class="legend-element"
						sr-only="More information about wheat protein transfer in human milk."
						on:click = { () => (wheatDialogOpen = true) }
						style='
							--bg-color: { wheatChecked ? med_teal : fg_white };
							--fg-color: { fg_gray };
					'>Wheat &#9432</button>
				</FormField>
				<FormField>
					<Checkbox bind:checked = { peanutChecked }/>
					<button 
						slot="label"
						class="legend-element"
						sr-only="More information about peanut protein transfer in human milk."
						on:click={() => peanutDialogOpen = true}
						style='
							--bg-color: { peanutChecked ? dark_yellow : fg_white };
							--fg-color: { peanutChecked ? fg_white : fg_gray };
					'>Peanut &#9432</button>
				</FormField>
			</div>
			<br>
			<div class="card-container">
				<div class="card">
					<h3>Peak Amount</h3>
					<div class="chart" sr-only='TODO'>
						<Chart options = { peakOptions } bind:this = { chart1 }/>
					</div>
				</div>
				<div class="card">
					<h3>Untraceable Amount</h3>
					<div class="chart" sr-only='TODO'>
						<Chart options = { untraceableOptions } bind:this = { chart2 }/>
					</div>
					<Button on:click = { () => (console.log('Button Clicked')) }> </Button>
				</div>
			</div>
		</div>
	</div>
</main>

<Dialog bind:open={milkDialogOpen}
  aria-labelledby="large-scroll-title-milk"
  aria-describedby="large-scroll-content-milk"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  	<Title id="large-scroll-title-milk">Cow's Milk Protein Persistence</Title>
  	<Content class='content' id="large-scroll-content-milk">
    	<p>[More information]</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ BLactoTimeSeries } alt='TODO'>
			</div>
		</div>
		<span>[Source]</span>
    	<p>[More information]</p>
	</Content>
  	<Actions>
		<Button action="accept">
			<Label>Done</Label>
		</Button>
  	</Actions>
</Dialog>

<Dialog bind:open={eggDialogOpen}
  aria-labelledby="large-scroll-title-egg"
  aria-describedby="large-scroll-content-egg"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
	<Title id="large-scroll-title-egg">Egg Protein Persistence</Title>
	<Content class='content' id="large-scroll-content-egg">
    	<p>[More information]</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ FourXOvaTimeSeries } alt='TODO'>
			</div>
		</div>
		<span>[Source]</span>
    	<p>[More information]</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ EggFourWaysTimeSeries } alt='TODO'>
			</div>
		</div>
		<span>[Source]</span>
    	<p>[More information]</p>
	</Content>
	<Actions>
		<Button action="accept">
			<Label>Done</Label>
		</Button>
	</Actions>
</Dialog>

<Dialog bind:open={wheatDialogOpen}
  aria-labelledby="large-scroll-title-wheat"
  aria-describedby="large-scroll-content-wheat"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  <Title id="large-scroll-title-wheat">Wheat Protein Persistence</Title>
	<Content class='content' id="large-scroll-content-wheat">
    	<p>[More information]</p>
	</Content>
	<Actions>
		<Button action="accept">
			<Label>Done</Label>
		</Button>
	</Actions>
</Dialog>

<Dialog bind:open={peanutDialogOpen}
  aria-labelledby="large-scroll-title-peanut"
  aria-describedby="large-scroll-content-peanut"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  <Title id="large-scroll-title-peanut">Peanut Protein Persistence</Title>
	<Content class='content' id="large-scroll-content-peanut">
		<p>[More information]</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ PeanutTimeSeries } alt='TODO'>
			</div>
		</div>
		<span>[Source]</span>
		<p>[More information]</p>
	</Content>
	<Actions>
		<Button action="accept">
			<Label>Done</Label>
		</Button>
	</Actions>
</Dialog>

<style lang='scss'>
	@import './theme/style.scss';

	.legend-element {
		background-color: var(--bg-color);
		border-color: var(--fg-color);
		color: var(--fg-color);
		border-radius: 20px;
		padding: 5px 20px 5px 20px;
		font-size: 16px;
		// margin: 15px;
	}

</style>
