import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			// IP de casa
			'/retrieveBooks': 'http://192.168.1.42:8080/',
			'/deleteBooks': 'http://192.168.1.42:8080/',
			'/updateBooks': 'http://192.168.1.42:8080/'

			// IP de clase
			// '/retrieveBooks': 'http://172.16.0.230:8080/',
			// '/deleteBooks': 'http://172.16.0.230:8080/',
			// '/updateBooks': 'http://172.16.0.230:8080/'
		},
	},
});
