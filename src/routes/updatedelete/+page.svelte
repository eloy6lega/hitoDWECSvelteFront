<script>
	// import { onMount } from 'svelte';
	// let catFact = [];

	// onMount(async () => {
	// 	const response = await fetch('/retrieveBooks');
	// 	const data = await response.json();
	// 	catFact = data;
	// 	console.log(catFact);
	// });
</script>

<svelte:head>
	<title>Actualizar y Borrar</title>
	<meta name="description" content="About this app" />	
</svelte:head>

<div class="container letra">

	<h1>Aquí se actualizan o eliminan los datos</h1>
	<h3>Sólo los usuarios autorizados PUEDEN HAECERLO</h3>
	<!-- <div class="row">
		{#each catFact as fact}
			<div class="col-md-4">
				<div class="card" style="border: 1px solid pink; border-radius: 10px;">
					<div class="card-body">
						<h5 class="card-title">{fact.name}</h5>
						<h6 class="card-subtitle mb-2 text-muted">{fact.author}</h6>
						<p class="card-text">Id: {fact.id}</p>
						
					</div>
				</div>
			</div>
		{/each}
	</div> -->
</div>

<style>

	/* global.css */
	@font-face {
		font-family: 'HARRYP';
		src: url('../lib/font/HARRYP__.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.letra{
		font-family: 'HARRYP';
		font-size: 30px;
	}

</style>