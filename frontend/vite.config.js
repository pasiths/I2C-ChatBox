import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// eslint-disable-next-line no-undef
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3030,
		proxy: {
			"/api": {
				target: REACT_APP_BASE_URL,
				changeOrigin: true,
			},
		},
	},
})
