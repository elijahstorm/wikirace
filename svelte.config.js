import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			hostineSite: 'data',
			precompress: false,
			fallback: 'index.html'
		}),
		paths: {
			base: dev ? '' : '/wikirace'
		}
	}
}

export default config
