import {
  defineConfig,
  loadEnv,
  type PluginOption,
  type UserConfig,
} from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { nitro } from "nitro/vite";

export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  const isSandbox =
    !!process.env.LOVABLE_SANDBOX ||
    !!process.env.CODESPACES ||
    !!process.env.GITPOD_WORKSPACE_ID;

  const plugins: PluginOption[] = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart(),
    nitro(),
    viteReact(),
  ];

  if (command === "build") {
    try {
      const { nitro } = await import("nitro/vite");
      plugins.push(
        nitro({
          preset: "cloudflare-module",
          ...(isSandbox && {
            output: {
              dir: "dist",
              serverDir: "dist/server",
              publicDir: "dist/client",
            },
            cloudflare: { nodeCompat: true, deployConfig: true },
          }),
        }),
      );
    } catch {
      // nitro optional
    }
  }

  if (command === "serve" && mode === "development") {
    try {
      // @ts-expect-error - app-tagger has no published types
      const { componentTagger } = await import("app-tagger");
      plugins.push(componentTagger());
    } catch {
      // tagger optional
    }
  }

  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  const define: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadedEnv)) {
    define[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return {
    define,
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": path.resolve(process.cwd(), "src") },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    server: {
      host: "::",
      port: 8080,
      ...(isSandbox && { strictPort: true }),
    },
    plugins,
  };
});
