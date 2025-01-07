document.getElementById('send').addEventListener('click', async () => {
    const query = document.getElementById('query').value;
  
    if (!query.trim()) {
      alert('Please enter a query.');
      return;
    }
  
    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
      document.getElementById('response').innerText = data.response;
    } catch (error) {
      console.error('Error communicating with Ollama:', error);
      alert('Something went wrong. Check the console for details.');
    }
  });
  