import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        helloworld: "hello-world.html",
        Contact: "contact.html",
        Task: "task.html",
        counter: "counter.html"
      }
    }
  }
})
