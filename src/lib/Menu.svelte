<script>
    // @ts-nocheck
	import { Icon } from 'svelte-awesome';
	import { instagram, phone, at, globe } from 'svelte-awesome/icons';

</script>
<aside class="fixed mt-16 md:mt-32 py-3 ml-3 px-3 z-10">
	<ul class="hidden sm:block text-center content-center">
		<li class="hover:bg-slate-100 py-2 px-3 rounded-full shadow-neumolight">
			<a href="tel:+18433888118" class="hydromapic">
				<Icon data={phone} scale={2} label="Call" />
			</a>
		</li>
		<li class="hover:bg-slate-100 p-3 rounded-full shadow-neumolight">
			<a href="https://instagram.com/coastal_vantage" target="_blank" class="hydromapic">
				<Icon data={instagram} scale={2} label="Instagram" />
			</a>
		</li>
		<li class="transition duration-300 hover:bg-slate-100 p-3 rounded-full shadow-neumolight">
			<a
				href="mailto: hello@coastal-vantage.com?subject=Hello%20Coastal%20Vantage"
				class="hydromapic"
			>
				<Icon data={at} scale={2} label="Email" />
			</a>
		</li>
		<li class="transition duration-300 hover:bg-slate-100 p-3 rounded-full shadow-neumolight">
			<a href="#map" class="hydromapic">
				<Icon data={globe} scale={2} label="Map" />
			</a>
		</li>
	</ul>
</aside>