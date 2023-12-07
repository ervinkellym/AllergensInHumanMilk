<script>

	import { Chart } from 'svelte-echarts';

	let dark_teal = '#114d5f';
	let med_teal = '#8fd7e0';
	let light_teal = '#d2f3f7';
	let dark_yellow = '#9b810b';
	let light_yellow = '#fbe093';
	let fg_gray = '#2b2b2b';

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
				radius: ['40%', '105%'],
				center: ['50%', '85%'],
				startAngle: 180,
				label: {
					show: true,
					position: 'inside',
					formatter(param) { return param.percent * 2 + '%'; }
				},
				data: [
					{ 
						value: 51, name: 'Don\'t Avoid Allergen', 
						itemStyle: { color: med_teal, borderColor: fg_gray } 
					},
					{ 
						value: 18, name: 'Avoid Allergen', 
						itemStyle: { color: light_yellow, borderColor: fg_gray } 
					},
					{ 
						value: 31, name: 'Not Addressed', 
						itemStyle: { color: dark_yellow, borderColor: fg_gray } 
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
		<h2>[Page Title]</h2>
		<div class='text-img-container wide-content-wrapper'>
			<div class='text-with-img medium-content'>
				<h3>What is this site?</h3>
				<p> A resource for chestfeeding parents of food reactive infants who may be considering removing common food allergens from their diet.</p>
				<p>This website is intended as a resource rather than a diagnostic tool and does not constitute medical advice. Always consult with your and your child's medical care teams before taking action that may affect the health of you or your child.</p>
			</div>
			<div class='img-with-text'>
				<img src={ YellowBlueChestfeeding } alt=''>
			</div>
		</div>
		<div class='wide-content-wrapper'>
			<div class='wider-content'>
				<h3>How do I use this site?</h3>
				<p>The different pages here can aid you through your entire infant food reactivity/allergy journey.</p>
				<h4 style="color: {dark_yellow};">Useful if you are currently chestfeeding:</h4>
				<h4>1) Signs & Symptoms</h4>
				<p>What infant food reactivity looks like and the different types of allergies/sensitivities that commonly affect chestfed infants.</p>
				<h4>2) Protein Persistence</h4>
				<p>Interactive visuals so you can determine how long allergenic or triggering food proteins will remain in your milk after consumption. These can be filtered by food so you can customize the visuals to whichever foods you are concerned about.</p>
				<h4 style="color: {dark_yellow};">Useful for parents of allergic children at any age:</h4>
				<h4>3) Reintroduction</h4>
				<p>Information about how many children with allergies to different foods as infants will outgrow them as well as reintroduction ladders for major food allergens. This information can help you throughout your experience with infant and childhood food allergies.</p>

				<h3>Why is this information important?</h3>
				<p>[Content]</p>
			</div>
		</div>
		<div>
			<div class="card-container">
				<div class="card">
					<h3>Physician Recommendations for Chestfeeding Infants with Allergies</h3>
					<div class="chart">
						<Chart { options } bind:this={pieChart}/>
					</div>
				</div>
				<div class="card">
					<p>[How to read this chart, information about the study it is derived from]</p>
				</div>
			</div>
		</div>
		<div class='wide-content-wrapper'>
			<div class='wider-content'>
				<h3>Where is the data from?</h3>
				<p>[Content]</p>
			</div>
		</div>
		<br>
		<div class='center-text'>
			<a href="https://github.com/ervinkellym/AllergensInHumanMilk">About This Project</a>
		</div>
	</div>
</div>

<style lang='scss'>
	@import './theme/style.scss';
</style>