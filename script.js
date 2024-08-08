document.getElementById('translateBtn').addEventListener('click', async () => {
    const text = document.getElementById('text').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    if (!targetLanguage) {
        alert('Please select a target language.');
        return;
    }

    try {
        // Detect language
        let response = await fetch('http://localhost:3000/detect-language', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });
        let data = await response.json();
        document.getElementById('detectedLanguage').innerText = data.language;

        // Translate text
        response = await fetch('http://localhost:3000/translate-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, targetLanguage })
        });
        data = await response.json();
        document.getElementById('translatedText').innerText = data.translatedText;
    } catch (error) {
        console.error('Error:', error);
    }
});
