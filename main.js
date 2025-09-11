document.addEventListener('DOMContentLoaded', () => {
  const topicContent = document.getElementById('topicContent');

  document.getElementById('loadTopic').addEventListener('click', () => {
    const topic = document.getElementById('topicSelect').value;

    if (!topic) {
      topicContent.innerHTML = "<p>Por favor, selecciona un tema.</p>";
      return;
    }

    // Carga el archivo HTML del tema
    fetch(`topics/${topic}.html`)
      .then(response => {
        if (!response.ok) throw new Error('No se pudo cargar el tema');
        return response.text();
      })
      .then(html => {
        topicContent.innerHTML = html;

        // cargar el JS asociado al tema
        const script = document.createElement('script');
        script.src = `topics/${topic}.js`;
        document.body.appendChild(script);
      })
      .catch(err => topicContent.innerHTML = `<p>Error: ${err.message}</p>`);
  });
});

