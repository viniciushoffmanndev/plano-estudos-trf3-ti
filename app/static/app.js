let allTopics = [];
let currentArea = "Conhecimentos Específicos"; // Estado inicial

// Inicialização segura
document.addEventListener("DOMContentLoaded", () => {
    fetchTopics();
    setupEventListeners();
});

// SEGURANÇA OWASP: Separação de comportamento (JS) da estrutura (HTML)
function setupEventListeners() {
    const btnEspecificos = document.getElementById("btnEspecificos");
    const btnGerais = document.getElementById("btnGerais");

    btnEspecificos.addEventListener("click", function() {
        changeArea(this.getAttribute("data-area"));
    });

    btnGerais.addEventListener("click", function() {
        changeArea(this.getAttribute("data-area"));
    });
}

async function fetchTopics() {
    try {
        const response = await fetch('/api/topics/');
        allTopics = await response.json();
        updateUI();
    } catch (error) {
        console.error("Erro ao buscar tópicos:", error);
    }
}

function changeArea(area) {
    currentArea = area;
    
    // Atualiza os botões visuais no sidebar
    document.getElementById("btnEspecificos").classList.toggle("active", area === "Conhecimentos Específicos");
    document.getElementById("btnGerais").classList.toggle("active", area === "Conhecimentos Gerais");
    
    // Atualiza o título (textContent é seguro contra XSS)
    document.getElementById("pageTitle").textContent = area;
    
    updateUI();
}

function updateUI() {
    const filteredTopics = allTopics.filter(t => t.area === currentArea);
    renderTopics(filteredTopics);
    updateProgress(filteredTopics);
}

function renderTopics(topics) {
    const container = document.getElementById('topicsContainer');
    
    // SEGURANÇA OWASP: Substitui container.innerHTML = ''; por replaceChildren()
    container.replaceChildren();

    const grouped = topics.reduce((acc, topic) => {
        acc[topic.category] = acc[topic.category] || [];
        acc[topic.category].push(topic);
        return acc;
    }, {});

    for (const [category, items] of Object.entries(grouped)) {
        const section = document.createElement('div');
        section.className = 'category';

        const title = document.createElement('h2');
        title.textContent = category; 
        section.appendChild(title);

        items.forEach(item => {
            // Container principal do tópico
            const div = document.createElement('div');
            div.className = `topic-item ${item.is_completed ? 'completed' : ''}`;

            // Wrapper para manter o checkbox e o label alinhados
            const headerWrapper = document.createElement('div');
            headerWrapper.className = 'topic-header';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `topic-${item.id}`;
            checkbox.checked = item.is_completed;
            checkbox.addEventListener('change', () => toggleTopic(item.id, checkbox.checked));

            const label = document.createElement('label');
            label.htmlFor = `topic-${item.id}`;
            label.textContent = item.title; 

            headerWrapper.appendChild(checkbox);
            headerWrapper.appendChild(label);
            div.appendChild(headerWrapper);

            // VERIFICAÇÃO ESPECÍFICA: Se o tópico for a Resolução CNJ 335/2020, anexa o resumo expansível
            if (item.title.includes("Resolução CNJ nº 335/2020")) {
                const details = document.createElement('details');
                details.className = 'topic-details';
                
                // Usamos innerHTML aqui exclusivamente para montar o template estático (sem inputs do utilizador, logo, sem risco XSS)
                details.innerHTML = `
                    <summary>📘 Ver Resumo para Concurso</summary>
                    <div class="topic-details-content">
                        <p><strong>Objetivo:</strong> Criar a PDPJ-Br, plataforma que integra os sistemas eletrônicos de todos os tribunais brasileiros.</p>
                        <ul>
                            <li><strong>PJe:</strong> continua sendo o sistema prioritário do CNJ.</li>
                            <li><strong>Integração:</strong> reúne os sistemas judiciais em um ambiente unificado.</li>
                            <li><strong>Marketplace:</strong> compartilha gratuitamente aplicações, módulos e microsserviços.</li>
                            <li><strong>Desenvolvimento comunitário:</strong> tribunais colaboram e compartilham soluções.</li>
                            <li><strong>Tecnologia:</strong> utiliza microsserviços, computação em nuvem e código aberto.</li>
                            <li><strong>Proibição:</strong> impede contratar sistemas privados que gerem dependência tecnológica.</li>
                            <li><strong>Segurança:</strong> deve cumprir a LGPD, garantindo proteção dos dados.</li>
                            <li><strong>Nuvem nacional:</strong> dados armazenados em datacenters no território brasileiro.</li>
                        </ul>
                        
                        <h4>📌 Artigos mais importantes</h4>
                        <table>
                            <tr><td><strong>Art. 1º</strong></td><td>Criação da PDPJ-Br e prioridade do PJe</td></tr>
                            <tr><td><strong>Art. 2º</strong></td><td>Objetivos da plataforma</td></tr>
                            <tr><td><strong>Art. 3º</strong></td><td>Marketplace de soluções</td></tr>
                            <tr><td><strong>Art. 4º</strong></td><td>Requisitos tecnológicos e LGPD</td></tr>
                            <tr><td><strong>Art. 5º</strong></td><td>Proibição de dependência tecnológica</td></tr>
                            <tr><td><strong>Art. 14</strong></td><td>Nuvem e datacenter nacional</td></tr>
                            <tr><td><strong>Art. 23</strong></td><td>Não se aplica a sistemas não-judiciais</td></tr>
                        </table>

                        <div class="alert-box">
                            <strong>⚠️ Pegadinhas VUNESP:</strong><br>
                            A PDPJ-Br não obriga uso exclusivo do PJe, mas ele é prioritário. Código aberto é preferencial, não obrigatório.<br>
                            <em>Macete: PDPJ-Br = Integração + Microsserviços + Nuvem + Segurança + LGPD.</em>
                        </div>
                    </div>
                `;
                div.appendChild(details);
            }

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
    
    const topic = allTopics.find(t => t.id === id);
    if(topic) topic.is_completed = isCompleted;
    updateUI();
}

function updateProgress(topics) {
    if(topics.length === 0) return;
    const completed = topics.filter(t => t.is_completed).length;
    const percentage = Math.round((completed / topics.length) * 100);
    
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${percentage}% Concluído (${completed} de ${topics.length} tópicos)`;
}