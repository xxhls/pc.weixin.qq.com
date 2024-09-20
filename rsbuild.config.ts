import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginTypeCheck(),
		pluginTypedCSSModules(),
		pluginSass({
			sassLoaderOptions: {
				additionalData:
					'@import "@/styles/variables.scss";@import "@/styles/common.scss";',
			},
		}),
	],
	tools: {
		postcss: {
			postcssOptions: {
				plugins: [require("tailwindcss")],
			},
		},
	},
	output: {
		assetPrefix: "/pc.weixin.qq.com/",
	},
});
