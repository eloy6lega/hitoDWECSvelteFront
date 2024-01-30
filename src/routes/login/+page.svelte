<script>
	import fondo from '$lib/images/fondoLibro.webp';

	function doGoogle() {
		alert("Aún no tenemos contrato con Google, pero pronto lo tendremos");
	}

	function doGuest() {
		window.location.href = "http://localhost:5173/";	
	}


		let users = [
			{ username: "admin", password: "admin" },
			{ username: "paco", password: "123" },
			{ username: "lola", password: "123" }
		];

		function login() {
			const username = document.getElementById("username").value;
			const password = document.getElementById("password").value;

			const user = users.find(user => user.username === username && user.password === password);

			if (user) {
				window.location.href = "http://localhost:5173/";
			} else {
				alert("Usuario o contraseña incorrectos");
			}
		}


</script>

<div class="formulario">
    <h1 class="letraTitle">Iniciar Sesión</h1>
    <div class="formu letraNormal">
        <form>
            <div class="campos">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" placeholder="Ingresa tu usuario">
            </div>
            <div class="campos">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
            </div>
            <div class="boton1">
                <button type="submit" on:click={login}>Iniciar Sesión</button>
            </div>
        </form>
        <div class="line-container">
            <div class="line"></div>
            <div class="centered-char">O</div>
            <div class="line"></div>
        </div>

        <div class="botones2">
            <div class="botones2-1">
                <button type="button" on:click={doGoogle}>
                    <!-- Logo de Google (sustituye la fuente por tu imagen) -->
                    <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" alt="Google Logo" style="height: 50px; width: auto;">
                </button>
            </div>
            <div class="botones2-1">
                <button on:click={doGuest} type="button" style="height: 78px; width: auto; font-size: 30px;">Acceder como invitado</button>
            </div>
        </div>

    </div>
</div>


<style>

	.formulario{
		margin: 0 auto;
		background-color: aliceblue;
		width: 700px;
		height: 750px;
		border-radius: 20px;
		padding: 50px;
		box-shadow: 0 0 50px black;
	}
	
	.formu{
		padding: 15px;
		margin-top: -30px;
	}

	.campos{
		display: flex;
		flex-direction: column;
	}

	input{
		border-radius: 20px;
		padding-left: 20px;
		height: 80px;
		color: aliceblue;
		background-color: rgb(100, 100, 100);
	}
	.boton1{
		display: flex;
		justify-content: center;
		margin: 0 auto;
		text-align: center;
		border-radius: 20px;
		padding: 15px;
		margin-top: 20px;
		background-color: rgb(100, 100, 100);
		color: white;
		font-size: 30px;
		transition: background-color 0.3s ease;
	}

	.boton1:hover {
		background-color: rgb(150, 150, 150);
	}

	.botones2 {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }



	.botones2-1 {
        margin: 0 10px;
    }

	.botones2 button {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		padding: 15px;
		background-color: rgb(100, 100, 100);
		color: white;
		font-size: 20px;
		transition: background-color 0.3s ease;
	}

	.botones2 button:hover {
		background-color: rgb(150, 150, 150);
	}

	/* global.css */
	@font-face {
		font-family: 'HARRYP';
		src: url('../lib/font/HARRYP__.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.letraTitle{
		font-family: 'HARRYP';
		font-size: 75px;
		margin-top: -20px;
	}
	.letraNormal{
		font-family: 'HARRYP';
		font-size: 40px;
	}

	.line-container {
      display: flex;
      align-items: center;
	  margin-top: 30px;
    }

    .line {
      flex-grow: 1;
      border-bottom: 1px solid black;
      margin: 0 10px;
    }

    .centered-char {
      font-size: 20px;
    }

</style>
