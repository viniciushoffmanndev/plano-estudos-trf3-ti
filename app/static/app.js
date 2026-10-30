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
    `,
    // -----------------------------------------------------
    // TÓPICO 40: Portaria CNJ nº 131/2021
    // -----------------------------------------------------
    40: `
        <summary>📘 Ver Resumo para Concurso (Portaria 131/2021 - Código-Fonte e Revisão por Pares)</summary>
        <div class="topic-details-content">
            <h4 style="margin-top: 0; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                🔍 Portaria CNJ nº 131/2021: Grupo Revisor de Código-Fonte da PDPJ-Br e PJe
            </h4>
            <p><strong>Objetivo:</strong> Institui o colegiado técnico responsável pela garantia da qualidade (QA) e revisão por pares (Peer Review) das soluções de software judiciário nacional (em cumprimento à Res. 335/2020 e Portaria 252/2020).</p>

            <p><strong>1. Natureza, Caráter e Limites (Arts. 1º, 3º e 8º):</strong></p>
            <ul>
                <li><strong>Caráter Honorífico (Art. 1º, Parágrafo único):</strong> Atuação não remunerada (sem gratificação ou hora extra).</li>
                <li><strong>Colegiado Permanente (Art. 8º):</strong> Não se trata de comissão temporária.</li>
                <li><strong>Limitação Decisória Crítica (Art. 3º, III):</strong> O grupo realiza benchmarking e testes comparativos entre soluções concorrentes, mas <strong>NÃO escolhe projetos</strong> (a decisão gerencial/política cabe à Gerência Executiva da PDPJ-Br).</li>
            </ul>

            <p><strong>2. Composição e Coordenação (Arts. 2º, 4º e 5º):</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Segmento / Origem</th>
                        <th>Quantitativo Mínimo</th>
                        <th>Base Legal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Coordenação / Membros Natos</strong></td>
                        <td>Servidores da Divisão do PJe (DPJe/CNJ)</td>
                        <td>Art. 2º, § 4º e Art. 4º</td>
                    </tr>
                    <tr>
                        <td><strong>Justiça Estadual (TJs)</strong></td>
                        <td><strong>5 ou mais</strong> servidores indicados pelos TJs</td>
                        <td>Art. 5º, I</td>
                    </tr>
                    <tr>
                        <td><strong>Justiça Federal (TRFs)</strong></td>
                        <td><strong>5 ou mais</strong> servidores indicados pelo CJF</td>
                        <td>Art. 5º, II</td>
                    </tr>
                    <tr>
                        <td><strong>Justiça Eleitoral (TREs)</strong></td>
                        <td><strong>5 ou mais</strong> servidores indicados pelo TSE</td>
                        <td>Art. 5º, III</td>
                    </tr>
                    <tr>
                        <td><strong>Justiça do Trabalho (TRTs)</strong></td>
                        <td><strong>5 ou mais</strong> servidores indicados pelo CSJT</td>
                        <td>Art. 5º, IV</td>
                    </tr>
                </tbody>
            </table>
            <p style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">
                <em>Perfil: experiência em desenvolvimento de software e preferencialmente servidores efetivos (Art. 2º, § 1º).</em>
            </p>

            <p><strong>3. Pipeline de Aceite de Código: Do Linter ao Merge (Arts. 3º e 6º):</strong></p>
            <pre style="background: #f1f5f9; padding: 12px; border-radius: 6px; font-size: 0.8rem; overflow-x: auto; line-height: 1.4; border: 1px solid #cbd5e1;">
[Desenvolvedor / Tribunal de Origem]
               │
               ▼
┌──────────────────────────────────────────────┐
│  1. Análise Automatizada Prévia de CI        │ (Art. 3º, § 1º)
│  (Linters, métricas de complexidade e SAST)  │
└──────────────────────┬───────────────────────┘
                       │
       ┌───────────────┴───────────────┐
       ▼ Reprovado no índice           ▼ Aprovado nos índices mínimos
