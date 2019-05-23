import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

// dev build if watching, prod build if not
const production = !process.env.ROLLUP_WATCH;

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
  input: ["src/index.js"],
  output: {
    file: "build/index.js",
    format: "es",
    sourcemap: true,
    compact: true
  },
  plugins: production ? [resolve(), babel(), uglify()] : [resolve()]
};
