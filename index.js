import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import redis from './radis-client.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.post('/data', async (req, res) => {
    const repo = req.body.repo;
    const value = await redis.get(repo);

    if (value) {
        return res.json({
            from: 'redis',
            status: 'ok',
            stars: value
        });
    }

    const response = await fetch(`https://api.github.com/repos/${repo}`).then(t => t.json());
    if (response.stargazers_count !== undefined) {
        await redis.set(repo, response.stargazers_count);
    }

    res.json({
        from: 'remote',
        status: 'ok',
        stars: response.stargazers_count
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3001, () => {
    console.log(`Server is ready..... at http://localhost:3001`);
});