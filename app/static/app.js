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
    // -----------------------------------------------------
    // TÓPICO 36: LGPD (Lei nº 13.709/2018) no Setor Público
    // -----------------------------------------------------
    36: `
        <summary>📘 Ver Conteúdo Completo (LGPD — Lei nº 13.709/2018)</summary>
        <div class="topic-details-content">

            <!-- 1. OBJETIVO E ALCANCE -->
            <h4 style="margin-top: 0; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                1. Objetivo e Alcance da LGPD
            </h4>
            <p><strong>Art. 1º — Objetivo:</strong> A LGPD dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, realizado por pessoa natural ou por pessoa jurídica de direito público ou privado.</p>
            <p>Seu objetivo é proteger:</p>
            <ul>
                <li>Os direitos fundamentais de liberdade e de privacidade;</li>
                <li>O livre desenvolvimento da personalidade da pessoa natural.</li>
            </ul>
            <p>O parágrafo único estabelece que as normas gerais da LGPD são de interesse nacional e devem ser observadas pela União, Estados, Distrito Federal e Municípios.</p>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha VUNESP:</strong> A LGPD não se limita a empresas privadas, à internet ou a bancos de dados digitais. Ela alcança também o Poder Público e tratamentos realizados em meios físicos (papel).
            </div>

            <p><strong>Art. 2º — Fundamentos:</strong> São sete fundamentos:</p>
            <ol>
                <li>Respeito à privacidade.</li>
                <li>Autodeterminação informativa.</li>
                <li>Liberdade de expressão, de informação, de comunicação e de opinião.</li>
                <li>Inviolabilidade da intimidade, da honra e da imagem.</li>
                <li>Desenvolvimento econômico e tecnológico e inovação.</li>
                <li>Livre iniciativa, livre concorrência e defesa do consumidor.</li>
                <li>Direitos humanos, livre desenvolvimento da personalidade, dignidade e exercício da cidadania pelas pessoas naturais.</li>
            </ol>
            <p><em>Atenção: Os fundamentos do art. 2º não são os mesmos que os princípios do art. 6º.</em></p>

            <!-- 2. TERRITORIALIDADE -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                2. Territorialidade — Onde a LGPD se Aplica?
            </h4>
            <p><strong>Art. 3º:</strong> A LGPD aplica-se a qualquer operação de tratamento, independentemente do meio utilizado, do país onde está localizada a sede da pessoa ou empresa, ou do país onde estão armazenados os dados. Basta ocorrer uma das três hipóteses:</p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Inciso</th>
                        <th>Hipótese</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>I</strong></td>
                        <td>Operação de tratamento realizada no território nacional.</td>
                    </tr>
                    <tr>
                        <td><strong>II</strong></td>
                        <td>Atividade destinada à oferta ou ao fornecimento de bens ou serviços ou ao tratamento de dados de indivíduos localizados no Brasil.</td>
                    </tr>
                    <tr>
                        <td><strong>III</strong></td>
                        <td>Dados pessoais objeto do tratamento coletados no território nacional.</td>
                    </tr>
                </tbody>
            </table>
            <p>O § 1º esclarece que os dados são considerados coletados no Brasil quando o titular estiver no território nacional no momento da coleta.</p>
            <p><em>Exemplo: Uma empresa estrangeira que oferece serviços a pessoas localizadas no Brasil pode estar sujeita à LGPD, mesmo sem sede brasileira.</em></p>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha:</strong> Os três incisos são hipóteses <strong>alternativas</strong>, e não cumulativas.
            </div>

            <!-- 3. EXCEÇÕES -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                3. Exceções — Quando a LGPD Não se Aplica?
            </h4>
            <p><strong>Art. 4º:</strong> A lei não se aplica ao tratamento de dados pessoais nas seguintes situações:</p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Hipótese</th>
                        <th>Condição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Uso particular</strong></td>
                        <td>Pessoa natural, para fins exclusivamente particulares e não econômicos.</td>
                    </tr>
                    <tr>
                        <td><strong>Jornalístico e artístico</strong></td>
                        <td>Finalidades exclusivamente jornalísticas ou artísticas.</td>
                    </tr>
                    <tr>
                        <td><strong>Acadêmico</strong></td>
                        <td>Finalidade exclusivamente acadêmica, aplicando-se os arts. 7º e 11.</td>
                    </tr>
                    <tr>
                        <td><strong>Segurança pública</strong></td>
                        <td>Finalidade exclusiva de segurança pública.</td>
                    </tr>
                    <tr>
                        <td><strong>Defesa nacional</strong></td>
                        <td>Finalidade exclusiva de defesa nacional.</td>
                    </tr>
                    <tr>
                        <td><strong>Segurança do Estado</strong></td>
                        <td>Finalidade exclusiva de segurança do Estado.</td>
                    </tr>
                    <tr>
                        <td><strong>Investigação penal</strong></td>
                        <td>Atividades de investigação e repressão de infrações penais.</td>
                    </tr>
                    <tr>
                        <td><strong>Dados provenientes do exterior</strong></td>
                        <td>Desde que preenchidas as condições específicas do art. 4º, IV.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Pontos importantes:</strong></p>
            <ul>
                <li>A exceção para fins acadêmicos não é absoluta: os arts. 7º e 11 continuam aplicáveis.</li>
                <li>As atividades de segurança pública, defesa nacional e investigação penal devem observar legislação específica.</li>
                <li>O tratamento dessas informações por pessoa jurídica de direito privado possui restrições expressas nos §§ 2º e 4º do art. 4º.</li>
            </ul>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha VUNESP:</strong> Não confunda uma exceção à aplicação da LGPD com uma autorização irrestrita para tratar dados pessoais.
            </div>

            <!-- 4. CONCEITOS FUNDAMENTAIS -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                4. Conceitos Fundamentais — Art. 5º
            </h4>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Conceito</th>
                        <th>Definição Essencial</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Dado pessoal</strong></td>
                        <td>Informação relacionada a pessoa natural identificada ou identificável.</td>
                    </tr>
                    <tr>
                        <td><strong>Dado pessoal sensível</strong></td>
                        <td>Informação sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical ou religiosa, filosófica ou política, saúde, vida sexual, dado genético ou biométrico vinculado a pessoa natural.</td>
                    </tr>
                    <tr>
                        <td><strong>Dado anonimizado</strong></td>
                        <td>Dado relativo a titular que não possa ser identificado, considerando meios técnicos razoáveis e disponíveis na ocasião do tratamento.</td>
                    </tr>
                    <tr>
                        <td><strong>Banco de dados</strong></td>
                        <td>Conjunto estruturado de dados pessoais, em um ou vários locais, em suporte eletrônico ou físico.</td>
                    </tr>
                    <tr>
                        <td><strong>Titular</strong></td>
                        <td>Pessoa natural a quem se referem os dados pessoais.</td>
                    </tr>
                    <tr>
                        <td><strong>Controlador</strong></td>
                        <td>Pessoa natural ou jurídica que toma as decisões referentes ao tratamento.</td>
                    </tr>
                    <tr>
                        <td><strong>Operador</strong></td>
                        <td>Pessoa natural ou jurídica que realiza o tratamento em nome do controlador.</td>
                    </tr>
                    <tr>
                        <td><strong>Encarregado</strong></td>
                        <td>Pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre controlador, titulares e ANPD.</td>
                    </tr>
                    <tr>
                        <td><strong>Agentes de tratamento</strong></td>
                        <td>Controlador e operador.</td>
                    </tr>
                    <tr>
                        <td><strong>Tratamento</strong></td>
                        <td>Toda operação realizada com dados pessoais.</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Diferenças que você precisa memorizar:</strong></p>
            <ul>
                <li><strong>Controlador:</strong> decide o que será feito com os dados.</li>
                <li><strong>Operador:</strong> realiza o tratamento em nome do controlador.</li>
                <li><strong>Encarregado:</strong> atua como canal de comunicação.</li>
                <li><strong>Titular:</strong> pessoa natural a quem os dados se referem.</li>
                <li><strong>ANPD:</strong> autoridade responsável por zelar, implementar e fiscalizar o cumprimento da LGPD.</li>
            </ul>
            <p>A redação atualizada do art. 5º, VIII, passou a mencionar expressamente a indicação do encarregado pelo controlador e pelo operador. O inciso XIX também foi atualizado para definir a autoridade nacional como entidade da Administração Pública.</p>

            <p><strong>Outros conceitos importantes:</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Conceito</th>
                        <th>Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Anonimização</strong></td>
                        <td>Uso de meios técnicos razoáveis e disponíveis para impedir a associação direta ou indireta do dado a um indivíduo.</td>
                    </tr>
                    <tr>
                        <td><strong>Consentimento</strong></td>
                        <td>Manifestação livre, informada e inequívoca para finalidade determinada.</td>
                    </tr>
                    <tr>
                        <td><strong>Bloqueio</strong></td>
                        <td>Suspensão temporária de qualquer operação de tratamento, mediante guarda do dado ou banco de dados.</td>
                    </tr>
                    <tr>
                        <td><strong>Eliminação</strong></td>
                        <td>Exclusão de dado ou conjunto de dados armazenados.</td>
                    </tr>
                    <tr>
                        <td><strong>Transferência internacional</strong></td>
                        <td>Transferência de dados pessoais para país estrangeiro ou organismo internacional.</td>
                    </tr>
                    <tr>
                        <td><strong>Uso compartilhado</strong></td>
                        <td>Comunicação, difusão, transferência, interconexão ou tratamento compartilhado de dados nas hipóteses legais.</td>
                    </tr>
                    <tr>
                        <td><strong>Relatório de impacto</strong></td>
                        <td>Documentação do controlador que descreve tratamentos capazes de gerar riscos e as medidas de mitigação.</td>
                    </tr>
                    <tr>
                        <td><strong>Órgão de pesquisa</strong></td>
                        <td>Entidade pública ou pessoa jurídica privada sem fins lucrativos que atenda aos requisitos legais e tenha finalidade de pesquisa.</td>
                    </tr>
                </tbody>
            </table>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha:</strong> Dado anonimizado não é automaticamente dado pessoal. Entretanto, se a anonimização puder ser revertida com meios próprios ou esforços razoáveis, a informação poderá continuar sendo considerada dado pessoal, conforme o art. 12.
            </div>

            <!-- 5. PRINCÍPIOS DA LGPD -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                5. Princípios da LGPD — Art. 6º
            </h4>
            <p>O tratamento deve observar a boa-fé e dez princípios:</p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Nº</th>
                        <th>Princípio</th>
                        <th>O que Significa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>1</strong></td><td><strong>Finalidade</strong></td><td>Propósitos legítimos, específicos, explícitos e informados.</td></tr>
                    <tr><td><strong>2</strong></td><td><strong>Adequação</strong></td><td>Compatibilidade do tratamento com a finalidade informada.</td></tr>
                    <tr><td><strong>3</strong></td><td><strong>Necessidade</strong></td><td>Limitação ao mínimo necessário.</td></tr>
                    <tr><td><strong>4</strong></td><td><strong>Livre acesso</strong></td><td>Consulta facilitada e gratuita sobre tratamento e dados.</td></tr>
                    <tr><td><strong>5</strong></td><td><strong>Qualidade dos dados</strong></td><td>Exatidão, clareza, relevância e atualização.</td></tr>
                    <tr><td><strong>6</strong></td><td><strong>Transparência</strong></td><td>Informações claras, precisas e acessíveis.</td></tr>
                    <tr><td><strong>7</strong></td><td><strong>Segurança</strong></td><td>Medidas técnicas e administrativas de proteção.</td></tr>
                    <tr><td><strong>8</strong></td><td><strong>Prevenção</strong></td><td>Medidas para evitar danos.</td></tr>
                    <tr><td><strong>9</strong></td><td><strong>Não discriminação</strong></td><td>Proibição de tratamento para fins discriminatórios ilícitos ou abusivos.</td></tr>
                    <tr><td><strong>10</strong></td><td><strong>Responsabilização e prestação de contas</strong></td><td>Demonstração da adoção e eficácia das medidas de conformidade.</td></tr>
                </tbody>
            </table>

            <p><strong>Como a VUNESP pode cobrar:</strong></p>
            <ul>
                <li><strong>Finalidade:</strong> o dado não deve ser usado para finalidade posterior incompatível.</li>
                <li><strong>Adequação:</strong> o tratamento precisa ser compatível com a finalidade informada.</li>
                <li><strong>Necessidade:</strong> coletar somente os dados pertinentes, proporcionais e não excessivos.</li>
                <li><strong>Livre acesso:</strong> o titular deve ter consulta facilitada e gratuita.</li>
                <li><strong>Transparência:</strong> o titular precisa receber informações claras e acessíveis.</li>
                <li><strong>Segurança:</strong> proteger contra acessos não autorizados e situações acidentais ou ilícitas.</li>
                <li><strong>Prevenção:</strong> agir antes que o dano aconteça.</li>
                <li><strong>Responsabilização:</strong> não basta afirmar que cumpre a lei; é necessário demonstrar a eficácia das medidas.</li>
            </ul>
            <p><em>Macete: Finalidade, Adequação, Necessidade, Livre acesso, Qualidade, Transparência, Segurança, Prevenção, Não discriminação e Responsabilização.</em></p>

            <!-- 6. HIPÓTESES LEGAIS DE TRATAMENTO -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                6. Hipóteses Legais de Tratamento — Art. 7º
            </h4>
            <p>O tratamento de dados pessoais poderá ocorrer em dez hipóteses:</p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Inciso</th>
                        <th>Base Legal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>I</strong></td><td>Consentimento do titular.</td></tr>
                    <tr><td><strong>II</strong></td><td>Cumprimento de obrigação legal ou regulatória pelo controlador.</td></tr>
                    <tr><td><strong>III</strong></td><td>Execução de políticas públicas pela Administração Pública.</td></tr>
                    <tr><td><strong>IV</strong></td><td>Estudos por órgão de pesquisa, com anonimização sempre que possível.</td></tr>
                    <tr><td><strong>V</strong></td><td>Execução de contrato ou procedimentos preliminares a pedido do titular.</td></tr>
                    <tr><td><strong>VI</strong></td><td>Exercício regular de direitos em processo judicial, administrativo ou arbitral.</td></tr>
                    <tr><td><strong>VII</strong></td><td>Proteção da vida ou da incolumidade física.</td></tr>
                    <tr><td><strong>VIII</strong></td><td>Tutela da saúde, exclusivamente nas condições legais.</td></tr>
                    <tr><td><strong>IX</strong></td><td>Legítimo interesse do controlador ou de terceiro, respeitados os direitos e liberdades fundamentais do titular.</td></tr>
                    <tr><td><strong>X</strong></td><td>Proteção do crédito.</td></tr>
                </tbody>
            </table>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Atenção para a prova:</strong> Consentimento <strong>não é a única base legal</strong> para o tratamento de dados pessoais.
            </div>

            <p><strong>Exemplos práticos:</strong></p>
            <ul>
                <li>Hospital público tratando dados para cumprir uma obrigação legal: obrigação legal ou regulatória.</li>
                <li>Administração Pública utilizando dados necessários à execução de uma política pública: art. 7º, III.</li>
                <li>Empresa utilizando dados necessários à execução de contrato solicitado pelo titular: art. 7º, V.</li>
                <li>Tratamento necessário à proteção da vida: art. 7º, VII.</li>
                <li>Instituição realizando pesquisa: art. 7º, IV.</li>
            </ul>

            <p><strong>Consentimento — arts. 7º e 8º:</strong></p>
            <p>O consentimento deve ser: livre, informado, inequívoco e relacionado a finalidade determinada.</p>
            <p><strong>Outras regras importantes:</strong></p>
            <ol>
                <li>Se escrito, deve constar de cláusula destacada.</li>
                <li>O controlador tem o ônus de provar que obteve o consentimento corretamente.</li>
                <li>É vedado tratamento com vício de consentimento.</li>
                <li>Autorizações genéricas são nulas.</li>
                <li>O consentimento pode ser revogado a qualquer momento, gratuitamente e por procedimento facilitado.</li>
            </ol>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha:</strong> A revogação do consentimento não torna automaticamente ilícitos os tratamentos realizados anteriormente, enquanto amparados pelo consentimento válido.
            </div>

            <!-- 7. DADOS PESSOAIS SENSÍVEIS -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                7. Dados Pessoais Sensíveis — Arts. 5º, II, e 11
            </h4>
            <p>O art. 11 estabelece regras específicas para o tratamento de dados pessoais sensíveis. São exemplos:</p>
            <ul>
                <li>Origem racial ou étnica;</li>
                <li>Convicção religiosa;</li>
                <li>Opinião política;</li>
                <li>Filiação a sindicato ou a organização religiosa, filosófica ou política;</li>
                <li>Dados referentes à saúde ou à vida sexual;</li>
                <li>Dados genéticos ou biométricos vinculados a pessoa natural.</li>
            </ul>

            <p><strong>Hipóteses legais do art. 11:</strong></p>
            <p>O tratamento poderá ocorrer com consentimento específico e destacado, para finalidades específicas; ou sem consentimento, quando indispensável para:</p>
            <ol>
                <li>Cumprimento de obrigação legal ou regulatória.</li>
                <li>Tratamento compartilhado necessário à execução de políticas públicas pela Administração Pública.</li>
                <li>Estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização.</li>
                <li>Exercício regular de direitos, inclusive em contrato e em processo judicial, administrativo ou arbitral.</li>
                <li>Proteção da vida ou da incolumidade física.</li>
                <li>Tutela da saúde, exclusivamente nas condições legais.</li>
                <li>Garantia da prevenção à fraude e da segurança do titular em processos de identificação e autenticação de cadastro em sistemas eletrônicos, respeitados os direitos previstos na LGPD.</li>
            </ol>
            <p><strong>Diferença essencial:</strong> O legítimo interesse, previsto no art. 7º, IX, <strong>não aparece</strong> como hipótese autônoma de tratamento de dados sensíveis no art. 11.</p>

            <p><strong>Comparação: Dados comuns × Sensíveis:</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Aspecto</th>
                        <th>Dados Comuns</th>
                        <th>Dados Sensíveis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Regras principais</strong></td>
                        <td>Art. 7º</td>
                        <td>Art. 11</td>
                    </tr>
                    <tr>
                        <td><strong>Legítimo interesse</strong></td>
                        <td>Pode ser utilizado, observados os requisitos legais</td>
                        <td>Não é base autônoma prevista no art. 11</td>
                    </tr>
                    <tr>
                        <td><strong>Consentimento</strong></td>
                        <td>Uma das bases legais</td>
                        <td>Deve ser específico e destacado quando utilizado</td>
                    </tr>
                    <tr>
                        <td><strong>Proteção</strong></td>
                        <td>Princípios e medidas de segurança da LGPD</td>
                        <td>Proteção reforçada pelas regras específicas</td>
                    </tr>
                </tbody>
            </table>

            <!-- 8. CRIANÇAS E ADOLESCENTES -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                8. Crianças e Adolescentes — Art. 14
            </h4>
            <p>O tratamento de dados pessoais de crianças e adolescentes deverá ser realizado em seu <strong>melhor interesse</strong>.</p>
            <p>Para crianças, o consentimento deve ser:</p>
            <ul>
                <li>Específico;</li>
                <li>Destacado;</li>
                <li>Dado por pelo menos um dos pais ou pelo responsável legal.</li>
            </ul>
            <p>A lei prevê exceção para coleta sem consentimento quando necessária para contatar os pais ou responsável legal, utilizada uma única vez e sem armazenamento, ou para proteção da criança.</p>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha:</strong> A regra expressa de consentimento parental do § 1º refere-se a <em>crianças</em>. Não se deve estender automaticamente essa exigência a todo tratamento de dados de adolescentes.
            </div>

            <!-- 9. DIREITOS DOS TITULARES -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                9. Direitos dos Titulares — Art. 18
            </h4>
            <p>O titular pode obter do controlador, a qualquer momento e mediante requisição:</p>
            <ol>
                <li>Confirmação da existência de tratamento.</li>
                <li>Acesso aos dados.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade.</li>
                <li>Portabilidade dos dados, observada a regulamentação e os segredos comercial e industrial.</li>
                <li>Eliminação dos dados pessoais tratados com consentimento, ressalvadas as hipóteses legais de conservação.</li>
                <li>Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado.</li>
                <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.</li>
                <li>Revogação do consentimento.</li>
            </ol>

            <p><strong>Prazo de atendimento — art. 19:</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Solicitação</th>
                        <th>Prazo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Declaração simplificada</strong></td>
                        <td>Imediatamente.</td>
                    </tr>
                    <tr>
                        <td><strong>Declaração completa</strong></td>
                        <td>Até 15 dias.</td>
                    </tr>
                </tbody>
            </table>
            <p>A declaração completa deve indicar a origem dos dados, a inexistência de registro, os critérios utilizados e a finalidade do tratamento, observados os segredos comercial e industrial.</p>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha VUNESP:</strong> A lei prevê resposta simplificada imediata e declaração completa em até 15 dias. Não confunda esses prazos com os prazos de comunicação de incidentes de segurança.
            </div>

            <!-- 10. TRATAMENTO PELO PODER PÚBLICO -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                10. Tratamento pelo Poder Público — Arts. 23 a 30
            </h4>
            <p>A LGPD também se aplica à Administração Pública. O tratamento deve atender à finalidade pública, à persecução do interesse público e à execução das competências legais ou atribuições legais do serviço público.</p>
            <p><strong>Regras importantes:</strong></p>
            <ul>
                <li>O Poder Público deve informar as hipóteses em que realiza o tratamento de dados pessoais.</li>
                <li>Deve indicar a previsão legal, a finalidade, os procedimentos e as práticas utilizadas.</li>
                <li>O uso compartilhado deve atender a finalidades específicas de execução de políticas públicas e atribuições legais.</li>
                <li>A transferência de dados a entidades privadas é limitada às hipóteses legais.</li>
                <li>A ANPD pode estabelecer normas complementares para as atividades de comunicação e uso compartilhado de dados.</li>
            </ul>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Atenção para concursos:</strong> O Poder Público não pode compartilhar dados pessoais livremente apenas porque os dados estão em seu poder. O compartilhamento deve ter fundamento legal, finalidade pública e observar os princípios da LGPD.
            </div>

            <!-- 11. TRANSFERÊNCIA INTERNACIONAL -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                11. Transferência Internacional de Dados — Arts. 33 a 36
            </h4>
            <p>A transferência internacional de dados pessoais somente é permitida nas hipóteses legais. Entre elas:</p>
            <ul>
                <li>Para países ou organismos internacionais que proporcionem grau de proteção adequado;</li>
                <li>Quando o controlador oferecer e comprovar garantias de cumprimento dos princípios, direitos e regime de proteção da LGPD;</li>
                <li>Quando necessária para cooperação jurídica internacional;</li>
                <li>Para proteção da vida ou da incolumidade física;</li>
                <li>Quando houver autorização da ANPD;</li>
                <li>Quando resultar de compromisso assumido em acordo de cooperação internacional;</li>
                <li>Quando necessária à execução de política pública ou atribuição legal do serviço público, conforme as condições legais;</li>
                <li>Quando o titular fornecer consentimento específico e destacado, após informação prévia sobre o caráter internacional da operação.</li>
            </ul>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha:</strong> A transferência internacional não é proibida. Ela é permitida quando atendidas as condições previstas na LGPD.
            </div>

            <!-- 12. REGISTRO DE OPERAÇÕES E RELATÓRIO DE IMPACTO -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                12. Registro de Operações e Relatório de Impacto — Arts. 37 e 38
            </h4>
            <p><strong>Art. 37 — Registro das operações:</strong> O controlador e o operador devem manter registro das operações de tratamento de dados pessoais que realizarem, especialmente quando baseadas no legítimo interesse.</p>
            <p><strong>Art. 38 — Relatório de impacto:</strong> A ANPD poderá determinar que o controlador elabore relatório de impacto à proteção de dados pessoais, inclusive sobre dados sensíveis. O relatório deve conter, no mínimo:</p>
            <ul>
                <li>Descrição dos tipos de dados coletados;</li>
                <li>Metodologia utilizada para a coleta;</li>
                <li>Metodologia utilizada para garantir a segurança das informações;</li>
                <li>Análise do controlador sobre medidas, salvaguardas e mecanismos de mitigação de riscos.</li>
            </ul>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha:</strong> O registro das operações é obrigação dos agentes de tratamento. Já a elaboração do relatório de impacto pode ser determinada pela ANPD.
            </div>

            <!-- 13. RESPONSABILIDADE E RESSARCIMENTO -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                13. Responsabilidade e Ressarcimento de Danos — Arts. 42 a 45
            </h4>
            <p>O controlador ou operador que causar dano patrimonial, moral, individual ou coletivo em razão de tratamento irregular de dados pessoais poderá ser obrigado a repará-lo.</p>
            <p><strong>Responsabilidade solidária:</strong> O operador poderá responder solidariamente quando descumprir as obrigações da legislação de proteção de dados ou não seguir as instruções lícitas do controlador. Os controladores que estiverem diretamente envolvidos no tratamento do qual decorreram danos também poderão responder solidariamente.</p>
            <p><strong>Exclusão da responsabilidade — art. 43:</strong> Os agentes de tratamento só não serão responsabilizados quando provarem:</p>
            <ol>
                <li>Que não realizaram o tratamento que lhes foi atribuído.</li>
                <li>Que, embora tenham realizado o tratamento, não houve violação à legislação.</li>
                <li>Que o dano decorreu de culpa exclusiva do titular ou de terceiro.</li>
            </ol>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha:</strong> Não basta alegar que não houve culpa. O art. 43 apresenta hipóteses específicas que devem ser provadas pelo agente.
            </div>

            <!-- 14. SEGURANÇA E BOAS PRÁTICAS -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                14. Segurança e Boas Práticas — Arts. 46 a 51
            </h4>
            <p><strong>Art. 46 — Medidas de segurança:</strong> Os agentes de tratamento devem adotar medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, destruição, perda, alteração, comunicação, difusão ou qualquer forma de tratamento inadequado ou ilícito. As medidas devem ser observadas desde a fase de concepção do produto ou serviço até sua execução.</p>
            <p><strong>Art. 47 — Dever de segurança:</strong> O dever de garantir a segurança da informação permanece mesmo após o término do tratamento.</p>
            <p><strong>Art. 48 — Incidente de segurança:</strong> O controlador deve comunicar à ANPD e ao titular a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante aos titulares. A comunicação deve indicar, entre outras informações:</p>
            <ul>
                <li>Natureza dos dados pessoais afetados;</li>
                <li>Informações sobre os titulares envolvidos;</li>
                <li>Medidas técnicas e de segurança utilizadas;</li>
                <li>Riscos relacionados ao incidente;</li>
                <li>Motivos da demora, se a comunicação não tiver sido imediata;</li>
                <li>Medidas adotadas para reverter ou mitigar os efeitos do prejuízo.</li>
            </ul>
            <p><strong>Art. 49 — Sistemas de tratamento:</strong> Os sistemas utilizados para o tratamento de dados pessoais devem ser estruturados de forma a atender aos requisitos de segurança, aos padrões de boas práticas e aos princípios gerais previstos na LGPD.</p>
            <p><strong>Art. 50 — Boas práticas e governança:</strong> Controladores e operadores poderão formular regras de boas práticas e governança, levando em consideração a natureza, o escopo, a finalidade e os riscos do tratamento.</p>
            <p><strong>Art. 51 — Padrões técnicos:</strong> A autoridade nacional estimulará a adoção de padrões técnicos que facilitem o controle dos titulares sobre seus dados pessoais.</p>

            <p><strong>Prazos de incidentes — Resolução CD/ANPD nº 15/2024:</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Obrigação</th>
                        <th>Prazo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Comunicação à ANPD</td><td>3 dias úteis</td></tr>
                    <tr><td>Comunicação ao titular</td><td>3 dias úteis</td></tr>
                    <tr><td>Complementação das informações à ANPD</td><td>20 dias úteis</td></tr>
                    <tr><td>Guarda do registro do incidente</td><td>Mínimo de 5 anos</td></tr>
                    <tr><td>Divulgação ampla, quando necessária e inviável a comunicação individual</td><td>Mínimo de 3 meses</td></tr>
                    <tr><td>Declaração de comunicação aos titulares, após o término do prazo de comunicação</td><td>Até 3 dias úteis</td></tr>
                </tbody>
            </table>
            <p>Os prazos de comunicação são contados a partir do conhecimento do incidente, conforme as regras específicas do regulamento. Para agentes de tratamento de pequeno porte, há hipóteses de contagem em dobro.</p>
            <p><em>Atenção: A Resolução nº 15/2024 é norma regulamentadora, não um artigo da LGPD.</em></p>

            <!-- 15. FISCALIZAÇÃO E SANÇÕES ADMINISTRATIVAS -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                15. Fiscalização e Sanções Administrativas — Arts. 52 a 54
            </h4>
            <p>O art. 52 apresenta as sanções administrativas aplicáveis pela ANPD:</p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Sanção</th>
                        <th>Conteúdo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>I</strong></td><td>Advertência, com indicação de prazo para adoção de medidas corretivas.</td></tr>
                    <tr><td><strong>II</strong></td><td>Multa simples de até 2% do faturamento da pessoa jurídica de direito privado no Brasil, excluídos os tributos, limitada a R$ 50 milhões por infração.</td></tr>
                    <tr><td><strong>III</strong></td><td>Multa diária, observado o limite total do inciso II.</td></tr>
                    <tr><td><strong>IV</strong></td><td>Publicização da infração após devidamente apurada e confirmada sua ocorrência.</td></tr>
                    <tr><td><strong>V</strong></td><td>Bloqueio dos dados pessoais relacionados à infração até sua regularização.</td></tr>
                    <tr><td><strong>VI</strong></td><td>Eliminação dos dados pessoais relacionados à infração.</td></tr>
                    <tr><td><strong>X</strong></td><td>Suspensão parcial do funcionamento do banco de dados relacionado à infração.</td></tr>
                    <tr><td><strong>XI</strong></td><td>Suspensão do exercício da atividade de tratamento dos dados pessoais relacionados à infração por até 6 meses, prorrogável por igual período.</td></tr>
                    <tr><td><strong>XII</strong></td><td>Proibição parcial ou total do exercício de atividades relacionadas a tratamento de dados.</td></tr>
                </tbody>
            </table>
            <p><em>Os incisos VII, VIII e IX foram vetados.</em></p>

            <p><strong>Atenção especial às sanções:</strong></p>
            <ul>
                <li>A multa simples tem limite de 2% do faturamento.</li>
                <li>O limite máximo é de R$ 50 milhões por infração.</li>
                <li>A multa diária também observa o limite legal.</li>
                <li>As sanções podem ser aplicadas de forma gradativa, isolada ou cumulativa, conforme o caso.</li>
                <li>É necessário processo administrativo com ampla defesa.</li>
                <li>As sanções dos incisos X, XI e XII somente podem ser aplicadas após já ter sido imposta ao menos uma das sanções indicadas no art. 52, § 6º.</li>
            </ul>

            <p><strong>Poder Público:</strong> O art. 52, § 3º, permite aplicar às entidades e aos órgãos públicos as sanções dos incisos I, IV, V, VI, X, XI e XII.</p>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha:</strong> A multa de até R$ 50 milhões não é aplicada indistintamente a qualquer pessoa física ou órgão público. A regra do inciso II refere-se ao faturamento da pessoa jurídica de direito privado.
            </div>

            <!-- 16. ANPD -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                16. ANPD — Agência Nacional de Proteção de Dados
            </h4>
            <p><strong>Atualização legislativa:</strong> A Lei nº 15.352/2026 transformou a ANPD em Agência Nacional de Proteção de Dados, com natureza de agência reguladora. A Agência é vinculada ao Ministério da Justiça e Segurança Pública e possui autonomia funcional, técnica, decisória, administrativa e financeira, com patrimônio próprio.</p>

            <p><strong>Competências — art. 55-J:</strong> Entre as principais competências da ANPD estão:</p>
            <ol>
                <li>Zelar pela proteção dos dados pessoais.</li>
                <li>Elaborar diretrizes para a Política Nacional de Proteção de Dados Pessoais e da Privacidade.</li>
                <li>Fiscalizar o cumprimento da LGPD.</li>
                <li>Aplicar sanções administrativas.</li>
                <li>Apreciar petições dos titulares contra controladores, observadas as condições legais.</li>
                <li>Promover o conhecimento da população sobre proteção de dados.</li>
                <li>Realizar estudos e pesquisas.</li>
                <li>Estimular padrões que facilitem o controle dos titulares.</li>
                <li>Cooperar com autoridades de outros países.</li>
                <li>Editar regulamentos e procedimentos.</li>
                <li>Realizar auditorias ou determinar sua realização.</li>
                <li>Solicitar informações aos agentes de tratamento.</li>
                <li>Requisitar relatórios de impacto, conforme as hipóteses legais.</li>
            </ol>

            <p><strong>Estrutura e órgãos:</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Estrutura</th>
                        <th>Função</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>Conselho Diretor</strong></td><td>Órgão máximo de direção da ANPD.</td></tr>
                    <tr><td><strong>Conselho Nacional (CNPD)</strong></td><td>Órgão consultivo.</td></tr>
                    <tr><td><strong>Corregedoria</strong></td><td>Atividades de correição.</td></tr>
                    <tr><td><strong>Ouvidoria</strong></td><td>Recebimento de manifestações.</td></tr>
                    <tr><td><strong>Procuradoria</strong></td><td>Atuação jurídica.</td></tr>
                    <tr><td><strong>Auditoria</strong></td><td>Atividades de auditoria.</td></tr>
                    <tr><td><strong>Unidades especializadas</strong></td><td>Execução das atividades institucionais.</td></tr>
                </tbody>
            </table>

            <p><strong>Conselho Diretor × CNPD:</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Conselho Diretor</th>
                        <th>CNPD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Direção da Agência.</td><td>Órgão consultivo.</td></tr>
                    <tr><td>Atua na condução institucional da ANPD.</td><td>Propõe diretrizes e fornece subsídios.</td></tr>
                    <tr><td>Não se confunde com o Conselho Nacional.</td><td>Não substitui a competência fiscalizatória da ANPD.</td></tr>
                </tbody>
            </table>

            <p><strong>Composição do CNPD — art. 58-A (23 titulares e 23 suplentes):</strong></p>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Representação</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Poder Executivo Federal</td><td>5</td></tr>
                    <tr><td>Senado Federal</td><td>1</td></tr>
                    <tr><td>Câmara dos Deputados</td><td>1</td></tr>
                    <tr><td>Conselho Nacional de Justiça</td><td>1</td></tr>
                    <tr><td>Conselho Nacional do Ministério Público</td><td>1</td></tr>
                    <tr><td>Comitê Gestor da Internet no Brasil</td><td>1</td></tr>
                    <tr><td>Sociedade civil</td><td>3</td></tr>
                    <tr><td>Instituições científicas, tecnológicas e de inovação</td><td>3</td></tr>
                    <tr><td>Confederações sindicais do setor produtivo</td><td>3</td></tr>
                    <tr><td>Setor empresarial relacionado ao tratamento de dados</td><td>2</td></tr>
                    <tr><td>Setor laboral</td><td>2</td></tr>
                    <tr style="font-weight: bold; background-color: #f1f5f9;"><td>Total</td><td>23</td></tr>
                </tbody>
            </table>
            <p>O § 3º estabelece que os representantes dos incisos VII a XI terão mandato de 2 anos, poderão ser reconduzidos uma vez e não poderão ser membros do CGI.br. A participação é considerada serviço público relevante e não é remunerada.</p>

            <p><strong>Competências do CNPD — art. 58-B:</strong> Propor diretrizes estratégicas, fornecer subsídios para a Política Nacional, elaborar relatórios anuais de avaliação, sugerir ações à ANPD, elaborar estudos, realizar debates e audiências públicas e disseminar conhecimento.</p>
            <div class="alert-box" style="margin-bottom: 12px;">
                <strong>Pegadinha clássica:</strong> O CNPD é <strong>consultivo</strong>. Quem fiscaliza e aplica as sanções previstas na LGPD é a <strong>ANPD</strong>.
            </div>

            <!-- 17. QUADRO DE ARTIGOS -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                17. Quadro de Artigos para Memorização
            </h4>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Artigo</th>
                        <th>Assunto</th>
                        <th>Prioridade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>1º</strong></td><td>Objetivo e alcance</td><td>Alta</td></tr>
                    <tr><td><strong>2º</strong></td><td>Fundamentos</td><td>Alta</td></tr>
                    <tr><td><strong>3º</strong></td><td>Territorialidade</td><td>Alta</td></tr>
                    <tr><td><strong>4º</strong></td><td>Exceções</td><td>Alta</td></tr>
                    <tr><td><strong>5º</strong></td><td>Conceitos</td><td>Muito alta</td></tr>
                    <tr><td><strong>6º</strong></td><td>Dez princípios</td><td>Muito alta</td></tr>
                    <tr><td><strong>7º</strong></td><td>Bases legais</td><td>Muito alta</td></tr>
                    <tr><td><strong>8º</strong></td><td>Consentimento</td><td>Alta</td></tr>
                    <tr><td><strong>11</strong></td><td>Dados sensíveis</td><td>Muito alta</td></tr>
                    <tr><td><strong>14</strong></td><td>Crianças e adolescentes</td><td>Alta</td></tr>
                    <tr><td><strong>18</strong></td><td>Direitos dos titulares</td><td>Muito alta</td></tr>
                    <tr><td><strong>19</strong></td><td>Prazos de atendimento</td><td>Alta</td></tr>
                    <tr><td><strong>23 a 30</strong></td><td>Poder Público</td><td>Alta</td></tr>
                    <tr><td><strong>33 a 36</strong></td><td>Transferência internacional</td><td>Média</td></tr>
                    <tr><td><strong>37 e 38</strong></td><td>Registro e relatório de impacto</td><td>Alta</td></tr>
                    <tr><td><strong>42 a 45</strong></td><td>Responsabilidade e danos</td><td>Alta</td></tr>
                    <tr><td><strong>46 a 51</strong></td><td>Segurança e boas práticas</td><td>Alta</td></tr>
                    <tr><td><strong>52 a 54</strong></td><td>Sanções administrativas</td><td>Muito alta</td></tr>
                    <tr><td><strong>55-A a 55-M</strong></td><td>ANPD</td><td>Muito alta</td></tr>
                    <tr><td><strong>58-A e 58-B</strong></td><td>CNPD</td><td>Alta</td></tr>
                </tbody>
            </table>

            <!-- 18. NÚMEROS E PRAZOS -->
            <h4 style="margin-top: 25px; color: var(--primary); border-bottom: 2px solid #cbd5e1; padding-bottom: 6px;">
                18. Números e Prazos que Você Precisa Decorar
            </h4>
            <table>
                <thead>
                    <tr style="background-color: #e2e8f0;">
                        <th>Número / Prazo</th>
                        <th>O que Representa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>7</strong></td><td>Fundamentos do art. 2º</td></tr>
                    <tr><td><strong>10</strong></td><td>Princípios do art. 6º</td></tr>
                    <tr><td><strong>10</strong></td><td>Bases legais do art. 7º</td></tr>
                    <tr><td><strong>15 dias</strong></td><td>Declaração completa de acesso ou confirmação, art. 19</td></tr>
                    <tr><td><strong>3 dias úteis</strong></td><td>Comunicação de incidente à ANPD e ao titular</td></tr>
                    <tr><td><strong>20 dias úteis</strong></td><td>Complementação de informações sobre incidente</td></tr>
                    <tr><td><strong>5 anos</strong></td><td>Guarda mínima do registro de incidente</td></tr>
                    <tr><td><strong>3 meses</strong></td><td>Divulgação ampla do incidente, quando aplicável</td></tr>
                    <tr><td><strong>2%</strong></td><td>Limite percentual da multa simples</td></tr>
                    <tr><td><strong>R$ 50 milhões</strong></td><td>Limite da multa por infração</td></tr>
                    <tr><td><strong>6 meses</strong></td><td>Prazo máximo inicial de suspensão da atividade de tratamento, prorrogável por igual período</td></tr>
                    <tr><td><strong>23</strong></td><td>Representantes titulares do CNPD</td></tr>
                    <tr><td><strong>2 anos</strong></td><td>Mandato dos representantes dos incisos VII a XI do art. 58-A</td></tr>
                    <tr><td><strong>1</strong></td><td>Recondução permitida para esses representantes</td></tr>
                </tbody>
            </table>

            <!-- 19. PEGADINHAS VUNESP -->
            <h4 style="margin-top: 25px; color: #b91c1c; border-bottom: 2px solid #f87171; padding-bottom: 6px;">
                19. Pegadinhas que a VUNESP Pode Explorar
            </h4>
            <ol style="line-height: 1.6;">
                <li><strong>LGPD não protege apenas dados digitais:</strong> também alcança dados em papel.</li>
                <li><strong>LGPD não se aplica apenas a empresas privadas:</strong> alcança pessoas naturais e pessoas jurídicas de direito público ou privado.</li>
                <li><strong>Controlador não é operador:</strong> o primeiro decide; o segundo realiza o tratamento em seu nome.</li>
                <li><strong>Encarregado não é autoridade fiscalizadora:</strong> funciona como canal de comunicação.</li>
                <li><strong>Consentimento não é a única base legal:</strong> existem dez hipóteses no art. 7º.</li>
                <li><strong>Dados de saúde são sensíveis:</strong> mesmo que não revelem diretamente uma doença.</li>
                <li><strong>Legítimo interesse não é base autônoma do art. 11:</strong> não confundir dados comuns com sensíveis.</li>
                <li><strong>A ANPD não é o CNPD:</strong> a primeira fiscaliza e aplica sanções; o segundo é consultivo.</li>
                <li><strong>Multa não é a única sanção:</strong> existem advertência, publicização, bloqueio, eliminação, suspensão e proibição.</li>
                <li><strong>Incidente de segurança não significa necessariamente comunicação obrigatória:</strong> é necessário avaliar o risco ou dano relevante nos termos da regulamentação.</li>
            </ol>

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