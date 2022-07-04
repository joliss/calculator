import esbuild from 'esbuild';
import postcss from 'esbuild-postcss';

const esbuildOptions = {
  entryPoints: ['src/app.tsx', 'src/app.css'],
  bundle: true,
  plugins: [postcss()],
};

const host = '127.0.0.1';
const port = 3000;

const serve = process.argv.indexOf('serve') !== -1;
if (serve) {
  console.log(`Serving on http://${host}:${port}`);
  esbuild.serve({
    host: host,
    port: port,
    servedir: 'public',
  }, esbuildOptions).catch((err) => {
    console.error(err);
    process.exit(1);
  });
} else {
  esbuild.build({
    ...esbuildOptions,
    outdir: 'dist',
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
