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
			formatter: function(value) { return value == 24 ? '' : value; } 
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
				<h2>Peak Amount</h2>
				<div class="chart">
					<Chart class="chart" options = { peakOptions } bind:this = { chart1 }/>
				</div>
			</div>
			<div class="card">
				<h2>Untraceable Amount</h2>
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
			<p>Add content</p>
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

<Dialog bind:open={eggDialogOpen}
  aria-labelledby="large-scroll-title-egg"
  aria-describedby="large-scroll-content-egg"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  <Title id="large-scroll-title-egg">Egg Protein Persistence</Title>
  <Content class='content' id="large-scroll-content-egg">
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

<Dialog bind:open={wheatDialogOpen}
  aria-labelledby="large-scroll-title-wheat"
  aria-describedby="large-scroll-content-wheat"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  <Title id="large-scroll-title-wheat">Wheat Protein Persistence</Title>
  <Content class='content' id="large-scroll-content-wheat">
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

<Dialog bind:open={peanutDialogOpen}
  aria-labelledby="large-scroll-title-peanut"
  aria-describedby="large-scroll-content-peanut"
  surface$style="width: 850px; max-width: calc(100vw - 32px);"
>
  <Title id="large-scroll-title-peanut">Peanut Protein Persistence</Title>
  <Content class='content' id="large-scroll-content-peanut">
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

<style lang='scss'>
	@import './theme/style.scss';
</style>
