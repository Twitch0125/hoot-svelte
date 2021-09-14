import preprocess from 'svelte-preprocess';
import vercelAdapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercelAdapter()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
