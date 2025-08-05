// import { defineConfig, loadEnv } from 'vite';
// import tsconfigPaths from 'vite-tsconfig-paths';
// import react from '@vitejs/plugin-react-swc';
// import VitePluginEslint from 'vite-plugin-eslint2';

// export default ({ mode }: { mode: string }) => {
//   const env = loadEnv(mode, process.cwd());
  
//   return defineConfig({
//     base: env.VITE_APP_PATH_PREFIX, 
//     plugins: [react(), tsconfigPaths(), VitePluginEslint()],
//     build: {
//       rollupOptions: {
//         output: {
//           globals: {
//             react: 'React',
//             'react-dom': 'ReactDOM',
//           },
//         },
//       },
//       chunkSizeWarningLimit: 1500,
//     },
//     server: {
//       port: 5000,
//     },
//   });
// };

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import VitePluginEslint from 'vite-plugin-eslint2';

export default () => {
  // const env = loadEnv(mode, process.cwd());
  
  return defineConfig({
    // base: env.VITE_APP_PATH_PREFIX, 
    base: '/design/mohit/e-learning/',
    plugins: [react(), tsconfigPaths(), VitePluginEslint()],
    build: {
      rollupOptions: {
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
      chunkSizeWarningLimit: 1500,
    },
    server: {
      port: 5000,
    },
  });
};
