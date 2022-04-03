<script>
    import axios from 'axios';
    import {onMount} from 'svelte';
    import Header from './Header.svelte';
    import Menu from './Menu.svelte';
    import Footer from './Footer.svelte';
    // @ts-ignore
    import Contact from './Contact.svelte';
	import { Icon } from 'svelte-awesome';
	import { externalLink, spinner } from 'svelte-awesome/icons';

    let posts = [];

    const rootUrl = 'https://cv-notion.herokuapp.com';
    const config = {
        method: 'get',
        url: `${rootUrl}/posts`,
    };
    onMount(async () => {
        // @ts-ignore
        const response = await axios(config);
        const data = response.data;
        if (data) {
            posts = data;
        } else {
            console.log('error');
        }
    });
</script>

<svelte:head>
	<title>Lists</title>
</svelte:head>

<Header />
<Menu />
<main class="main align-middle">
	<div class="flex flex-col py-7 sm:py-12 items-center">
		<div class="text-center">
			<h2 class="block pb-4 font-bold">House Bytes [Blog]</h2>
			<span class="block py-4 px-2">
				A place for CHS-focused Real Estate bits & bytes for existing & prospective homeowners.
			</span>
			{#if posts.length === 0}
			    <span class="block"><Icon data={spinner} pulse/></span>
			    <span class="animate-pulse text-gray-600">Loading...</span>
			{:else if posts.length > 0}
                <div class="grid grid-rows-{posts.length} md:grid-flow-col justify-items-center gap-2 py-2">
				{#each posts as post}
                    <div class="items-center text-center bg-white py-2 px-2 rounded-xl drop-shadow-2xl shadow-amber-100 w-3/4 sm:w-full">
                        <div class="block">
                            <a
                                href="https://emmalu.notion.site/{post.slug}-{post.id.split('-').join('')}"
                                target="_blank"
                                class="bhhs hover:text-red-700 text-2xl items-center"
                                >{post.title}
                                <Icon data={externalLink} /></a
                            >
                        </div>
                        {#each post.tags as tag}
                            <span
                                class="inline-block bhhs bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
                            >
                                {tag}
                            </span>
                        {/each}
                        <span class="block text-xs italic">
                            Published {new Date(post.published).toLocaleDateString('en-us', {
                                timeZone: 'UTC',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                {/each}
				</div>
			{:else}
				<p class="text-red-400">Unable to load posts right now.. :( Please try again later.</p>
			{/if}
		</div>
        <div class="contents-center">
			<Contact />
		</div>
</main>
<Footer />