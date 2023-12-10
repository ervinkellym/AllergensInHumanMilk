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
	import WheatTimeSeries from '/src/assets/GliadinTimeSeries.jpeg';
	import PeanutTimeSeries from '/src/assets/PeanutTimeSeries.jpeg';

	$: peakData = [
		{
			value: 4, name: "Cow's Milk",
			title: { show: false },
			detail: { valueAnimation: true, offsetCenter: ['0%', '-20%'] },
			itemStyle: { color: dark_teal, opacity: milkChecked },
		},
		{
			value: 5, name: 'Egg',
			title: { show: false },
			detail: { valueAnimation: true, offsetCenter: ['0%', '10%'] },
			itemStyle: { color: light_yellow, opacity: eggChecked },
		},
		{
			value: 4, name: 'Wheat',
			title: {  show: false  },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: med_teal, opacity: wheatChecked },
		},
		{
			value: 2, name: 'Peanut',
			title: {  show: false  },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: dark_yellow, opacity: peanutChecked },
		},
		{
			name: "Hours",
			title: { offsetCenter: ['0%', '0%'] }
		},							
	];

	$: peakOptions = { 
		tooltip: { formatter: function(value) { 
			switch (value.name) {
				case "Cow's Milk":
					return "Cow's Milk: 2-6 hours";
				case "Egg":
					return "Egg: 4-6 hours";
				case "Wheat":
					return "Wheat: 2-4 hours";
				case "Peanut":
					return "Peanut: 1-2 hours";
				default:
				return value.name + ': ' + value.value + ' hours'; 
			}
		} },
		series: [{
			type: 'gauge',
			radius: '90%',
			min: 0, max: 24, splitNumber: 8,
			startAngle: 90, endAngle: -270,
			pointer: { show: false },
			progress: {
				show: true,
				overlap: false,
				roundCap: true,
				itemStyle: { borderWidth: 1, borderColor: '#2b2b2b' }
			},
			axisLine: { lineStyle: { width: 80 } },
			splitLine: { show: true, distance: 0, length: 10 },
			axisTick: { show: true, distance: 0, splitNumber: 3 },
			axisLabel: { 
				show: true, 
				distance: 85, 
				formatter: function(value) { return value == 24 ? '' : value; } 
			},
			data: peakData,
			title: { show: true },
			detail: { show: false },
		}]
	};

	$: untraceableData = [
		{
			value: 6, name: "Cow's Milk",
			title: { show: false },
			detail: { valueAnimation: true, offsetCenter: ['0%', '-20%'] },
			itemStyle: { color: dark_teal, opacity: milkChecked },
		},
		{
			value: 24, name: 'Egg',
			title: { show: false },
			detail: { valueAnimation: true, offsetCenter: ['0%', '10%'] },
			itemStyle: { color: light_yellow, opacity: eggChecked },
		},
		{
			value: 72, name: 'Wheat',
			title: { show: false },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: med_teal, opacity: wheatChecked },
		},
		{
			value: 72, name: 'Wheat',
			title: { show: false },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: med_teal, opacity: wheatChecked },
		},
		{
			value: 72, name: 'Wheat',
			title: { show: false },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: med_teal, opacity: wheatChecked },
		},
		{
			value: 8, name: 'Peanut',
			title: { show: false },
			detail: { valueAnimation: true, offsetCenter: ['0%', '40%'] },
			itemStyle: { color: dark_yellow, opacity: peanutChecked },
		},
		{
			name: "Hours",
			title: { offsetCenter: ['0%', '0%'] }
		},							
	];

	$: untraceableOptions = {
		tooltip: { formatter: function(value) { return value.name + ': ' + value.value + ' hours'; } }, 
		series: [{
			type: 'gauge',
			radius: '90%',
			min: 0, max: 24, splitNumber: 8,
			startAngle: 90, endAngle: -270,
			pointer: { show: false },
			progress: {
				show: true,
				overlap: false,
				roundCap: true,
				itemStyle: { borderWidth: 1, borderColor: '#2b2b2b' },
				clip: false
			},
			axisLine: { lineStyle: { width: 80 } },
			splitLine: { show: true, distance: 0, length: 10 },
			axisTick: { show: true, distance: 0, splitNumber: 3 },
			axisLabel: { 
				show: true, 
				distance: 85, 
				formatter: function(value) { return value == 24 ? '' : value; } 
			},
			data: untraceableData,
			title: { show: true },
			detail: { show: false },
		}],
	};

