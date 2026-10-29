from app.database import Base, SessionLocal, engine
from app.models import Topic

SYLLABUS_ESPECIFICOS = {
    "Governança e Gestão de TI": [
        "Planejamento Estratégico de TI alinhado ao negócio jurisdicional",
        "Instrumentos de gestão: PETI, PDTI, BSC, KGIs e OKRs",
        "Framework COBIT 2019: princípios, objetivos e maturidade",
        "Gerenciamento de Serviços: ITIL v4 e Sistema de Valor de Serviço",
        "Gerenciamento de Projetos: PMBOK 7ª edição",
        "Metodologias ágeis e híbridas: Scrum, Kanban, XP, Lean e escala",
        "Gestão de Riscos: ISO 31000, ISO/IEC 27005 e NIST SP 800-30",
        "Contratações Públicas de TI: Lei nº 14.133/2021 (ETP, TR e gestão)",
    ],
    "Engenharia e Arquitetura de Sistemas": [
        "Engenharia e levantamento de requisitos de software",
        "Modelagem de processos de negócio e notação BPMN 2.0",
        "Padrões arquiteturais: SOLID, SOA, Clean Architecture e Microsserviços",
        "Interoperabilidade e APIs RESTful",
        "Design Patterns (Padrões de projeto)",
        "Qualidade: CMMI (v 2.0+), MPS.BR e Análise de Pontos de Função",
        "Clean Code e computação em nuvem (SaaS, PaaS, IaaS)",
        "Análise e modelagem orientada a objetos: UML (Casos de Uso, Classes, Sequência, Atividades)",
    ],
    "Banco de Dados e Engenharia de Dados": [
        "Modelos de banco de dados: relacional, distribuído e OO",
        "Modelagem de dados: MER e DER",
        "Normalização de dados: 1FN, 2FN, 3FN e FNBC",
        "Propriedades ACID e controle de concorrência",
        "SQL ANSI: DDL, DML, DCL e TCL",
        "Consultas avançadas: JOINs, subconsultas, agregações, window functions",
        "Big Data, Data Warehouse, modelagem dimensional e pipelines ETL/ELT",
    ],
    "DevOps, DevSecOps e Testes": [
        "Cultura DevOps, DevSecOps e Infraestrutura como Código (IaC)",
        "Gerência de configuração e Git",
        "Pipelines de CI/CD",
        "Gerenciamento de contêineres: Docker e Kubernetes",
        "Testes: planejamento, estratégias, técnicas e TDD",
        "Automação: testes unitários e de integração",
    ],
    "Transformação Digital, IA e Segurança": [
        "Transformação Digital e inovação no Poder Judiciário",
        "Inteligência Artificial e Machine Learning aplicados",
        "LLM, IA Generativa e RPA",
        "Segurança: confidencialidade, integridade, disponibilidade, criptografia",
        "Desenvolvimento seguro e vulnerabilidades OWASP Top 10",
        "Autenticação e Federação: OAuth2, OIDC e SAML",
    ],
    "Normativos do Poder Judiciário": [
        "LGPD (Lei nº 13.709/2018) no Setor Público",
        "Resolução CNJ nº 335/2020: Governança PJe",
        "Resolução CNJ nº 522/2023: Requisitos para Sistemas",
        "Portarias CNJ nº 252/2020 e 253/2020: PDPJ-Br",
        "Portaria CNJ nº 131/2021: Código-Fonte da PDPJ-Br e PJe",
        "Resolução CNJ nº 396/2021 e Portaria CNJ 162/2021: Segurança Cibernética",
    ],
}

SYLLABUS_GERAIS = {
    "Língua Portuguesa e Raciocínio Analítico": [
        "Redação Oficial, Ortografia e acentuação",
        "Emprego do sinal indicativo de crase",
        "Compreensão e interpretação de textos de gêneros variados",
        "Denotação, conotação e relação do texto com contexto histórico",
        "Discurso direto, indireto e indireto livre. Intertextualidade",
        "Figuras de linguagem, Sinonímia e antonímia. Elementos de formação de palavras",
        "Morfossintaxe, Pontuação, Pronomes",
        "Concordância nominal e verbal, Flexão nominal e verbal",
        "Vozes do verbo, Correlação de tempos e modos verbais",
        "Regência nominal e verbal, Coordenação e subordinação. Conectivos",
        "Coesão, coerência e Redação (organização e equivalência de orações)",
        "Raciocínio analítico, argumentação e senso crítico",
        "Tipos de argumentos: falaciosos e apelativos. Comunicação eficiente",
    ],
    "Raciocínio Lógico-Matemático": [
        "Estrutura lógica de relações arbitrárias (pessoas, lugares, objetos)",
        "Compreensão lógica via raciocínio verbal, matemático, espacial e temporal",
        "Processo lógico de condução de hipóteses a conclusões",
        "Proporcionalidade, porcentagem, regra de três, acréscimos e descontos",
    ],
    "Ética no Serviço Público e Integridade": [
        "Ética e integridade: conceito, princípios, valores, moral e democracia",
        "Regime Disciplinar (Lei nº 8.112/1990): deveres, proibições e penalidades",
        "Improbidade e Anticorrupção (Leis nº 8.429/1992 e nº 12.846/2013)",
        "Processo Administrativo (Lei nº 9.784/1999)",
        "Código de Conduta e Comitê Gestor (JF3R)",
        "Assédio, Discriminação e Diretrizes de Integridade (CNJ e JF3R)",
        "LGPD e Lei de Acesso à Informação",
    ],
    "Direitos Humanos e Acessibilidade": [
        "Teoria geral, Declaração Universal dos DH e Agenda 2030 (ONU)",
        "Inclusão e direitos das pessoas com deficiência (Leis nº 13.146, 11.126, CF)",
        "Promoção da acessibilidade e atendimento prioritário",
    ],
    "Informática, Inteligência Artificial e Inovação": [
        "MS-Office 365 (Word, Excel, PowerPoint): formatação, macros, funções e apresentações",
        "MS-Office 365 (OneDrive e SharePoint): nuvem, sincronização e colaboração",
        "Correio Eletrônico e Microsoft Teams (reuniões e chat)",
        "Segurança da Informação: confidencialidade, integridade e disponibilidade",
        "Sistemas de IA, IA generativa, LLM e agentes. Riscos da IA",
        "Diretrizes e Políticas de IA (Resoluções CNJ nºs 395, 615, 674, 647)",
        "Inovação: redes, laboratórios, design thinking e inovação aberta",
    ],
    "Sustentabilidade e Meio Ambiente": [
        "Desenvolvimento sustentável na CF/88 e ODS da ONU",
        "Contratações sustentáveis (Lei nº 14.133/2021) e Política Nacional do Clima",
        "Política de Sustentabilidade do Poder Judiciário e da Justiça Federal",
    ],
}


def seed_db():
    # Recria o banco de dados para adicionar a coluna "area"
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    for category, topics in SYLLABUS_ESPECIFICOS.items():
        for t_title in topics:
            db.add(
                Topic(
                    area="Conhecimentos Específicos", category=category, title=t_title
                )
            )

    for category, topics in SYLLABUS_GERAIS.items():
        for t_title in topics:
            db.add(Topic(area="Conhecimentos Gerais", category=category, title=t_title))

    db.commit()
    db.close()
    print("Banco recriado e dados das duas áreas inseridos com sucesso!")


if __name__ == "__main__":
    seed_db()
