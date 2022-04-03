<script>
    import axios from 'axios';
    import {onMount} from 'svelte';
    import Header from '../lib/Header.svelte';
	// @ts-ignore
	import Contact from '../lib/Contact.svelte';
	import Menu from '../lib/Menu.svelte';
    import Footer from '../lib/Footer.svelte';
	import { Icon } from 'svelte-awesome';
	import { spinner } from 'svelte-awesome/icons';
	
    let lists = [];

    const rootUrl = 'https://cv-notion.herokuapp.com';
    const config = {
        method: 'get',
        url: `${rootUrl}/lists`,
    };
    onMount(async () => {
        // @ts-ignore
        const response = await axios(config);
        const data = response.data;
        if (data) {
            lists = data;
        } else {
            console.log('error');
        }
        return {
            status: 404,
            error: 'error'
        };
    });

</script>

<svelte:head>
	<title>Lists</title>
</svelte:head>

<Header />
<Menu />
<main class="main">
	<div class="flex flex-col py-7 sm:py-12 items-center">
		<h2 class="block pb-4 font-bold">Curated Property Lists</h2>
		{#if lists.length === 0}
			<Icon data={spinner} pulse/>
			<span class="animate-pulse text-gray-600">Loading...</span>
		{:else if lists.length > 0}
			<div class="grid grid-rows-{lists.length} md:grid-rows-{lists.length/2} md:grid-flow-col items-center gap-4 py-4">
				{#each lists as list}
					<div class="items-center text-center w-72 bg-gray-100 hover:bg-yellow-100 rounded-xl drop-shadow-2xl drop-shadow-amber-100 px-2 py-4">
						<a href={list.url} target="_blank" class="items-center bhhs hover:text-red-700 text-2xl">
							<p>
								{list.title}
							</p>
							<p class="text-xs text-blue-900 pt-2 italic">
								Updated: {new Date(list.edited).toLocaleDateString('en-us', {
									timeZone: 'UTC',
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</p>
						</a>
					</div>
				{/each}
			</div>
		{:else}
			<p class="text-red-400">Unable to load lists right now.. :( Please try again later.</p>
		{/if}
		<div class="contents-center">
			<Contact />
		</div>
	</div>
</main>
<Footer />