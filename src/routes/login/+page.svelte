<script>
	import fondo from '$lib/images/fondoLibro.webp';
</script>

<svelte:head>
	<title>Ver datos</title>
	<meta name="description" content="About this app" />	
</svelte:head>

<div class="formulario">
	<h1>Iniciar Sesión</h1>

	<form>
		<div class="campos">
			<label for="username">Usuario:</label>
			<input type="text" id="username" name="username" placeholder="Ingresa tu usuario">
		</div>
		<div class="campos">
			<label for="password">Contraseña:</label>
			<input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
	
		</div>
		<button type="submit">Iniciar Sesión</button>
	</form>
</div>


<style>

	.formulario{
		margin: 0 auto;
		margin-top: 100px;
		margin-bottom: 60px;
		width: 600px;
		height: 600px;
		background-color: #F2F2F2;
		border-radius: 10px;
		display: flex;
		flex-direction: column; /* Cambia la dirección del flujo a columna */
		justify-content: space-between; /* Distribuye los elementos de manera uniforme en el eje vertical */
		align-items: center; /* Alinea los elementos al centro del eje horizontal */
	}



	/* global.css */
	@font-face {
		font-family: 'HARRYP';
		src: url('../lib/font/HARRYP__.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.cartas {
		margin: 0 auto;
		margin-top: 50px;
		margin-bottom: 50px;
		font-size: xxx-large;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		color: black;
		width: 300px;
		height: 400px;
		text-shadow: 2px 2px 5px white;
		display: flex;
		flex-direction: column; /* Cambia la dirección del flujo a columna */
		justify-content: space-between; /* Distribuye los elementos de manera uniforme en el eje vertical */
	}	

	.letra {
		font-family: 'HARRYP';
		font-size: 30px;
	}

	.datos {
		margin-top: 50px;
		text-align: center;
	}

</style>
