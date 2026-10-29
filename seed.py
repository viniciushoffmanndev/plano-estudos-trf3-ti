from app.database import Base, SessionLocal, engine
from app.models import Topic

# Baseado no edital fornecido:
SYLLABUS = {
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


def seed_db():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    if db.query(Topic).first():
        print("Banco já populado!")
        return

    for category, topics in SYLLABUS.items():
        for t_title in topics:
            db.add(Topic(category=category, title=t_title))

    db.commit()
    db.close()
    print("Dados inseridos com sucesso!")


if __name__ == "__main__":
    seed_db()