</script>

<main>
	<div class="tab-content">
		<div class='tab-inner'>
			<div class='wide-content-wrapper'>
				<div class='wide-content'>
					<h2>How Long Do Allergens Stay In My Milk?</h2>
					<p>The rings below show the time after eating an allergenic food until its concentration peaks and until it is undetectable in milk. You can use this information to help determine:</p>
					<ul>
						<li>Which foods in your diet your baby may be allergic to.</li>
						<li>How long you are comfortable waiting to feed your baby after eating a food your baby is allergic to.</li>
					</ul>
				</div>
			</div>
			<br>
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
			<div class='wide-content'>
				<div class="card-container">
					<div class="card">
						<h3>Time to Peak Concentration</h3>
						<div class="chart" style="max-width: 400px;" sr-only='TODO'>
							<Chart options = { peakOptions } bind:this = { chart1 }/>
						</div>
						<h4>After consumption, these allergens peak in human milk within</h4>
						<ul style="padding: 0px 30px 20px 40px">
							<li>Cow's Milk: 2-6 hours</li>
							<li>Egg: 4-6 hours</li>
							<li>Wheat: 2-4 hours</li>
							<li>Peanut: 1-2 hours</li>
						</ul>
					</div>
					<div class="card">
						<h3>Time to Undetectable Concentration</h3>
						<div class="chart" style="max-width: 400px;" sr-only='TODO'>
							<Chart options = { untraceableOptions } bind:this = { chart2 }/>
						</div>
						<h4>After consumption, these allergens are untraceable in human milk within</h4>
						<ul style="padding: 0px 30px 20px 40px">
							<li>Cow's Milk: 6 hours</li>
							<li>Egg: Less than 24 hours</li>
							<li>Wheat: Less than 72 hours</li>
							<li>Peanut: 8 hours</li>
						</ul>
					</div>
				</div>
				<p>How much, if any, allergen transfers to the milk depends on the person, the food, its preparation, and the amount consumed. Use this information as a starting point rather than a definitive indicator of how your body and your milk will affect your baby. Detailed information about each allergen, including data sources, is available by clicking or tapping the buttons next to the checkboxes.</p>
			</div>
			<br>
			<br>
			<br>
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
    	<p>Multiple studies determined the times displayed on this page. The most well-constructed studies were used to determine the time for an allergen to peak & become untraceable in human milk. </p>
		<h4>Excretion of Dietary Cow's Milk Derived Peptides Into Breast Milk</h4>
		<p>One study lasted for five days, where a participant drank 6.75oz of Cow's milk each day and collected their milk twice per day, as convenient. On one of the days, they also collected their milk every hour for six hours after drinking the Cow's milk. The Cow's milk protein peaked at two hours and was untraceable at six hours. Below, you can see the six-hour time series chart from the study.</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ BLactoTimeSeries } alt='TODO'>
			</div>
		</div>
		<div class='center-text'>
			<a href='https://pubmed.ncbi.nlm.nih.gov/30931311/' target='_blank'>[Frontiers in Nutrition, 2019]</a>
			<a href='https://sci-hub.se/10.3389/fnut.2019.00025' target='_blank'>[Full Text]</a>
		</div>
    	<h4>The Passage of Maternal Dietary Proteins into Human Breast Milk</h4>
		<p>Another study has participants draink 8oz of Cow's milk mixed with one raw Egg and collected their milk every two hours for six hours afterwards. 10 of the 19 participants transferred the Cow's milk protein (Beta-Lactoglobulin) to their milk. The protein concentration peaked between four and six hours. This study did not determine when it became untraceable.</p>
		<div class='center-text'>
			<a href='https://pubmed.ncbi.nlm.nih.gov/6746107/' target='_blank'>[International Archives of Allergy and Immunology, 1984]</a>
			<a href='https://sci-hub.se/10.1159/000233582' target='_blank'>[Full Text]</a>
		</div>
		<h4>More Resources</h4>
		<p>Free To Feed contains additional information on allergenic protein transfer:</p>
		<div class='center-text'>
			<a href='https://www.freetofeed.com/true-false-allergens-in-breast-milk' target='_blank'>Free to Feed Transferability Research</a>
			<a href='https://www.freetofeed.com/timing?locale=en' target='_blank'>Free to Feed Timing Breakdown</a>
		</div>
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
    	<p>Multiple studies determined the times displayed on this page. The most well-constructed studies were used to determine the time for an allergen to peak & become untraceable in human milk. </p>
		<h4>Effect of Maternal Egg Consumption on Breast Milk Ovalbumin Concentration</h4>
		<p>In one study, participants consumed one egg baked into a muffin each day for three weeks. On days 3, 12, and 23 of the study, they collected their milk every two hours for six hours after eating the egg-muffin. 75% of participants transferred the egg protein (Ovalbumin) into their milk. However, the amount of egg protein in their milk did not increase over the course of the study, indicating that egg proteins are no longer present in milk less than 24 hours after consumption. </p>
		<div class='center-text'>
			<a href='https://pubmed.ncbi.nlm.nih.gov/18498416/' target='_blank'>[Clinical & Experimental Allergy, 2008]</a>
			<a href='https://sci-hub.se/10.1111/j.1365-2222.2008.03014.x' target='_blank'>[Full Text]</a>
		</div>
		<h4>The Passage of Maternal Dietary Proteins into Human Breast Milk</h4>
		<p>Another study has participants drink 8oz of Cow's milk mixed with one raw egg and collected their milk every two hours for six hours afterwards. 13 of the 22 participants transferred the egg protein (Ovalbumin) into their milk. The protein concentration peaked between four and six hours. This study did not determine when it became untraceable.</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ FourXOvaTimeSeries } alt='TODO'>
			</div>
		</div>
		<div class='center-text'>
			<a href='https://pubmed.ncbi.nlm.nih.gov/6746107/' target='_blank'>[International Archives of Allergy and Immunology, 1984]</a>
			<a href='https://sci-hub.se/10.1159/000233582' target='_blank'>[Full Text]</a>
		</div>
		<h4>Effect of Cooked and Raw Egg Consumption on Ovalbumin Content of Human Milk</h4>
		<p>In a third study, 41 participants, on separate occasions, consumed no eggs, one raw egg, one half of an egg baked in a muffin, and one whole egg baked in a muffin. They collected their milk every two hours for eight hours afterwards. Time series data for these four groups can be seen in the chart below.</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ EggFourWaysTimeSeries } alt='TODO'>
			</div>
		</div>
		<p>Proteins can transfer in different ways depending on how broken down they are. Cooking foods breaks down the allergenic proteins. In each group, different amounts of participants transferred the egg protein (Ovalbumin):</p>
		<ul style="padding: 0px 30px 20px 40px">
			<li>No Egg: 3/41 (7%) had egg protein in their milk</li>
			<li>1 Raw Egg: 22/41 (54%) had egg protein in their milk</li>
			<li>1/2 Baked Egg: 19/41 (46%) had egg protein in their milk</li>
			<li>1 Baked Egg: 28/41 (68%) had egg protein in their milk</li>
		</ul>
		<div class='center-text'>
			<a href='https://pubmed.ncbi.nlm.nih.gov/15725188/#:~:text=The%20peak%20concentration%20and%20total,h%20after%20any%20egg%20challenge.' target='_blank'>[Clinical & Experimental Allergy, 2005]</a>
			<a href='https://sci-hub.se/10.1111/j.1365-2222.2005.02170.x' target='_blank'>[Full Text]</a>
		</div>
		<h4>More Resources</h4>
		<p>Free To Feed contains additional information on allergenic protein transfer:</p>
		<div class='center-text'>
			<a href='https://www.freetofeed.com/true-false-allergens-in-breast-milk' target='_blank'>Free to Feed Transferability Research</a>
			<a href='https://www.freetofeed.com/timing?locale=en' target='_blank'>Free to Feed Timing Breakdown</a>
		</div>
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
    	<p>Multiple studies determined the times displayed on this page. The most well-constructed studies were used to determine the time for an allergen to peak & become untraceable in human milk. </p>
		<h4>Passage of Gliadin into Human Breast Milk</h4>
		<p>In this study, 53 participants then ingested a meal containing 20g of wheat, then collected their milk afterwards. Peak wheat protein (Gliadin) concentration in their milk occured 2-4 hours after ingestion.</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ WheatTimeSeries } alt='TODO'>
			</div>
		</div>
		<div class='center-text'>
			<a href='https://pubmed.ncbi.nlm.nih.gov/3300148/' target='_blank'>[Acta Paediatrica, 1987]</a>
			<a href='https://sci-hub.se/10.1203/00006450-198607000-00068' target='_blank'>[Full Text]</a>
		</div>
		<h4>Presence of High Levels of Non-Degraded Gliadin in Breast Milk from Healthy Mothers</h4>
		<p>In this study, 49 participants with unrestricted diets collected their milk and wheat protein (Gliadin) was detected in all of the samples. Six of those participants went on a wheat-free diet for three days and wheat protein (Gliadin) was no longer detectable in their milk. Gliadin could take much less time than 72 hours to become untraceable in human milk but this study design did not collect that information.</p>
		<div class='center-text'>
			<a href='https://pubmed.ncbi.nlm.nih.gov/3300148/' target='_blank'>[Scandanavian Journal of Gastroenterology, 1998]</a>
			<a href='https://sci-hub.se/10.1080/00365529850172557' target='_blank'>[Full Text]</a>
		</div>
		<h4>More Resources</h4>
		<p>Free To Feed contains additional information on allergenic protein transfer:</p>
		<div class='center-text'>
			<a href='https://www.freetofeed.com/true-false-allergens-in-breast-milk' target='_blank'>Free to Feed Transferability Research</a>
			<a href='https://www.freetofeed.com/timing?locale=en' target='_blank'>Free to Feed Timing Breakdown</a>
		</div>
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
    	<p>Only one well-constructed study was available for peanut protein transfer to human milk:</p>
		<h4>Detection of Peanut Allergens in Breast Milk of Lactating Women</h4>
		<p>In this study, 23 participants collected their milk, then ingested 50g of dry roasted peanuts, then collected their milk 1, 2, 3, 4, 6, 8, and 12 hours afterwards. 11 (48%) of participants passed peanut proteins (Ara h 1 and Ara h2) into their milk. Below is a time series chart of the peanut protein concentration for those 11 participants.</p>
		<div class='text-img-container'>
			<div class='img-with-text'>
				<img src={ PeanutTimeSeries } alt='TODO'>
			</div>
		</div>
		<div class='center-text'>
			<a href='https://pubmed.ncbi.nlm.nih.gov/11277829/' target='_blank'>[Journal of the American Medical Association, 2001]</a>
			<a href='https://sci-hub.se/10.1001/jama.285.13.1746' target='_blank'>[Full Text]</a>
		</div>
		<h4>More Resources</h4>
		<p>Free To Feed contains additional information on allergenic protein transfer:</p>
		<div class='center-text'>
			<a href='https://www.freetofeed.com/true-false-allergens-in-breast-milk' target='_blank'>Free to Feed Transferability Research</a>
			<a href='https://www.freetofeed.com/timing?locale=en' target='_blank'>Free to Feed Timing Breakdown</a>
		</div>
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
