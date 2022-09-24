import express from 'express';
import healthzRoutes from './controllers/healthz.js';


const startServer = async () => {

    const app = express();

    app.use('/api/healthz', healthzRoutes);

    app.listen(4000, () => {
        console.log('Running on port 4000');
    });
}

startServer();