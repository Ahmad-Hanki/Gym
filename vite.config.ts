import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // comes from npm i types/node
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
    alias : [{find:'@' , replacement:path.resolve(__dirname,'src')}]
  }
})
