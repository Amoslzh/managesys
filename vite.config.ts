import { UserConfigExport, ConfigEnv,loadEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/

export default ({ command,mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode,process.cwd())
    
  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        // mockPath: "mock",
        localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/style/variable.scss";',
        },
      },
    },
    server:{
      proxy:{
        [env.VITE_APP_BASE_API]:{
          target: env.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  };
};
