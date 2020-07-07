import { terser } from 'rollup-plugin-terser';

export default {
	input: 'index.js',
	output: {
		file: 'results/rollup.js',
		format: 'cjs',
		sourcemap: true
	},
	plugins: [
		terser({
			toplevel: true,
			compress: {
				passes: 2
			}
		})
	]
};