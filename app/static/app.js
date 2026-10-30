let allTopics = [];
let currentArea = "Conhecimentos Específicos";

// Repositório de resumos vinculados diretamente pelo ID da base de dados
const resumosTopicos = {
    37: `
        <summary>📘 Ver Resumo para Concurso</summary>
        <div class="topic-details-content">
            <p><strong>Objetivo:</strong> Criar a PDPJ-Br, plataforma que integra os sistemas eletrônicos de todos os tribunais brasileiros.</p>
            <ul>
                <li><strong>PJe:</strong> continua sendo o sistema prioritário do CNJ.</li>
                <li><strong>Integração:</strong> reúne os sistemas judiciais em um ambiente unificado.</li>
                <li><strong>Marketplace:</strong> compartilha gratuitamente aplicações, módulos e microsserviços.</li>
                <li><strong>Desenvolvimento comunitário:</strong> tribunais colaboram e compartilham soluções.</li>
                <li><strong>Tecnologia:</strong> utiliza microsserviços, computação em nuvem e código aberto (preferencial).</li>
                <li><strong>Proibição:</strong> impede contratar sistemas privados que gerem dependência tecnológica.</li>
                <li><strong>Segurança:</strong> conformidade obrigatória com a LGPD.</li>
                <li><strong>Nuvem nacional:</strong> dados obrigatoriamente armazenados em datacenters no Brasil.</li>
            </ul>
            
            <h4>📌 Artigos mais importantes para memorizar</h4>
            <table>
                <tr><td><strong>Art. 1º</strong></td><td>Criação da PDPJ-Br e prioridade do PJe</td></tr>
                <tr><td><strong>Art. 2º</strong></td><td>Objetivos da plataforma</td></tr>
                <tr><td><strong>Art. 3º</strong></td><td>Marketplace de soluções</td></tr>
                <tr><td><strong>Art. 4º</strong></td><td>Requisitos tecnológicos e LGPD</td></tr>
                <tr><td><strong>Art. 5º</strong></td><td>Proibição de dependência tecnológica</td></tr>
                <tr><td><strong>Art. 7º</strong></td><td>Coordenação pelo CNJ</td></tr>
                <tr><td><strong>Art. 14</strong></td><td>Nuvem e datacenter nacional</td></tr>
                <tr><td><strong>Art. 15</strong></td><td>Manutenção e aprimoramento do PJe</td></tr>
                <tr><td><strong>Art. 23</strong></td><td>Não se aplica a sistemas não relacionados a processo judicial</td></tr>
            </table>

            <div class="alert-box">
                <strong>⚠️ Pegadinhas VUNESP:</strong><br>
                1. A PDPJ-Br não obriga o abandono de outros sistemas, mas o PJe é prioritário.<br>
                2. Código aberto é de uso preferencial, não impositivo.<br>
                <em>Macete: PDPJ-Br = Integração + Microsserviços + Nuvem + Segurança + LGPD.</em>
            </div>
        </div>
    `,
    // -----------------------------------------------------
    // TÓPICO 39: Portarias CNJ nº 252/2020 e 253/2020
    // -----------------------------------------------------
    39: `
        <summary>📘 Ver Resumo para Concurso (Portarias 252 e 253)</summary>
        <div class="topic-details-content">
            
            <!-- PORTARIA 252 -->
            <h4 style="margin-top: 0; color: var(--primary); border-bottom: 1px solid #cbd5e1; padding-bottom: 5px;">📜 Portaria CNJ nº 252/2020: Governança da PDPJ-Br</h4>
            <p><strong>Objetivo:</strong> Estabelecer como será a governança e a gestão da PDPJ-Br.</p>
            <ul>
                <li><strong>Integração:</strong> soluções devem seguir a arquitetura e os padrões da plataforma.</li>
                <li><strong>Compartilhamento:</strong> evitar soluções duplicadas e dependência de componentes proprietários essenciais.</li>
                <li><strong>Autonomia:</strong> o órgão deve possuir propriedade intelectual e autonomia para modificar suas aplicações.</li>
                <li><strong>Adesão:</strong> exige assinatura de Termo de Adesão do CNJ.</li>
            </ul>

            <h4>📌 Estrutura de Governança (Art. 4º)</h4>
            <p>Coordenação central: <strong>Comissão Permanente de TI e Infraestrutura do CNJ.</strong></p>
            <table>
                <tr><td><strong>Comitê Gestor Nacional</strong></td><td>Supervisão geral e decisões estratégicas</td></tr>
                <tr><td><strong>Comitês dos Tribunais</strong></td><td>Avaliar necessidades e acompanhar implantação local</td></tr>
                <tr><td><strong>Gerência Executiva</strong></td><td>Coordenar desenvolvimento e manutenção</td></tr>
                <tr><td><strong>Grupo de Desenvolvimento</strong></td><td>Corrigir erros e garantir qualidade técnica</td></tr>
                <tr><td><strong>Grupo de Requisitos de Negócio</strong></td><td>Avaliar demandas e melhorias</td></tr>
            </table>

            <!-- PORTARIA 253 -->
            <h4 style="margin-top: 30px; color: var(--primary); border-bottom: 1px solid #cbd5e1; padding-bottom: 5px;">💻 Portaria CNJ nº 253/2020: Padrões Técnicos</h4>
            <p><strong>Objetivo:</strong> Estabelecer os padrões técnicos para desenvolver módulos e microsserviços da PDPJ-Br.</p>
            <ul>
                <li><strong>Arquitetura & Código:</strong> microsserviços (preferencialmente DDD), APIs REST (API Gateway) e versionamento via Git.</li>
                <li><strong>Linguagem & Backend:</strong> Java com Spring Boot (preferencial).</li>
                <li><strong>Mensageria & Integração:</strong> coreografia e mensageria (Message Broker).</li>
                <li><strong>Segurança:</strong> Autenticação via OAuth2 e SSO.</li>
                <li><strong>Infraestrutura:</strong> escalabilidade horizontal (microsserviços stateless).</li>
                <li><strong>Automação & Qualidade:</strong> CI obrigatório, CD preferencial. Testes automatizados com cobertura obrigatória (incentivo ao TDD).</li>
                <li><strong>Documentação:</strong> OpenAPI 3.0.</li>
                <li><strong>Interface (UI):</strong> uso do UIKit (padronização de usabilidade e acessibilidade).</li>
            </ul>

            <h4>📌 Classificação dos Serviços (Art. 5º)</h4>
            <ol>
                <li><strong>Estruturantes:</strong> funcionalidades essenciais da plataforma.</li>
                <li><strong>Negociais:</strong> distribuição de processos, custas e audiências.</li>
                <li><strong>Integração externa:</strong> comunicação com sistemas externos (ex: SISBAJUD).</li>
                <li><strong>Comunidade externa:</strong> soluções por entidades fora do Judiciário.</li>
            </ol>

            <div class="alert-box">
                <strong>⚠️ Atenção VUNESP (Pegadinhas):</strong><br>
                • <strong>Resolução 335:</strong> Cria a PDPJ-Br (O QUÊ).<br>
                • <strong>Portaria 252:</strong> Organiza a Governança (QUEM).<br>
                • <strong>Portaria 253:</strong> Define os Padrões Técnicos (COMO).<br>
                <br>
                <strong>Grau de Obrigatoriedade (Portaria 253):</strong><br>
                • <em>Obrigatório:</em> CI, Relatório de cobertura de testes, OpenAPI 3.0.<br>
                • <em>Preferencial/Incentivado:</em> Java/Spring Boot, DDD, CD (Deploy Contínuo), TDD.
            </div>
        </div>
    `
};

document.addEventListener("DOMContentLoaded", () => {
    fetchTopics();
    setupEventListeners();
});

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
    
    document.getElementById("btnEspecificos").classList.toggle("active", area === "Conhecimentos Específicos");
    document.getElementById("btnGerais").classList.toggle("active", area === "Conhecimentos Gerais");
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
            const div = document.createElement('div');
            div.className = `topic-item ${item.is_completed ? 'completed' : ''}`;

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

            // Vinculação atômica por ID: elimina falhas de caracteres especiais ou encoding
            if (resumosTopicos[item.id]) {
                const details = document.createElement('details');
                details.className = 'topic-details';
                details.innerHTML = resumosTopicos[item.id];
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
    if (topic) topic.is_completed = isCompleted;
    updateUI();
}

function updateProgress(topics) {
    if (topics.length === 0) return;
    const completed = topics.filter(t => t.is_completed).length;
    const percentage = Math.round((completed / topics.length) * 100);
    
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${percentage}% Concluído (${completed} de ${topics.length} tópicos)`;
}