document.getElementById('loadTopic').addEventListener('click', () => {
  const topic = document.getElementById('topicSelect').value;
  const contentDiv = document.getElementById('topicContent');

  if (!topic) {
    contentDiv.innerHTML = "<p>Por favor, selecciona un tema.</p>";
    return;
  }

  // Carga el archivo HTML del tema
  fetch(`topics/${topic}.html`)
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el tema');
      return response.text();
    })
    .then(html => contentDiv.innerHTML = html)
    .catch(err => contentDiv.innerHTML = `<p>Error: ${err.message}</p>`);
});

