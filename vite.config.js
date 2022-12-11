import { defineConfig } from 'vite';
import path from 'path';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'assets', replacement: path.resolve(__dirname, 'assets') },
    ],
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
  plugins: [
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customSplitting: {
        'phaser-vendor': ['phaser', 'phaser-matter-collision-plugin'],
      },
    }),
  ],
});
