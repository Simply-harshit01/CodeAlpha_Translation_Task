const express = require('express');
const path = require('path'); // This is needed if you plan to serve your frontend files or handle file paths.
const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());  // Allow CORS for all requests

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

app.post('/detect-language', async (req, res) => {
    try {
        const { text } = req.body;
        const [detection] = await translate.detect(text);
        res.json({ language: detection.language });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/translate-text', async (req, res) => {
    try {
        const { text, targetLanguage } = req.body;
        const [translation] = await translate.translate(text, targetLanguage);
        res.json({ translatedText: translation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
