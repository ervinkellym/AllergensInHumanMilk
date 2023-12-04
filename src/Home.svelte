<script>

	import { Chart } from 'svelte-echarts';

	const options = {
		tooltip: {},
		series: [
			{
				type: 'pie',
				clockwise: true,
				label: {
					position: 'outside',
					fontSize: 18,
					color: '#2b2b2b'
				},
				data: [
					{ value: 51, name: 'No Dietary\nRestriction' },
					{ value: 18, name: 'Avoidance\nof Allergen' },
					{ value: 31, name: 'Concern Not\nAddressed' },
				],
				itemStyle: {
					opacity: 0.7,
					color: '#8fd7e0',
					borderWidth: 1,
					borderColor: '#2b2b2b'
				}
			}
		]
	};

	import YellowBlueChestfeeding from '/src/assets/YellowBlueChestfeeding.jpeg';

	let pieChart;

</script>

<div class="tab-content">
	<h2>[Page Title]</h2>
	<div class='text-img-container'>
		<div class='text-with-img'>
			<h3>What is this website?</h3>
			<p> This website is a resource for parents of chestfed infants who are experiencing infant food reactivity and have or are currently avoiding or considering avoiding certain foods their infant may be reacting to.</p>
			<p>[Not Medical Advice Disclaimer]</p>
		</div>
		<div class='img-with-text'>
			<img src={ YellowBlueChestfeeding } alt=''>
		</div>
	</div>
	
	<div>
		<h3>How do I use this website?</h3>
		<p>There are three pages here to carry you through your entire infant food reactivity & potential food allergy journey. The first two pages will be most useful to parents who are currently feeding their infants human milk. The third page, Reintroduction, will be useful to any parent of a young child with food allergies. The three pages are:</p>
		<h4>1) Signs & Symptoms</h4>
		<p>Information about what infant food reactivity looks like. Causes of this reactivity, mainly focusing on infant food allergies, CMPA, and MSPI.</p>
		<h4>2) Protein Persistence</h4>
		<p>Interactive visuals so you can determine how long allergenic or triggering food proteins will remain in your milk after consumption. These can be filtered by food so you can customize the visuals to whichever foods you are concerned about.</p>
		<h4>3) Reintroduction</h4>
		<p>Information about how many children with allergies to different foods as infants will outgrow them as well as reintroduction ladders for major food allergens. This information can help you throughout your experience with infant and childhood food allergies.</p>

		<h3>Why is this information important?</h3>
		<p>[Content]</p>
		<div class="card-container">
			<div class="card">
				<h3>Physician Recommendations for Chestfeeding Infants with Allergies</h3>
				<div class="chart">
					<Chart class="chart" { options } bind:this={pieChart}/>
				</div>
			</div>
			<div class="card">
				<p>[How to read this chart, information about the study it is derived from]</p>
			</div>
		</div>
	</div>
	<div>
		<h3>Where is the data from?</h3>
		<p>[Content]</p>
	</div>
</div>

<style lang='scss'>
	@import './theme/style.scss';
</style>