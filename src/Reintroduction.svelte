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
			name: 'Age',
			nameLocation: 'center',
			nameTextStyle: { fontSize: 14, padding: [20, 0, 0 , 0] },
			type: 'category',
			data: ['Under 1', '1', '2', '3']
		},
		yAxis: {
			show: false
			// type: 'value'
		},
		series: [
			{
				data: [100, 44, 23, 18],
				type: 'bar',
				stack: 'a',
				name: 'Allergic',
				label: {
					show: true,
					position: 'inside',
					formatter: (value) => { return value.value == 0 ? '' : value.value + '%'; }
				},
				itemStyle: { color: dark_yellow, borderColor: bg_white }
			},
			{
				data: [0, 56, 77, 82],
				type: 'bar',
				stack: 'a',
				name: 'Outgrew Allergy',
				label: {
					show: true,
					position: 'inside',
					formatter: (value) => { return value.value == 0 ? '' : value.value + '%'; }
				},
				itemStyle: { color: dark_teal, borderColor: bg_white }
			},
		]
	};

	// Atopic Derm Outgrowth Chart Config
	$: atopicOptions = {
		legend: { itemStyle: { borderColor: fg_gray }}, // FIXME
		tooltip: {},
		xAxis: {
			name: 'Age',
			nameLocation: 'center',
			nameTextStyle: { fontSize: 14, padding: [20, 0, 0 , 0] },
			type: 'category',
			data: ['1', '2', '3']
		},
		yAxis: {
			// type: 'value',
			show: false
		},
		series: [
			{
				data: [0, 16, 43],
				type: 'bar',
				stack: 'a',
				name: 'Did Not Challenge',
				label: {
					show: true,
					position: 'inside',
					formatter: (value) => { return value.value == 0 ? '' : value.value + '%'; }
				},
				itemStyle: { color: fg_gray, borderColor: bg_white }
			},
			{
				data: [75, 53, 27],
				type: 'bar',
				stack: 'a',
				name: 'Allergic',
				label: {
					show: true,
					position: 'inside',
					formatter: (value) => { return value.value == 0 ? '' : value.value + '%'; }
				},
				itemStyle: { color: dark_yellow, borderColor: bg_white }
			},
			{
				data: [25, 31, 30],
				type: 'bar',
				stack: 'a',
				name: 'Allergy Outgrown',
				label: {
					show: true,
					position: 'inside',
					formatter: (value) => { return value.value == 0 ? '' : value.value + '%'; }
				},
				itemStyle: { color: dark_teal, borderColor: bg_white }
			},
		]
	};

	// Eight Year Outgrowth Chart Config
	$: eightYearOptions = {
		legend: {},
		tooltip: {},
		xAxis: {
			type: 'category',
			data: ["Cow's Milk", 'Egg', 'Wheat'],
			name: 'Food Allergen',
			nameLocation: 'center',
			nameTextStyle: { fontSize: 14, padding: [20, 0, 0 , 0] },
		},
		yAxis: {
			type: 'value',
			name: 'Age',
			nameLocation: 'center',
			nameTextStyle: { fontSize: 14, padding: [0, 0, 15 , 0] },
		},
		series: [
			{
				data: [7.9, 6.5, 7.2],
				type: 'bar',
				label: {
					show: true,
					position: 'inside',
					formatter: (value) => { return value.value + " years"; }
				},
				itemStyle: { color: dark_teal }
			}
		]
	};


</script>

<div class="tab-content">
	<div class='tab-inner' style="display:inline !important; align-content:center;">
		<div>
			<h2>Outgrowing & Reintroducing Infant Food Allergies</h2>
			<p>Many children diagnosed with food sensitivities and allergies early in life will not be allergic all their lives. The timeline for outgrowing a food sensitivity or allergy depends heavily on the offending food, the severity of sensitivity/allergy, and the type of sensitivity/allergy. Below are results from three studies that followed food-allergic and sensitive children over several years to determine if and when they outgrew their sensitivities/allergies.</p>
		</div>
		<div class="card-container">
			<div class="card">
				<h3 id="Cow's Milk Allergy Outgrowth Title">Cow's Milk Allergy Outgrowth for Children Ages 0-3</h3>
				<div class="chart">
					<Chart 
						options = { milkOptions } 
						aria-describedby="Cow's Milk Allergy Outgrowth Chart Description" 
						aria-labelledby="Cow's Milk Allergy Outgrowth Title"
					/>
				</div>
			</div>
			<div class="card" id="Cow's Milk Allergy Outgrowth Chart Description">
				<p>This 1990 study published in the European Journal of Allergy and Clinical Immunology followed 39 children diagnosed with Cow's Milk Allergy before they were 1 year old. At ages one, two, and three, the children were re-tested for Cow's Milk Allergy using skin-prick and blood testing.</p>
				<ul>
					<li>At age one, 22 (56%) of the children had outgrown their allergy.</li>
					<li>At age two, 30 (77%) of the children had outgrown their allergy.</li>
					<li>At age three, 32 (82%) of the children had outgrown their allergy.</li>
				</ul>
				<a href='https://pubmed.ncbi.nlm.nih.gov/2288394/' target='_blank'>[Source]</a>
			</div>
		</div>
		<div class="card-container">
			<div class="card">
				<h3>Food Hypersensivity Outgrowth for Children Ages 0-3 Experiencing Atopic Dermatitis</h3>
				<div class="chart">
					<Chart options = { atopicOptions } />
				</div>
			</div>
			<div class="card">
				<p>(75 Participants)</p>
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
</div>
x
<style lang='scss'>
	@import './theme/style.scss';
</style>
