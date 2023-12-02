<script>
// @ts-nocheck
	import { onMount } from 'svelte';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import Dialog, { Actions } from '@smui/dialog';
	import Checkbox from '@smui/checkbox';
  	import FormField from '@smui/form-field';
  	import Button, { Label } from '@smui/button';
	import { Chart } from 'svelte-echarts'

	let chart1, chart2;

	let gaugeData, options;

	let open = false;

	let eggChecked = true;
	let milkChecked = false;
	let wheatChecked = false;
	let peanutChecked = false;

	function handleChange() {
		// console.log("Checkbox options changed..");
		return;
	}

	$: peakData = [
		{
			value: 4, name: "Cow's Milk",
			title: { offsetCenter: ['0%', '-30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '-20%'] },
			itemStyle: { opacity: milkChecked },
		},
		{
			value: 2, name: 'Egg',
			title: { offsetCenter: ['0%', '0%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '10%'] },
			itemStyle: { opacity: eggChecked },
		},
		{
			value: 8, name: 'Wheat',
			title: { offsetCenter: ['0%', '30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { opacity: wheatChecked },
		},
		{
			value: 8, name: 'Peanut',
			title: { offsetCenter: ['0%', '30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { opacity: peanutChecked },
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
			formatter: function(value) { return value == 0 ? '' : value; } 
		},
		data: peakData,
		title: { show: false },
		detail: { show: false },
	}]
	};

	$: untraceableData = [
		{
			value: 8, name: "Cow's Milk",
			title: { offsetCenter: ['0%', '-30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '-20%'] },
			itemStyle: { opacity: milkChecked },
		},
		{
			value: 4, name: 'Egg',
			title: { offsetCenter: ['0%', '0%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '10%'] },
			itemStyle: { opacity: eggChecked },
		},
		{
			value: 16, name: 'Wheat',
			title: { offsetCenter: ['0%', '30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { opacity: wheatChecked },
		},
		{
			value: 16, name: 'Peanut',
			title: { offsetCenter: ['0%', '30%'] },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { opacity: peanutChecked },
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
			formatter: function(value) { return value == 0 ? '' : value; } 
		},
		data: untraceableData,
		title: { show: false },
		detail: { show: false },
	}]
	};

</script>

<main>
	<div class="paper-container">
		<Paper variant="unelevated" color="primary">
			<Title>Protein Persistence</Title>
			<Subtitle>Subtitle</Subtitle>
			<Content>Content</Content>
			<div>
				<FormField>
					<Checkbox bind:checked = { milkChecked } on:change = { handleChange } />
					<span slot="label">Cow's Milk</span>
					<Button variant="raised" on:click = { () => (open = true) }>More About Cow's Milk</Button>
				</FormField>
				<FormField>
					<Checkbox bind:checked = { eggChecked } on:change = { handleChange } />
					<span slot="label">Egg</span>
					<Button variant="raised" on:click = { () => (open = true) }>More About Egg</Button>
				</FormField>
				<FormField>
					<Checkbox bind:checked = { wheatChecked } on:change = { handleChange } />
					<span slot="label">Wheat</span>
					<Button variant="raised" on:click = { () => (open = true) }>More About Wheat</Button>
				</FormField>
				<FormField>
					<Checkbox bind:checked = { peanutChecked } on:change = { handleChange } />
					<span slot="label">Peanut</span>
					<Button variant="raised" on:click = { () => (open = true) }>More About Peanut</Button>
				</FormField>
			</div>
			<br>
			<div class="card-container">
				<div class="card">
					<h1>Peak Amount</h1>
					<div class="chart">
						<Chart class="chart" options = { peakOptions } bind:this = { chart1 }/>
					</div>
				</div>
				<div class="card">
					<h1>Untraceable Amount</h1>
					<div class="chart">
						<Chart class="chart" options = { untraceableOptions } bind:this = { chart2 }/>
					</div>
					<Button on:click = { () => (console.log('Button Clicked')) }> </Button>
				</div>
			</div>
			<br>
			<div>
				<h2>To-Do</h2>
				<p>Change dial colors (and lots of other colors)</p>
				<p>Add actual data</p>
				<p>Dynamic content in pop-ups</p>
				<p>Add content</p>
			</div>
		</Paper>
	</div>
</main>

<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  <Title id="large-scroll-title">A Brief Selection of Placeholder Text</Title>
  <Content class='content' id="large-scroll-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus ultricies accumsan. Cras sed justo eget mi suscipit placerat. Proin nec mauris ac enim ornare finibus sit amet in nibh. Quisque quis euismod nisi, in convallis neque. Aliquam sed est a orci pellentesque commodo. Ut vitae urna luctus, rutrum augue vel, placerat turpis. Maecenas eleifend, orci a tincidunt auctor, nulla ex consectetur nisl, nec rhoncus nisl risus quis felis. Aenean pulvinar leo suscipit nibh ultrices commodo. Aenean eleifend volutpat odio. Aenean sit amet justo neque. Sed sit amet tortor rhoncus, accumsan eros a, semper nisl. Praesent viverra elit eu orci malesuada, nec bibendum diam interdum. Aliquam id odio turpis. In pharetra, nibh id feugiat porttitor, metus nibh dapibus velit, ut ultricies neque tortor a neque. Praesent porta varius mi a mattis.</p>
	<p>Praesent condimentum velit mi, vel luctus nulla imperdiet non. Duis sit amet venenatis sapien. Nam maximus lacus felis, non ullamcorper magna volutpat at. Suspendisse sollicitudin semper ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque condimentum dictum porta. Cras euismod eros urna, sit amet lobortis felis accumsan vel. Fusce egestas molestie massa, non elementum tortor varius in. Maecenas rutrum, nisl ut facilisis sodales, dolor massa efficitur sapien, eu dapibus urna dui et leo.</p>
	<p>Nullam luctus egestas arcu. Suspendisse eget urna efficitur, laoreet mauris sed, aliquam dolor. Suspendisse eu nulla luctus, vestibulum turpis id, aliquet magna. Donec varius justo eros, eget iaculis urna condimentum eget. Phasellus vulputate egestas condimentum. Nulla dolor magna, finibus at eros vel, consequat malesuada neque. Quisque eget elit mauris.</p>
  </Content>
  <Actions>
    <Button action="accept">
      <Label>Done</Label>
    </Button>
  </Actions>
</Dialog>


<style>
	.paper-container{
		margin: 0 auto;
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
	}

	.card {
		/* min-width: 30%; */
		display: inline;
		/* padding: 20px 30px; */
		background-color: #faf9f6;
		border-radius: 5px;
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
		justify-content: center;
	}

	.card:nth-of-type(1){
		flex: 1 300px;
	}
	
	.card:nth-of-type(2){
		flex: 1 300px;
	}

	.chart {
		height: 50vh;
		width: 100%;
	}

	p {
		padding: 20px;
	}

	* {
		padding: 0;
		margin: 0;
	  	-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
</style>
