<script>
	import Header from '../lib/Header.svelte';
	import Menu from '../lib/Menu.svelte';
    import Contact from '../lib/Contact.svelte';
	import Footer from '../lib/Footer.svelte';
	import { Icon } from 'svelte-awesome';
	import { globe } from 'svelte-awesome/icons';
</script>

<svelte:head>
      <title>Reach</title>
</svelte:head>

<Header />
<Menu />
<main class="main">
	<div class="flex flex-col items-center bg-transparent py-3 sm:py-8 justify-start px-6">
		<Contact />
		<div class="max-w-xl mx-auto pt-8 pb-4 text-sm text-justify">
			<div>
				<span class="float-left text-6xl pr-2">E</span>mma first moved to Charleston in
				<span class="font-semibold">2009</span>, to enroll in the M.S. Environmental Studies program
				the
				<span class="font-semibold">College of Charleston</span>. Throughout her time in graduate
				school, Emma learned the history &amp; science of the
				<span class="font-semibold">Coastal Estuarine environment</span>
				that is unique to our beautiful Lowcountry; this was the origin of her personal love for this place.
				<br /><br />
				Over the years, Emma has pursued her career in
				<a
					href="https://en.wikipedia.org/wiki/Geographic_information_system"
					target="_blank"
					class="bhhs hover:text-red-700 font-semibold"
					>Geographic Information Systems <Icon data={globe} /></a
				>
				&amp; programming, taking on several opportunities to dig deeper into the geography of Charleston,
				as well as some of the challenges we face as a community—most notably regarding flooding in light
				of Climate Change. To that end, Emma brings her technical skills &amp; academic/professional background
				in
				<span class="font-semibold">Resiliency &amp; Sustainability</span> to the field of Real Estate,
				with the intent of providing as much added value to her clients as she can.
			</div>
		</div>
	</div>
</main>
<Footer />
