<svelte:head>
	<title>Biblioteca Mágica</title>
	<meta name="description" content="Explora nuestra increíble colección de libros mágicos" />
</svelte:head>

<script>
	import fondo from '$lib/images/fondoLibro.webp';
</script>

<!-- Me gustaría añadir un cursor personalizado a la web entera. Los archivos están descargados en la carpeta images -->

<section style="margin-top:-40px; font-size: 60px">
	<div class="letra datos">
		<div>
			<div class="bg-white shadow-md rounded-lg p-4 cartas" style="background-image: url({fondo});">
				<div>
					<br>
					<p class="titu">La Biblioteca Mágica</p>
					<p class="lema">~ El secreto está en las páginas ~</p>
				</div>
				<p class="spam">Hito realizado poe ELOY PEREZ</p>
			</div>
			
		</div>
	</div>
	
	<!-- <p class="letra" style="font-size: 30px; margin-top: -1px">El secreto está en las páginas</p> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		text-align: center;
		color: white;
		text-shadow: 2px 2px 5px #000000;
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
	}

	.cartas{
		margin: 0 auto;
		margin-top: 50px;
		width: 600px;
		height: 800px;
		border-radius: 20px;
	}

	.titu{
		font-size: 80px;
	}

	.lema{
		font-size: 40px;
	}

	.spam{
		font-size: 30px;
		margin-top: 440px;
	}

</style>