<script>
    import logo from '../assets/logos/ep.svg';
    import bhhs_seal from '../assets/logos/bhhs-seal.png';
	import { Icon } from 'svelte-awesome';
	import { instagram, phone, at, globe } from 'svelte-awesome/icons';

    var year = new Date().getFullYear();
</script>

<footer class="flex flex-col relative pt-4 px-4 sm:px-20">
	<div class="grid grid-cols-4 sm:hidden place-items-center">
		<button
			class="bg-gray-100 hover:bg-blue-200 text-gray-800 py-2 px-3 rounded-full shadow-neumodark"
		>
			<a href="tel:+18433888118" class="bhhs bhhs-button">
				<Icon data={phone} scale={2} label="Call" />
			</a>
		</button>
		<button class="bg-gray-100 hover:bg-blue-200 text-gray-800 p-2 rounded-full shadow-neumodark">
			<a href="https://emma.myhomecharleston.com" target="_blank">
				<img class="w-8" src={bhhs_seal} alt="BHHS Logo" />
			</a>
		</button>
		<button
			class="bg-gray-100 hover:bg-blue-200 text-gray-800 py-2 px-3 rounded-full shadow-neumodark"
		>
			<a href="https://instagram.com/coastal_vantage" target="_blank" class="bhhs bhhs-button">
				<Icon data={instagram} scale={2} label="Instagram" />
			</a>
		</button>
		
		<button
			class="bg-gray-100 hover:bg-blue-200 text-gray-800 py-2 px-3 rounded-full shadow-neumodark"
		>
			<a
				href="mailto:hello@coastal-vantage.com?subject=Hello%20Coastal%20Vantage"
				class="bhhs bhhs-button"
			>
				<Icon data={at} scale={2} label="Email" />
			</a>
		</button>
	
	</div>
	<div class="grid grid-cols-1 pt-3">
		<div class="text-xxs">
			&copy;{year} BHH Affiliates, LLC. An independently owned and operated franchisee of BHH Affiliates,
			LLC. Berkshire Hathaway HomeServices and the Berkshire Hathaway
			HomeServices symbol are registered service marks of Columbia Insurance Company, a Berkshire
			Hathaway affiliate. Equal Housing Opportunity.
			<div class="pt-2">&copy;{year} Coastal Vantage, LLC.
				<img class="w-10 inline" src={logo} alt="MapMazeLu Portfolio" />
				<a
					class="button text-gray-600 transition ease-in-out hover:-translate-x-2 hover:scale-110 duration-300"
					href="https://emmalu.github.io/portfolio"
					target="_blank"
				>
					Developed by <span class="font-semibold">MapMazeLu.</span>
				</a>
			</div>
		</div>
	</div>
</footer>