<script>

	import Paper, { Title, Subtitle, Content } from '@smui/paper';

</script>

<div class="paper-container">
	<Paper variant="unelevated" color="primary">
		<Title>Allergies</Title>
		<Content>IgE & Non-IgE Mediated</Content>
		<Title>What Else Could it Be?</Title>
		<Content>GERD</Content>
		<Content>Vaccines & Illnesses</Content>
	</Paper>
</div>

<style>
	.paper-container{
		margin: 0 auto;
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		justify-content: center;
	}

	.card {
		padding: 20px 30px;
		background-color: #faf9f6;
	}

	/* .chart {
		height: 300px;
		width: 100%;
	} */

	* {
		padding: 0;
		margin: 0;
	  	-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
</style>