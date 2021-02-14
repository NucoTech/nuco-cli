import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import json from "@rollup/plugin-json"

const extensions = [".js", ".ts"]

export default {
    input: "./src/index.ts",

    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en#external-e-external
    external: [],

    plugins: [
        json(),
        // Allows node_modules resolution
        resolve({ extensions, preferBuiltins: true }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ["src/**/*"], babelHelpers: "runtime" }),
    ],

    output: {
        file: "dist/index.js",
        format: "cjs",
        banner: "#!/usr/bin/env node",
    },
}
