<svelte:head>
	<title>Actualizar y Borrar</title>
	<meta name="description" content="About this app" />	
</svelte:head>

<script>
	let author = '';
	let name = '';
	let price = '';
	let id = '';

	async function doUpdate () {
		await fetch('/updateBook', {
			method: 'UPDATE',
			body: JSON.stringify({
				author,
				name,
				price
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		
	}

	async function doDelete () {
		await fetch('/deleteBook/'+{id}, {
			method: 'DELETE',
			body: JSON.stringify({
				author,
				name,
				price
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		
	}
</script>

<div class="container letra">

	<h1 style="font-size: 80px;">Inserte la ID para actualizar los datos</h1>
	<div class="formulario">
		
		<label for="bookAuthor">Autor del libro:</label>
		<input type="text" id="bookAuthor" bind:value={author}><br>

		<label for="bookName">Nombre del libro:</label>
		<input type="text" id="bookName" bind:value={name}><br>

		<label for="bookPrice">Precio:</label>
		<input type="number" step="0.01" id="bookPrice" bind:value={price}><br>

		<button class="button1" on:click={doUpdate}>Aceptar</button>
	</div>

	<h1 style="font-size: 80px;">Inserte la ID para borrar el libro</h1>
	<div class="formulario">
		
		<label for="bookAuthor">ID del libro:</label>
		<input type="text" id="bookAuthor" bind:value={id}><br>

		<button class="button2" on:click={doDelete}>Borrar</button>
	
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

	.button1 {
		margin: 0 auto;
		background-color: #168bb5;
		color: white;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
		margin-bottom: 30px;
		
	}

	.button1:hover {
		background-color: #15a892;
	}

	.button2 {
		margin: 0 auto;
		background-color: #a11111;
		color: white;
		padding: 10px 20px;
		border: none;
		cursor: pointer;
		margin-bottom: 30px;
		
	}

	.button2:hover {
		background-color: #92a70b;
	}

</style>