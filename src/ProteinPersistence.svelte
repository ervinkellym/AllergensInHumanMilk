<script>
// @ts-nocheck

	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Checkbox from '@smui/checkbox';
  	import FormField from '@smui/form-field';
  	import Button, { Label } from '@smui/button';
	import { Chart } from 'svelte-echarts'

	let chart1, chart2;

	let milkDialogOpen = false;
	let eggDialogOpen = false;
	let wheatDialogOpen = false;
	let peanutDialogOpen = false;

	let milkChecked = true;
	let eggChecked = true;
	let wheatChecked = true;
	let peanutChecked = true;


	let dark_teal = '#114d5f';
	let med_teal = '#8fd7e0';
	let light_teal = '#d2f3f7';
	let dark_yellow = '#9b810b';
	let light_yellow = '#fbe093';

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

	$: peakOptions = { series: [{
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

	$: untraceableOptions = { series: [{
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
		<h2>How Long Do Allergenic Proteins Persist In My Milk?</h2>
		<p>[how to use these gauges]</p>
		<div>
			<FormField>
				<Checkbox bind:checked = { milkChecked }/>
				<span slot="label">Cow's Milk</span>
			</FormField>
			<Button variant="raised" on:click = { () => (milkDialogOpen = true) }>More Info</Button>
			<FormField>
				<Checkbox bind:checked = { eggChecked }/>
				<span slot="label">Egg</span>
			</FormField>
			<Button variant="raised" on:click = { () => (eggDialogOpen = true) }>More Info</Button>
			<FormField>
				<Checkbox bind:checked = { wheatChecked }/>
				<span slot="label">Wheat</span>
			</FormField>
			<Button variant="raised" on:click = { () => (wheatDialogOpen = true) }>More Info</Button>
			<FormField>
				<Checkbox bind:checked = { peanutChecked }/>
				<span slot="label">Peanut</span>
			</FormField>
			<Button variant="raised"  on:click = { () => (peanutDialogOpen = true) }>More Info</Button>
		</div>
		<br>
		<div class="card-container">
			<div class="card">
				<h3>Peak Amount</h3>
				<div class="chart">
					<Chart class="chart" options = { peakOptions } bind:this = { chart1 }/>
				</div>
			</div>
			<div class="card">
				<h3>Untraceable Amount</h3>
				<div class="chart">
					<Chart class="chart" options = { untraceableOptions } bind:this = { chart2 }/>
				</div>
				<Button on:click = { () => (console.log('Button Clicked')) }> </Button>
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
    <p>More information</p>
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
    	<p>More information</p>
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
		<p>More information</p>
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
		<p>More information</p>
	</Content>
	<Actions>
		<Button action="accept">
			<Label>Done</Label>
		</Button>
	</Actions>
</Dialog>

<style lang='scss'>
	@import './theme/style.scss';
</style>
