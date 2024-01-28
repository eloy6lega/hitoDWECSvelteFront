<svelte:head>
	<title>Biblioteca Mágica</title>
	<meta name="description" content="Explora nuestra increíble colección de libros mágicos" />
</svelte:head>

<!-- Me gustaría añadir un cursor personalizado a la web entera. Los archivos están descargados en la carpeta images -->

<section style="margin-top:-40px; font-size: 60px">
	<h1 class="letra">La Biblioteca Mágica</h1>

	<div class="library-image">
		<img src="https://wallpapers.com/images/hd/the-hogwarts-library-1920-x-1138-wallpaper-op1lmkio8xnzxd9e.jpg" alt="Imagen de la Biblioteca Mágica" style="width: 1200px; height: 700px;" />
	</div>
	<p class="letra" style="font-size: 30px; margin-top: -1px">El secreto está en las páginas</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		text-align: center;
	}

	h1 {
		width: 100%;
		margin-bottom: 16px;
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
</style>