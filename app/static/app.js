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
    `,
    // -----------------------------------------------------
    // TÓPICO 41: Resolução CNJ nº 396/2021 e Portaria CNJ 162/2021
    // -----------------------------------------------------
    41: `
        <summary>📘 Ver Resumo para Concurso (Segurança Cibernética: Res. 396 e Port. 162)</summary>
        <div class="topic-details-content">
            
            <!-- PARTE 1: RESOLUÇÃO CNJ 396/2021 -->
            <h4 style="margin-top: 0; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                🛡️ PARTE 1: Resolução CNJ nº 396/2021 (ENSEC-PJ e PSEC-PJ)
            </h4>
            <p><strong>Escopo:</strong> Institui a Estratégia Nacional e a Política de Segurança Cibernética do Poder Judiciário. Abrange segurança física e lógica, garantia dos atributos CIDA (Confidencialidade, Integridade, Disponibilidade e Autenticidade) e continuidade de negócios.</p>

            <p><strong>1. Âmbito e Exceção Obrigatória (Art. 1º):</strong> Aplica-se a todo o Poder Judiciário, <strong>EXCETO AO SUPREMO TRIBUNAL FEDERAL (STF)</strong>.</p>

            <p><strong>2. Proteção a Infraestruturas Críticas (Art. 11):</strong></p>
            <ul>
                <li><strong>Periodicidade de Testes (Art. 11, X):</strong> Avaliação e testes de conformidade em segurança ao menos <strong>semestralmente</strong>.</li>
                <li><strong>Equipe Técnica (Art. 11, II):</strong> Obrigatoriedade de instituir e manter equipe <strong>ETIR própria</strong> em cada tribunal.</li>
                <li><strong>Backups (Art. 11, VI):</strong> Atualizados, segregados de forma automática e gravados em formato que viabilize análise forense.</li>
                <li><strong>Logs (Art. 11, IV):</strong> Análise consolidada de registros de auditoria em múltiplas fontes para automação de respostas.</li>
                <li><strong>Teletrabalho e MFA (Art. 11, VIII e IX):</strong> Requisitos formais para trabalho remoto e obrigatoriedade de <strong>duplo fator de autenticação (MFA)</strong> em acessos externos e novos sistemas.</li>
                <li><strong>Contenção Rápida (Art. 8º, Parágrafo único):</strong> Prerrogativa da Alta Administração de suspender o acesso público a sistemas para conter incidentes graves.</li>
            </ul>

            <p><strong>3. Governança e a "Pegadinha de Ouro" (Art. 21):</strong></p>
            <ul>
                <li>A estrutura de Segurança da Informação deve ser subordinada diretamente à <strong>Alta Administração</strong> e <strong>DESVINCULADA DA ÁREA DE TIC</strong> (proibida subordinação ao diretor de TI para evitar conflito de interesses).</li>
                <li><strong>Orçamento Específico (Art. 31):</strong> Despesas em cibersegurança devem constar em rubrica orçamentária própria.</li>
            </ul>

            <p><strong>4. Instâncias Colegiadas e Operacionais:</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Instância</th>
                        <th>Âmbito</th>
                        <th>Atribuição Central</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>CGSI-PJ</strong> (Art. 14)</td>
                        <td>Nacional (CNJ)</td>
                        <td>Comitê Gestor: assessora o CNJ e define diretrizes. Reúne-se <strong>semestralmente</strong>.</td>
                    </tr>
                    <tr>
                        <td><strong>CGSI Local</strong> (Art. 20)</td>
                        <td>Tribunal</td>
                        <td>Comitê de Governança interno: assessora a Presidência local e prioriza riscos.</td>
                    </tr>
                    <tr>
                        <td><strong>CPTRIC-PJ</strong> (Art. 18)</td>
                        <td>Nacional (CNJ)</td>
                        <td>Centro central do CNJ: recebe a <strong>notificação compulsória</strong> de incidentes do país.</td>
                    </tr>
                    <tr>
                        <td><strong>ETIR</strong> (Art. 19)</td>
                        <td>Tribunal</td>
                        <td>Equipe de Resposta técnica local na ponta, federada ao CPTRIC-PJ.</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>5. Os 4 Instrumentos Oficiais da PSEC-PJ (Arts. 25 a 27):</strong></p>
            <ol>
                <li><strong>ENSEC-PJ:</strong> Estratégia macro e metas.</li>
                <li><strong>PPINC-PJ:</strong> Protocolo de Prevenção de Incidentes (diretrizes proativas).</li>
                <li><strong>PGCC-PJ:</strong> Protocolo de Gerenciamento de Crises (acionado em alto impacto; convoca o Comitê de Crise).</li>
                <li><strong>PIILC-PJ:</strong> Protocolo de Investigação de Ilícitos (cadeia de custódia e envio à polícia/MP).</li>
            </ol>
            <p><em>Tripé da Gestão de Usuários (Art. 29): Identidades, Acessos e Privilégios (convergindo para login único).</em></p>

            <!-- PARTE 2: PORTARIA CNJ 162/2021 -->
            <h4 style="margin-top: 30px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                ⚙️ PARTE 2: Portaria CNJ nº 162/2021 (Padronização Operacional e Anexos)
            </h4>
            <p><strong>Finalidade:</strong> Regulamenta operacionalmente a Res. 396/2021 (Arts. 25, § 2º e 26), incorporando ISO 27001, ISO 27005, Normas do GSI/PR (04, 06, 08 e 21) e ENTIC-JUD (Res. 370/2021).</p>

            <p><strong>Estrutura Completa dos 8 Anexos (Arts. 1º a 3º):</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Anexo</th>
                        <th>Tipo</th>
                        <th>Nome do Documento</th>
                        <th>Foco Operacional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Anexo I</strong></td>
                        <td>Protocolo</td>
                        <td><strong>PPINC-PJ</strong> (Prevenção)</td>
                        <td>Higiene cibernética, gestão de vulnerabilidades e defesa ativa.</td>
                    </tr>
                    <tr>
                        <td><strong>Anexo II</strong></td>
                        <td>Protocolo</td>
                        <td><strong>PGCRC-PJ</strong> (Crises)</td>
                        <td>Incidentes de larga escala; acionamento obrigatório do Comitê de Crise.</td>
                    </tr>
                    <tr>
                        <td><strong>Anexo III</strong></td>
                        <td>Protocolo</td>
                        <td><strong>PIILC-PJ</strong> (Ilícitos)</td>
                        <td>Forense digital, preservação de provas e apoio à persecução penal.</td>
                    </tr>
                    <tr>
                        <td><strong>Anexo IV</strong></td>
                        <td>Manual</td>
                        <td>Proteção de Infraestruturas Críticas</td>
                        <td>Tolerância a falhas, resiliência, redundância física/lógica de datacenters.</td>
                    </tr>
                    <tr>
                        <td><strong>Anexo V</strong></td>
                        <td>Manual</td>
                        <td>Ameaças e Confiança Digital</td>
                        <td>Inteligência contra ameaças avançadas, criptografia e assinatura digital.</td>
                    </tr>
                    <tr>
                        <td><strong>Anexo VI</strong></td>
                        <td>Manual</td>
                        <td>Gestão de Identidades</td>
                        <td>Tripé (identidades, acessos e privilégios), SSO e MFA obrigatório.</td>
                    </tr>
                    <tr>
                        <td><strong>Anexo VII</strong></td>
                        <td>Manual</td>
                        <td>Educação e Cultura</td>
                        <td>Treinamento continuado, combate a phishing e engenharia social.</td>
                    </tr>
                    <tr>
                        <td><strong>Anexo VIII</strong></td>
                        <td>Glossário</td>
                        <td>Glossário Técnico</td>
                        <td>Padronização semântica e terminológica obrigatória no Judiciário.</td>
                    </tr>
                </tbody>
            </table>

            <div class="alert-box">
                <strong>⚠️ PONTOS CRÍTICOS PARA A VUNESP (PEGADINHAS RECORRENTES):</strong><br>
                1. <strong>Exceção do STF (Art. 1º Res. 396 / Art. 5º Port. 162):</strong> Todo o Poder Judiciário adota obrigatoriamente, <em>com exceção do STF</em>.<br>
                2. <strong>Independência da Segurança (Art. 21 Res. 396):</strong> Segurança da Informação é subordinada à <em>Alta Administração</em> e <em>DESVINCULADA de TIC</em>.<br>
                3. <strong>Vigência Fracionada da Portaria 162 (Art. 7º):</strong><br>
                   • <em>Vigência IMEDIATA:</em> Protocolos (Anexos I, II e III — PPINC-PJ, PGCRC-PJ e PIILC-PJ).<br>
                   • <em>Vacatio legis de 120 dias:</em> Manuais de Referência (Anexos IV a VII).<br>
                4. <strong>Testes de Segurança (Art. 11, X Res. 396):</strong> Periodicidade mínima <em>semestral</em> (não anual).<br>
                5. <strong>Reunião do CGSI-PJ (Art. 16 Res. 396):</strong> Periodicidade ordinária <em>semestral</em>.<br>
                6. <strong>Atualização das Normas (Art. 4º Port. 162):</strong> Pode ocorrer a qualquer tempo por provocação do Comitê Gestor (não é ato exclusivo do Plenário do CNJ).
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