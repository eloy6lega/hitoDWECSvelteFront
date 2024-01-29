<svelte:head>
	<title>Insertar</title>
	<meta name="description" content="About this app" />	
</svelte:head>

<script>
	let author = '';
	let name = '';
	let price = '';

	async function doPost () {
		await fetch('/createBook', {
			method: 'POST',
			body: JSON.stringify({
				author,
				name,
				price
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		location.reload();
	}
</script>

<div class="container letra">

	<h1 style="font-size: 80px;">Inserte los datos para un nuevo libro</h1>
	
	<div class="formulario">
		
			<label for="bookAuthor">Autor del libro:</label>
			<input type="text" id="bookAuthor" bind:value={author}><br>

			<label for="bookName">Nombre del libro:</label>
			<input type="text" id="bookName" bind:value={name}><br>

			<label for="bookPrice">Precio:</label>
			<input type="number" step="0.01" id="bookPrice" bind:value={price}><br>

			<button on:click={doPost}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
		
	</div>
</div>

<style>
	/* global.css */
	@font-face {
		font-family: 'HARRYP';
		src: url('../lib/font/HARRYP__.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.letra {
		font-family: 'HARRYP';
		font-size: 30px;
	}

	label {
		margin-bottom: 5px;
	}

	input {
		margin-bottom: 5px;
	}

	.formulario {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	button {
		margin: 0 auto;
		background-color: #4CAF50;
		color: white;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
		margin-bottom: 30px;
		
	}

	button:hover {
		background-color: #085080;
	}

</style>