import express from 'express';
import healthzRoutes from './controllers/healthz.js';
import emissionsRoutes from './controllers/emissions.js';
import cors from 'cors';

const startServer = async () => {

    const app = express();
    app.use(cors({
        origin: ['http://localhost:3000'],
        methods: "GET",
        credentials: true
    }));

    app.use('/api/healthz', healthzRoutes);
    app.use('/api/emissions', emissionsRoutes);

    app.listen(4000, () => {
        console.log('Running on port 4000');
    });
}

startServer();