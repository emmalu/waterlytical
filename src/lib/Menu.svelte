<script>
    // @ts-nocheck
    import bhhs_seal from '../assets/logos/bhhs-seal.png';
	import { Icon } from 'svelte-awesome';
	import { instagram, phone, at, globe } from 'svelte-awesome/icons';

</script>
<aside class="fixed mt-16 md:mt-32 py-3 ml-3 px-3 z-10">
	<ul class="hidden sm:block text-center content-center">
		<li class="hover:bg-gray-200 p-3 rounded-full shadow-neumolight">
			<a href="https://emma.myhomecharleston.com" target="_blank">
				<img class="w-14" src={bhhs_seal} alt="BHHS Seal" />
			</a>
		</li>
		<li class="hover:bg-gray-200 p-6 rounded-full shadow-neumolight">
			<a href="tel:+18433888118" class="bhhs bhhs-button">
				<Icon data={phone} scale={2} label="Call" />
			</a>
		</li>
		<li class="hover:bg-gray-200 p-6 rounded-full shadow-neumolight">
			<a href="https://instagram.com/coastal_vantage" target="_blank" class="bhhs bhhs-button">
				<Icon data={instagram} scale={2} label="Instagram" />
			</a>
		</li>
		<li class="transition duration-300 hover:bg-gray-200 p-6 rounded-full shadow-neumolight">
			<a
				href="mailto: hello@coastal-vantage.com?subject=Hello%20Coastal%20Vantage"
				class="bhhs bhhs-button"
			>
				<Icon data={at} scale={2} label="Email" />
			</a>
		</li>
<!-- 		<li class="transition duration-300 hover:bg-gray-200 p-6 rounded-full shadow-neumolight">
			<a href="#translate" class="bhhs bhhs-button">
				<Icon data={globe} scale={2} label="Espanol" />
			</a>
		</li> -->
	</ul>
</aside>