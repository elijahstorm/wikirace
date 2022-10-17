import { sveltekit } from '@sveltejs/kit/vite'
import { sveltesocket } from './socket-handler'
import type { UserConfig } from 'vite'

const config: UserConfig = {
	plugins: [sveltekit(), sveltesocket()],
	build: {
		rollupOptions: {
			external: ['iconify-icon']
		}
	},
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
}

export default config
