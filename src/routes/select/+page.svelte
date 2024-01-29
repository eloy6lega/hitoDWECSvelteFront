<script>
	import { onMount } from 'svelte';
	let catFact = [];

	onMount(async () => {
		const response = await fetch('/retrieveBooks');
		const data = await response.json();
		catFact = data;
		console.log(catFact);
	});

	async function doDelete (id) {
		console.log(id);
		await fetch(`/deleteBook/${id}`, {
			method: 'DELETE',
			
			headers: {
				'Content-Type': 'application/json'
			}
		})
		
		// recarga la página completa
		location.reload();
	}
</script>

<svelte:head>
	<title>Ver datos</title>
	<meta name="description" content="About this app" />	
</svelte:head>

<div class="container"></div>
	<div class="row letra datos">
		{#each catFact as fact}
			<div class="col-md-4">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">{fact.name}</h5>
						<h6 class="card-subtitle mb-2 text-muted">{fact.author}</h6>
						<p class="card-text">Precio: {fact.price}</p>
						<p class="card-text">Id: {fact.id}</p>
						<button style="color: green;" on:click={()=>doDelete(fact.id)}>borrar</button>
					</div>
				</div>
			</div>
		{/each}
	</div>


<style>

	/* global.css */
	@font-face {
		font-family: 'HARRYP';
		src: url('../lib/font/HARRYP__.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.card{
		margin: 0 auto;
		border: 1px solid rgb(0, 0, 0);
		border-radius: 10px;
		margin-top: 20px;
		margin-bottom: 20px;
		width: 500px;
		height: 350px;
	}

	.letra{
		font-family: 'HARRYP';
		font-size: 30px;
	}

	.datos{
		margin-top: 50px;
		text-align: center;
	}

</style>
