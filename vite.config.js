import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GANTI dengan nama repo GitHub kamu, mis: "/organisasi-kepemudaan-dusun-kesamben/"
  base: "/organisasi-kepemudaan-web/"
})
