import esbuild from 'esbuild';
import postcss from 'esbuild-postcss';

const host = '127.0.0.1';
const port = 3000;

console.log(`Serving on http://${host}:${port}`);

esbuild.serve({
  host: host,
  port: port,
  servedir: 'public',
}, {
  entryPoints: ['src/app.tsx', 'src/app.css'],
  bundle: true,
  plugins: [postcss()],
}).catch((err) => process.exit(1));
