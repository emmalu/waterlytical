<script>
  import Header from '../lib/Header.svelte';
  import Menu from '../lib/Menu.svelte';
  import Footer from '../lib/Footer.svelte';
  import logo from '../assets/logos/ep.svg';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- <Header /> -->
<Menu />
<main class="main my-10 py-20 align-middle text-center">
    <h1 class="text-7xl pt-20 pb-10">HYDROMAPIC</h1>
    <div class="pb-20">
    <a href="#/map" class="button rounded-full drop-shadow-lg py-2 px-4 bg-black text-slate-100 hover:bg-slate-600 hover:text-white">Enter &rArr;</a>
    </div>
    <div class="flex flex-col text-center items-center">
      <span class="block text-xs">A project by Coastal Vantage.</span>
      <img class="justify-center w-24" src={logo} alt="MapMazeLu logo"/>
    </div>
</main>
<Footer />

