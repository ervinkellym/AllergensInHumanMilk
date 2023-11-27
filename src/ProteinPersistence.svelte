<script>
// @ts-nocheck
	import { onMount } from 'svelte';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import Dialog, { Actions } from '@smui/dialog';
  	import Button, { Label } from '@smui/button';
	import { Chart } from 'svelte-echarts'

	let open = false;

	const gaugeData = [
	{
		value: 8,
		name: 'Perfect',
		title: {
		offsetCenter: ['0%', '-30%']
		},
		detail: {
		valueAnimation: true,
		offsetCenter: ['0%', '-20%']
		}
	},
	{
		value: 4,
		name: 'Good',
		title: {
		offsetCenter: ['0%', '0%']
		},
		detail: {
		valueAnimation: true,
		offsetCenter: ['0%', '10%']
		}
	},
	{
		value: 16,
		name: 'Commonly',
		title: {
		offsetCenter: ['0%', '30%']
		},
		detail: {
		valueAnimation: true,
		offsetCenter: ['0%', '40%']
		}
	}];

	const options = { series: [{
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
		axisLabel: { show: true, distance: 50 },
		data: gaugeData,
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
			<div class="card-container">
				<div class="card">
					<h1>Chart 1</h1>
					<div class="chart">
						<Chart class="chart" { options } />
					</div>
				</div>
				<div class="card">
					<h1>Chart 2</h1>
					<div class="chart">
						<Chart class="chart" { options } />
					</div>
				</div>
				<div class="card">
					<h2>To-Do</h2>
					<p>Add checkbox options for dials here</p>
					<p>Center dials in their cards</p>
					<p>Fix the 0/24 overlap on dials</p>
					<p>Change dial colors</p>
					<p>Add actual separate data & dynamics</p>
					<Button variant="raised" class="button-shaped-round" on:click = { () => (open = true) }>Click Me!</Button>
				</div>
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
		display: inline;
		padding: 20px 30px;
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
	
	.card:nth-of-type(3){
		flex: 1 300px;
	}

	.chart {
		height: 300px;
		width: 300px;
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
