async function transliterate() {
    const inputText = document.getElementById('inputText').value;
    const transliterationType = document.getElementById('transliterationType').value;

    const response = await fetch('http://127.0.0.1:5000/transliterate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText, type: transliterationType })
    });

    const result = await response.json();
    document.getElementById('outputText').innerText = result.transliterated_text;
}

