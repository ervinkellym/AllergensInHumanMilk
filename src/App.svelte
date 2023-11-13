<script>
  // Svelte Material UI Components
  import Tab, { Icon, Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  // Import & set up tab card content
	import Home from "./Home.svelte";
	import SignsSymptoms from "./SignsSymptoms.svelte";
	import ProteinPersistence from "./ProteinPersistence.svelte";
	import Reintroduction from "./Reintroduction.svelte";
  export const TABS = ['Home', 'Signs & Symptoms', 'Protein Persistence', 'Reintroduction'];
  let active = 'Home';
</script>

<main>
  <h1>Title</h1>
  <div>
    <TabBar tabs={TABS} let:tab bind:active>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
    {#if active === 'Home'}
      <Home/>
    {:else if active === 'Signs & Symptoms'}
      <SignsSymptoms/>
    {:else if active === 'Protein Persistence'}
      <ProteinPersistence/>
    {:else if active === 'Reintroduction'}
      <Reintroduction/>
    {:else}
      <Home/>
    {/if}
  </div>
  <div id="footer">
    <a href="https://github.com/ervinkellym/AllergensInHumanMilk">about this project</a>
  </div>
</main>

<style>
  #footer {
  position:fixed;
  text-align: center;
  left:0px;
  bottom:0px;
  height:30px;
  width:100%;
  background:#114d5f;
}
</style>