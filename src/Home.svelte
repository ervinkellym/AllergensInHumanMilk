<script>

	import { Chart } from 'svelte-echarts';

	let dark_teal = '#114d5f';
	let med_teal = '#8fd7e0';
	let light_teal = '#d2f3f7';
	let dark_yellow = '#9b810b';
	let light_yellow = '#fbe093';
	let fg_white = '#faf9f6';
	let fg_gray = '#2b2b2b';

	const adviceOptions = {
		grid: { left: '5%', top: 0, right: '5%', bottom: 0 },
		tooltip: { 
			trigger: 'item',
			formatter: (param) => {
			  switch(param.value) {
			    case 51: return "Don't Avoid Allergen (51%)";
			    case 18: return "Avoid Allergen (18%)";
			    case 31: return "Not Addressed (31%)";
			    default: return "invalid";
			  }
			}
		},
		legend: {},
		xAxis: { show: false },
		yAxis: { type: 'category', show: false },
		series: [
			{
				name: 'Don\'t Avoid Allergen',
				type: 'bar',
				stack: 'a',
				label: { show: true, formatter(param) { return param.value + '%'; }, },
				emphasis: { focus: 'series' },
				data: [51],
				itemStyle: { color: dark_teal, borderColor: fg_white } 
			},
			{
				name: 'Avoid Allergen',
				type: 'bar',
				stack: 'a',
				label: { show: true, formatter(param) { return param.value + '%'; } },
				emphasis: { focus: 'series' },
				data: [18],
				itemStyle: { color: dark_yellow, borderColor: fg_white } 
			},
			{
				name: 'Not Addressed',
				type: 'bar',
				stack: 'a',
				label: { show: true, formatter(param) { return param.value + '%'; } },
				emphasis: { focus: 'series' },
				data: [31],
				itemStyle: { color: fg_gray, borderColor: fg_white } 
			},
		]
	}

	const options = {
		tooltip: { 
			trigger: 'item',
			formatter: (param) => param.name + ' (' + param.percent * 2 + '%)'
		},
		legend: {
			top: '5%',
			left: 'center',
			// doesn't perfectly work with our tricks, disable it
			selectedMode: false
		},
		series: [
			{
				type: 'pie',
				radius: ['40%', '95%'],
				center: ['50%', '75%'],
				startAngle: 180,
				label: {
					show: true,
					position: 'inside',
					formatter(param) { return param.percent * 2 + '%'; }
				},
				data: [
					{ 
						value: 50, name: 'Don\'t Avoid Allergen', 
						itemStyle: { color: dark_teal, borderColor: fg_white } 
					},
					{ 
						value: 19, name: 'Avoid Allergen', 
						itemStyle: { color: dark_yellow, borderColor: fg_white } 
					},
					{ 
						value: 31, name: 'Not Addressed', 
						itemStyle: { color: fg_gray, borderColor: fg_white } 
					},
					{
						value: 100, // make an record to fill the bottom 50%
						itemStyle: { // stop the chart from rendering this piece
							color: 'none',
							decal: { symbol: 'none' }
						},
						label: { show: false },
					},
				]
			}
		]
	};

	import YellowBlueChestfeeding from '/src/assets/YellowBlueChestfeeding.jpeg';

	let pieChart;

</script>

<div class="tab-content">
	<div class='tab-inner'>
		<div class='text-img-container wide-content-wrapper'>
			<div class='text-with-img medium-content'>
				<h3>What is this site?</h3>
				<p>A resource for parents of infants consuming human milk (breastfeeding, chestfeeding, and drinking pumped milk) who may have infant food allergies.</p>
				<p>This site is not a diagnostic tool and does not constitute medical advice. Always consult with a physician before making changes that may affect your or your child's health.</p>
			</div>
			<div class='img-with-text'>
				<img src={ YellowBlueChestfeeding } alt=''>
			</div>
		</div>
		<div class='wide-content-wrapper'>
			<div class='wider-content'>
				<h3>How do I use this site?</h3>
				<h4 style="color: {dark_yellow};">Useful if you are currently breastfeeding, chestfeeding, or feeding pumped milk:</h4>
				<h4>1) Signs & Symptoms</h4>
				<p>Symptoms of infant food allergies and other possible causes of those symptoms.</p>
				<h4>2) Protein Persistence</h4>
				<p>Interactive visuals showing how long allergenic food proteins may stay in your milk after consumption. These can be filtered by food so that you can customize the visuals to your child's allergies.</p>
				<h4 style="color: {dark_yellow};">Useful for all parents of children with food allergies:</h4>
				<h4>3) Reintroduction</h4>
				<p>How many children with infant & childhood food allergies will outgrow them and reintroduction ladders for major food allergens.</p>

				<h3>Why is this information important?</h3>
				<p>This subject is underresearched, and the available research is difficult for most people to access and understand. Many physicians lack education in this area, so recommendations can vary, and some advice based on outdated knowledge can even be harmful.</p>
			</div>
		</div>
		<div>
			<div class="card-container">
				<div class="card">
					<h3>Physician Recommendations for Chestfeeding Infants with Allergies</h3>
					<div class="chart">
						<Chart options={ options } bind:this={pieChart}/>
					</div>
				</div>
				<div class="card">
					<p>Researchers asked 124 lactating parents what their healthcare provider advised after their infant was diagnosed with a food allergy:</p>
					<ul>
						<li>63 (50%) were told to continue consuming the allergen.</li>
						<li>23 (19%) were told to avoid the allergen.</li>
						<li>38 (31%) were given no guidance.</li>
					</ul>
					<div class='center-text'>
						<a href='https://www.annallergy.org/article/S1081-1206(21)00133-2/fulltext' target='_blank'>[Annals of Allergy, Asthma, and Immunology, 2021]</a>
					</div>
					<p>Feeding your child your milk while consuming a food they are allergic to could be harmful. Before making any dietary changes, consult with a physician.</p>
				</div>
			</div>
		</div>
		<div class='wide-content-wrapper'>
			<div class='wider-content'>
				<h3>Where is the data from?</h3>
				<p>The data in this website were gathered from various research papers and journal articles. Sources are linked throughout this website.</p>
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