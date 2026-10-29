document.addEventListener("DOMContentLoaded", fetchTopics);

async function fetchTopics() {
    try {
        const response = await fetch('/api/topics/');
        const topics = await response.json();
        renderTopics(topics);
        updateProgress(topics);
    } catch (error) {
        console.error("Erro ao buscar tópicos:", error);
    }
}

function renderTopics(topics) {
    const container = document.getElementById('topicsContainer');
    container.innerHTML = ''; // Limpa antes de renderizar

    // Agrupar por categoria
    const grouped = topics.reduce((acc, topic) => {
        acc[topic.category] = acc[topic.category] || [];
        acc[topic.category].push(topic);
        return acc;
    }, {});

    for (const [category, items] of Object.entries(grouped)) {
        // PREVENÇÃO XSS: Criação de elementos nativos ao invés de concatenação de strings HTML
        const section = document.createElement('div');
        section.className = 'category';

        const title = document.createElement('h2');
        title.textContent = category; // textContent é imune a XSS
        section.appendChild(title);

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = `topic-item ${item.is_completed ? 'completed' : ''}`;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `topic-${item.id}`;
            checkbox.checked = item.is_completed;
            checkbox.onchange = () => toggleTopic(item.id, checkbox.checked);

            const label = document.createElement('label');
            label.htmlFor = `topic-${item.id}`;
            label.textContent = item.title; // textContent é imune a XSS

            div.appendChild(checkbox);
            div.appendChild(label);
            section.appendChild(div);
        });

        container.appendChild(section);
    }
}

async function toggleTopic(id, isCompleted) {
    await fetch(`/api/topics/${id}/toggle`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_completed: isCompleted })
    });
    fetchTopics(); // Recarrega para atualizar progresso e estilos
}

function updateProgress(topics) {
    if(topics.length === 0) return;
    const completed = topics.filter(t => t.is_completed).length;
    const percentage = Math.round((completed / topics.length) * 100);
    
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${percentage}% Concluído (${completed} de ${topics.length} tópicos)`;
}