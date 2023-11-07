import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@generics': path.resolve(__dirname, 'src/components/generics'),
      '@homespecifics': path.resolve(__dirname, 'src/components/homespecifics'),
      '@contactspecifics': path.resolve(__dirname, 'src/components/contactspecifics'),
      '@newsspecifics': path.resolve(__dirname, 'src/components/newsspecifics'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@scripts': path.resolve(__dirname, 'src/assets/scripts')
    }
  }
})
