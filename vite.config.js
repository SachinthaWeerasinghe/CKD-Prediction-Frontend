import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
      proxy: {
        '/user': 'https://ckd-risk-prediction-backend-python.azurewebsites.net',
      },
    },
})
