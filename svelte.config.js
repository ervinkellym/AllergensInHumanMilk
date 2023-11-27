import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}

// TODO: Bundle Size Optimization
// const config = {
//   kit: {
//     vite: {
//       optimizeDeps: {
//         include: ['echarts'],
//       },
//       ssr: {
//         noExternal: ['echarts']
//       },
//     },
//   }
// }
