import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

const resolvePath = (path: string) => {
  return resolve(__dirname, path)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolvePath('./'),
    },
  },
  build: {
    //打包文件目录
    outDir: './',
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    lib: {
      entry: resolvePath('index.ts'),
      name: 'wjl-ui',
    },
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: resolvePath('index.ts'),
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //配置打包根目录
          dir: resolvePath('./es'),
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: '.',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //配置打包根目录
          dir: resolvePath('./lib'),
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: '.',
        },
      ],
    },
  },
  plugins: [
    vue(),
    dts({
      outputDir: resolvePath('./typings'),
      tsConfigFilePath: resolvePath('./tsconfig.json'),
    }),
  ],
})