┌──────────────────────┐    ┌─────────────────────────────────────────┐
│ Rejeição Sumária     │    │ 2. Encaminhamento à Sprint Quinzenal    │ (Art. 6º, § 1º)
│ (Art. 3º, § 2º)      │    └────────────────────┬────────────────────┘
└──────────────────────┘                         │
                                                 ▼
                            ┌─────────────────────────────────────────┐
                            │ 3. Aprovação por no mínimo 1 TRIBUNAL   │ (Art. 6º, § 2º)
                            │ DISTINTO daquele que desenvolveu + teste│
                            └────────────────────┬────────────────────┘
                                                 │
                                                 ▼
                                    [Merge Request Concluído]
            </pre>

            <ul>
                <li><strong>Rejeição Sumária (Art. 3º, § 2º):</strong> Se não atingir os índices automatizados de linter, testes e complexidade, o código é rejeitado antes de chegar aos revisores humanos.</li>
                <li><strong>Sprints Quinzenais (Art. 6º, § 1º):</strong> Ciclo de trabalho virtual realizado a cada <strong>15 dias</strong>.</li>
                <li><strong>Aprovação Cruzada Obrigatória (Art. 6º, § 2º):</strong> O merge request exige a aprovação de pelo menos <strong>um tribunal distinto</strong> do desenvolvedor da solução, com comprovação dos testes executados.</li>
                <li><strong>Regra de Sobrestamento (Art. 6º, § 4º):</strong> Demandas não analisadas na sprint corrente vão para a seguinte com <strong>prioridade obrigatória</strong> sobre novas requisições.</li>
                <li><strong>Custódia Centralizada (Art. 7º):</strong> Todas as evidências, revisões e documentações ficam guardadas em repositório sob custódia do CNJ.</li>
            </ul>

            <div class="alert-box">
                <strong>⚠️ Pegadinhas Literais da VUNESP:</strong><br>
                1. <strong>Sem Remuneração:</strong> Função de caráter estritamente honorífico (não há gratificação de função).<br>
                2. <strong>Quem aprova o Merge:</strong> Não é exclusivo do CNJ; exige aprovação de pelo menos um <em>tribunal diferente</em> do proponente.<br>
                3. <strong>Sem Escolha de Projeto:</strong> O grupo não decide substituição política de softwares; limita-se a pareceres técnicos e benchmarking.<br>
                4. <strong>Periodicidade das Sprints:</strong> São <em>quinzenais</em> (15 dias), e não mensais.<br>
                5. <strong>Composição:</strong> <em>5 ou mais servidores</em> por ramo da Justiça (TJs, CJF, TSE e CSJT).
            </div>
        </div>
    `,
    // -----------------------------------------------------
    // TÓPICO 38: Resolução CNJ nº 522/2023 (MoReq-Jus)
    // -----------------------------------------------------
    38: `
        <summary>📘 Ver Resumo para Concurso (Resolução 522/2023 - MoReq-Jus)</summary>
        <div class="topic-details-content">
            <h4 style="margin-top: 0; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                📑 Resolução CNJ nº 522/2023: Novo MoReq-Jus
            </h4>
            <p><strong>Objetivo:</strong> Aprova a versão atualizada do Modelo de Requisitos para Sistemas Informatizados de Gestão de Processos e Documentos do Poder Judiciário (MoReq-Jus) e <strong>revoga expressamente a Resolução CNJ nº 91/2009</strong> (Art. 10). Articula-se diretamente com a PDPJ-Br (Res. 335), Proname (Res. 324) e Cibersegurança (Res. 396).</p>

            <p><strong>1. Escopo Arquitetural e Atributos de Segurança (Arts. 1º e 2º):</strong></p>
            <ul>
                <li><strong>Abrangência Total:</strong> Aplica-se às atividades judiciais (área-fim) e administrativas (área-meio) de todo o Poder Judiciário.</li>
                <li><strong>Arquitetura Moderna:</strong> Obrigatoriedade explícita mesmo para aplicações segmentadas em módulos e <strong>microsserviços</strong>.</li>
                <li><strong>Septeto de Proteção (Art. 2º):</strong> Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não repúdio, Conformidade e Preservação.</li>
            </ul>

            <p><strong>2. Regra de Conflito de Requisitos e PDPJ-Br (Art. 3º):</strong></p>
            <ul>
                <li><strong>Regra de Ouro (Art. 3º, § 1º):</strong> Em caso de colisão entre requisitos, os <strong>requisitos não funcionais de segurança prevalecem obrigatoriamente</strong> sobre requisitos funcionais negociais ou prazos.</li>
                <li><strong>Requisito de Entrada (Art. 3º, § 2º):</strong> A conformidade com o MoReq-Jus é condição obrigatória para ingresso de qualquer módulo no catálogo da PDPJ-Br.</li>
            </ul>

            <p><strong>3. Escalonamento Progressivo de Prazos (Arts. 5º, 6º e 8º):</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Prazo</th>
                        <th>Obrigação Legal</th>
                        <th>Base Legal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Até 1 ano</strong></td>
                        <td>Recebimento, armazenamento e envio de <strong>100% dos metadados</strong> + informe inicial de cumprimento.</td>
                        <td>Art. 6º, I e Art. 5º, § 2º</td>
                    </tr>
                    <tr>
                        <td><strong>Até 2 anos</strong></td>
                        <td>Adequação integral aos <strong>Requisitos Funcionais</strong>.</td>
                        <td>Art. 6º, II</td>
                    </tr>
                    <tr>
                        <td><strong>Até 3 anos</strong></td>
                        <td>Adequação integral aos <strong>Requisitos Não Funcionais</strong>.</td>
                        <td>Art. 6º, III</td>
                    </tr>
                </tbody>
            </table>
            <p style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">
                <em>Gatilho Temporal (Art. 8º): Os prazos de 1, 2 e 3 anos só correm após a publicação oficial dos instrumentos de avaliação pelo CNJ (que tem até 12 meses para publicá-los).</em>
            </p>

            <p><strong>4. Governança e Preservação Digital (Arts. 4º, 5º e 7º):</strong></p>
            <ul>
                <li><strong>Programa MoReq-Aval (Art. 4º, § 1º):</strong> Avaliação contínua conduzida pelo DTI/CNJ com apoio do Comitê do Proname.</li>
                <li><strong>Sistemas Cedidos/Terceiros (Art. 5º, § 1º):</strong> Tribunais que usam PJe, SEI ou sistemas contratados respondem formalmente pela comprovação de conformidade.</li>
                <li><strong>Vedação ao Retrocesso (Art. 7º, § 1º):</strong> Proibida a troca por sistema menos aderente. Qualquer alteração exige estudo técnico conjunto entre o <em>Gestor de TI</em> e o <em>Gestor de Gestão Documental</em>.</li>
                <li><strong>Guarda Longa/Permanente (Art. 7º, § 2º):</strong> Obrigatoriedade legal de recolhimento em <strong>RDC-Arq</strong> (Repositório Arquivístico Digital Confiável).</li>
            </ul>

            <div class="alert-box">
                <strong>⚠️ ARMADILHAS LITERAIS PARA A VUNESP:</strong><br>
                1. <strong>Revogação Histórica:</strong> A Resolução CNJ nº 91/2009 foi <em>revogada expressamente</em> (Art. 10).<br>
                2. <strong>Hierarquia de Requisitos:</strong> Requisitos <em>Não Funcionais de Segurança</em> vencem qualquer requisito funcional.<br>
                3. <strong>Ordem Temporal dos Prazos:</strong> Memorize <em>1 ano = Metadados (100%)</em> ➔ <em>2 anos = Funcionais</em> ➔ <em>3 anos = Não Funcionais</em>.<br>
                4. <strong>Repositório Seguro:</strong> A norma exige textualmente <strong>RDC-Arq</strong> (não confunda com storage ou cloud comum).<br>
                5. <strong>Concursos Públicos (Art. 9º):</strong> O MoReq-Jus é de inclusão obrigatória nos editais de concurso de TI e gestão documental do Judiciário.
            </div>
        </div>
    `,
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