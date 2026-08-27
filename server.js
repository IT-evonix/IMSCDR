require('dotenv').config();
const next = require('next');
const expressApp = require('./src/server/app');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Initialize Next.js Application Instance
const nextApp = next({ dev, dir: __dirname });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Pass all non-API requests to Next.js handler
  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  const server = expressApp.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server ready on http://localhost:${port} [Mode: ${dev ? 'Development' : 'Production'}]`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const nextPort = Number(port) + 1;
      console.warn(`Port ${port} is busy. Retrying on port ${nextPort}...`);
      expressApp.listen(nextPort, () => {
        console.log(`> Server fallback ready on http://localhost:${nextPort}`);
      });
    } else {
      console.error('Server error:', err);
    }
  });
}).catch((err) => {
  console.error('Error starting server:', err);
});
