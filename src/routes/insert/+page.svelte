<script>
	let bookId = '';
	let bookAuthor = '';
	let bookName = '';
	let bookPrice = '';

	function handleAccept() {
		// Handle accept button click event here
	}
</script>

<svelte:head>
	<title>Insertar</title>
	<meta name="description" content="About this app" />	
</svelte:head>

<div class="container letra">
	<h1>Aquí se insertarían los datos</h1>
	<h3>Sólo los usuarios autorizados PUEDEN HAECER INSERT</h3>
	
	<div class="formulario">
		<form class="form-container">
			<label for="bookId">ID del libro:</label>
			<input type="text" id="bookId" bind:value={bookId}><br>

			<label for="bookAuthor">Autor del libro:</label>
			<input type="text" id="bookAuthor" bind:value={bookAuthor}><br>

			<label for="bookName">Nombre del libro:</label>
			<input type="text" id="bookName" bind:value={bookName}><br>

			<label for="bookPrice">Precio:</label>
			<input type="number" step="0.01" id="bookPrice" bind:value={bookPrice}><br>

			<button on:click={handleAccept}>Aceptar</button>
		</form>
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

	.form-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1px;
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