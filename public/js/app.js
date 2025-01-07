// Assuming NativeUI components are available globally
document.addEventListener('DOMContentLoaded', function () {
  // Initialize NativeUI components
  const textArea = new NativeUI.TextArea({
    containerId: 'text-area-container',
    placeholder: 'Ask Ollama...',
    height: '100px',
    width: '100%',
  });

  const button = new NativeUI.Button({
    containerId: 'button-container',
    text: 'Send',
    onClick: async () => {
      const query = textArea.getValue();

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
    },
  });
});
