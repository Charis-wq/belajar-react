import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        helloworld: "hello-world.html",
        Contact: "contact.html",
        Task: "task.html",
        counter: "counter.html",
        note: "note.html",
        profile: "profile.html",
        timer: "timer.html",
        guestbook: "guestbook.html",
        product: "product.html",
        online: "online.html"
      }
    }
  }
})
