const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = 3000;

app.use(express.json());
app.use(cors());

const apiToken = process.env.API_TOKEN;
console.log(`API Token: ${apiToken}`);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/prochains-matchs', async (req, res) => {
    try {
        const fixtureId = 18535492;
        const sportMonksResponse = await axios.get(`https://api.sportmonks.com/v3/football/fixtures/18535492?api_token=${apiToken}`)

        res.json(sportMonksResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur' });
    }
});

app.get('/ligues', async (req, res) => {
    try {
        const fixtureId = 18535492;
        const sportMonksResponse = await axios.get(`https://api.sportmonks.com/v3/football/leagues?api_token=${apiToken}`)

        res.json(sportMonksResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur' });
    }
});

app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
