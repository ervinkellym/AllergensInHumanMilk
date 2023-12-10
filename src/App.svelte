<script>
  // Svelte Material UI Components
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  // Import & set up tab card content
	import Home from "./Home.svelte";
	import SignsSymptoms from "./SignsSymptoms.svelte";
	import ProteinPersistence from "./ProteinPersistence.svelte";
	import Reintroduction from "./Reintroduction.svelte";
  export const TABS = ['Home', 'Signs & Symptoms', 'Allergen Timelines', 'Reintroduction'];
  let active = 'Home';

  import TealMountains from '/src/assets/TealMountains.jpeg';

</script>

<main>
  <h1>[Title]</h1>
  <div class='tab-div'>
      <TabBar tabs={TABS} let:tab bind:active>
          <Tab {tab}>
              <Label>{tab}</Label>
          </Tab>
      </TabBar>
      {#if active === 'Home'}
          <Home/>
      {:else if active === 'Signs & Symptoms'}
          <SignsSymptoms/>
      {:else if active === 'Allergen Timelines'}
          <ProteinPersistence/>
      {:else if active === 'Reintroduction'}
          <Reintroduction/>
      {:else}
          <Home/>
      {/if}
  </div>
</main>

<style>
  .tab-div {
      max-width: 1100px;
      margin: 0 auto;
  }
</style>