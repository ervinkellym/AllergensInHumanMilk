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
			name: 'Years',
			nameLocation: 'center',
			nameTextStyle: { fontSize: 14, padding: [20, 0, 0 , 0] },
			type: 'category',
			data: ['0', '1', '2', '3']
		},
		yAxis: {
			// type: 'value',
			show: false
		},
		series: [
			{
				data: [0, 0, 16, 43],
				type: 'bar',
				stack: 'a',
				name: 'Didn\'t Test',
				label: {
					show: true,
					position: 'inside',
					formatter: (value) => { return value.value == 0 ? '' : value.value + '%'; }
				},
				itemStyle: { color: fg_gray, borderColor: bg_white }
			},
			{
				data: [100, 75, 53, 27],
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
				data: [0, 25, 31, 30],
				type: 'bar',
				stack: 'a',
				name: 'Outgrew Allergies',
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
	<div class='tab-inner'>
		<div class='wide-content-wrapper'>
			<div class='wide-content'>
				<h2>Outgrowing & Reintroducing Infant Food Allergies</h2>
				<p>Many children with food allergies will not be allergic all their lives. How long it takes to outgrow an allergy depends on the food and the severity of the allergy. Below are results from three studies that followed allergic children to determine if and when they outgrew their allergies.</p>
			</div>
		</div>
		<br>
		<div class="card-container">
			<div class="card">
				<h3 id="Cow's Milk Allergy Outgrowth Title">Cow's Milk Allergy Outgrowth for Allergic Children Ages 0-3</h3>
				<div class="chart">
					<Chart 
						options = { milkOptions } 
						aria-describedby="Cow's Milk Allergy Outgrowth Chart Description" 
						aria-labelledby="Cow's Milk Allergy Outgrowth Title"
					/>
				</div>
			</div>
			<div class="card" id="Cow's Milk Allergy Outgrowth Chart Description">
				<p>39 children diagnosed with Cow's Milk Allergy before they were one year old were re-tested at ages one, two, and three using skin-prick and blood testing.</p>
				<ul>
					<li>At one, 22 (56%) had outgrown their allergy.</li>
					<li>At two, 30 (77%) had outgrown their allergy.</li>
					<li>At three, 32 (82%) had outgrown their allergy.</li>
				</ul>
				<div class='center-text'>
					<a href='https://pubmed.ncbi.nlm.nih.gov/2288394/' target='_blank'>[European Journal of Allergy and Clinical Immunology, 1990]</a>
				</div>
			</div>
		</div>
		<br>
		<div class="card-container">
			<div class="card">
				<h3>Allergy Outgrowth for Children Ages 3-18 with Food Allergies Experiencing Atopic Dermatitis Over 3 years</h3>
				<div class="chart">
					<Chart options = { atopicOptions } />
				</div>
			</div>
			<div class="card">
				<p>75 children ages 3-18 with atopic dermatitis and at least one food allergy avoided their allergen(s) for three years. Each year, they 'challenged' their food allergy by eating the allergen(s) in a clinical setting and watching for a reaction.</p>
				<ul>
					<li>After one year, 19 (26%) outgrew all allergies.</li>
					<li>After two years, 4 (5%) outgrew all allergies.</li>
					<li>After three years, no more children (0%) outgrew allergies.</li>
				</ul>
				<p>23 (31%) of the children outgrew all allergies. Some children did not repeat testing after the first year.</p>
				<div class='center-text'>
					<a href='https://pubmed.ncbi.nlm.nih.gov/2738792/' target='_blank'>[Journal of Pediatrics, 1989]</a>
					<a href='https://sci-hub.se/10.1016/s0022-3476(89)80323-3' target='_blank'>[Full Text]</a>
				</div>
			</div>
		</div>
		<br>
		<div class="card-container">
			<div class="card">
				<h3>Median Allergy Outgrowth Age in the First 8 Years of Life</h3>
				<div class="chart">
					<Chart options = { eightYearOptions } />
				</div>
			</div>
			<div class="card">
				<p>115 babies with atopic dermatitis and at least one allergy to cow's milk, egg, or wheat were monitored for eight years. 66 (57%) of children outgrew their allergies by age eight. The median ages for allergen tolerance were:</p>
				<ul>
					<li>Cow's Milk - 7 years, 11 months</li>
					<li>Egg - 6 years, 6 months</li>
					<li>Wheat - 7 years, 2 months</li>
				</ul>
				<div class='center-text'>
					<a href='https://pubmed.ncbi.nlm.nih.gov/15636401/' target='_blank'>[European Review for Medical and Pharmacological Sciences, 2004]</a>
				</div>
			</div>
		</div>
		<br>
		<div class='wide-content-wrapper'>
			<div class='wide-content'>
				<h3>Food Reintroduction Ladders</h3>
				<p>Reintroduction ladders can determine if a child now tolerates a food to which they have had a non-IgE mediated (delayed) reaction. You must not start a reintroduction ladder unless your child's physician explicitly advises it. Reintroduction ladders are unsafe for children with IgE-mediated (immediate) allergic reactions.</p>
				<p>Reintroduction ladders use a stepped approach to introducing an allergen. The food is cooked differently on each ladder rung to break it down a certain amount. The child eats an increasing amount of the food each day while on that ladder rung. They can move on to the next rung if they do not react to the food.</p>
				<p>Here are some sample reintroduction ladders. You should use the ladder that your child's physician prescribes.</p>
			</div>
		</div>
		<div class='card-container wide-content'>
			<div class='card'>
				<h4 class='center-text'>North American Ladders</h4>
				<div class='center-text'>
					<a href='https://www.bcchr.ca/foodallergy/resources/canadian-food-ladders' target='_blank'>Canadian Milk & Egg Ladders</a>
				</div>
				<div class='center-text'>
					<a href='https://www.freetofeed.com/reintroduction-ladders' target='_blank'>Free to Feed Milk, Egg, Wheat & Soy Ladders</a>
				</div>
				<div class='center-text'>
					<a href='https://gpifn.files.wordpress.com/2019/10/imap_final_ladder-may_2017_original.pdf' target='_blank'>iMAP Milk Ladder</a>
				</div>
			</div>
			<div class='card'>
				<h4 class='center-text'>UK Ladders</h4>
				<div class='center-text'>
					<a href='https://allergynorthwest.nhs.uk/home-patient/managing-allergies/patient-leaflets/cows-milk-reintroduction-milk-ladder-2/' target='_blank'>UK Milk Ladder</a>
				</div>
				<div class='center-text'>
					<a href='https://www.imperial.nhs.uk/-/media/website/patient-information-leaflets/childrens-services/childrens-allergy/soya-ladder.pdf?rev=58856e1a9a0d4f5f81208b61e5d09e4f&sc_lang=en' target='_blank'>UK Soya Ladder</a>
				</div>
				<div class='center-text'>
					<a href='https://www.imperial.nhs.uk/-/media/website/patient-information-leaflets/childrens-services/childrens-allergy/wheat-ladder.pdf?rev=9d05effe365a46579f68b0fbc37d8f03&sc_lang=en' target='_blank'>UK Wheat Ladder</a>
				</div>
			</div>
		</div>
		<br>
		<br>
		<br>
	</div>
</div>

<style lang='scss'>
	@import './theme/style.scss';
</style>
