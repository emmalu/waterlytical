<header class="flex z-50 sticky">
	<nav class="flex justify contents-between w-full h-18">
		<ul>
			<li >
				<a href="#/">Home <!-- <Icon data={home} /> --></a>
			</li>
			<li >
				<a href="#/map">Map</a>
			</li>
		</ul>
	</nav>
</header>

<style>

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--accent-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--heading-color);
		background-color: var(--tertiary-color);
	}
</style>
