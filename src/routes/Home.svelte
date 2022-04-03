<script>
  import Header from '../lib/Header.svelte';
  import Menu from '../lib/Menu.svelte';
  import Footer from '../lib/Footer.svelte';
  import bhhs_logo from '../assets/logos/bhhs-cover.png';
  import cv_logo from '../assets/logos/logo-am.svg';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

  <Header />
  <Menu />
  <main class="main py-7 sm:py-12 align-middle">
    <div class="grid grid-cols-1 py-1 place-items-center text-center">
      <div class="col-span-1">
        <img class="w-72 sm:w-96" src={bhhs_logo} alt="BHHS logo" />
      </div>
      <div class="col-span-1 pt-6">
        <img class="w-36 sm:w-48" src={cv_logo} alt="Coastal Vantage logo" />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-11/12 sm:w-1/3 rounded-xl drop-shadow-xl bg-gray-100 h-18 contents-center">
        <div class="py-7 text-center text-sm sm:text-md">
          A <span class="animate-pulse cycle font-semibold" /> view of our Lowcountry
        </div>
      </div>
    </div>
</main>
<Footer />

