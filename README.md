# FinSight

Plataforma web de gestão financeira pessoal desenvolvida com HTML, CSS e JavaScript puro, com banco de dados hospedado no Supabase.

**Deploy:** [finsight-def.vercel.app](https://finsight-def.vercel.app)

---

## Sobre o projeto

O FinSight surgiu da dificuldade que muitas pessoas enfrentam para acompanhar seus gastos e receitas de forma prática, sem depender de planilhas complexas ou ferramentas pagas. A proposta é oferecer uma solução gratuita, visual e acessível pelo navegador, voltada principalmente para estudantes e jovens adultos que estão começando a organizar suas finanças.

A aplicação permite registrar receitas e despesas, gerenciar múltiplas carteiras, definir metas de economia e visualizar relatórios do fluxo de caixa, tudo isso com uma interface responsiva que funciona tanto em dispositivos móveis quanto em desktops.

A decisão de não utilizar frameworks front-end foi intencional: o projeto foi construído sobre os fundamentos do desenvolvimento web para demonstrar domínio de HTML, CSS e JavaScript sem abstrações adicionais. Toda a lógica de negócio reside no front-end e nas políticas de segurança em nível de linha (RLS) do banco de dados, sem necessidade de um back-end próprio.

---

## Funcionalidades

### Autenticacao

Cadastro com e-mail e senha, login social via Google e GitHub, recuperacao de senha por e-mail e PIN de seguranca opcional para proteger o acesso no dispositivo.

### Dashboard

Resumo mensal com saldo total, receitas e despesas. Graficos de gastos por categoria e evolucao do saldo nos ultimos seis meses, alem de listagem das transacoes mais recentes.

### Transacoes

Registro de receitas, despesas, transferencias entre contas e despesas parceladas (de 2 a 12 vezes). Cada lancamento possui titulo, valor, data, categoria, conta vinculada e status de efetividade (pago ou pendente). Exportacao das transacoes em formato CSV disponivel.

### Carteiras

Suporte a multiplas contas, como conta bancaria e dinheiro em especie. Cada carteira exibe seu saldo individual e o total consolidado e apresentado no topo da aplicacao.

### Metas

Criacao de metas de economia com valor-alvo, data limite e conta vinculada. O usuario pode registrar aportes e acompanhar o progresso ate o cumprimento da meta.

### Categorias

Categorias personalizadas com nome, icone e cor definidos pelo usuario, classificadas como receita ou despesa.

### Relatorios

Visualizacao de dados agrupados por mes, trimestre, ano ou periodo personalizado, com graficos de barra e detalhamento por categoria.

### Perfil

Edicao de nome, alteracao de senha, configuracao do PIN de seguranca e exclusao de conta.

---

## Estrutura do projeto

```
Finsight-DEF/
├── index.html                      # Ponto de entrada (redireciona para login)
├── supabase_schema.sql             # Schema do banco de dados
├── package.json
├── pages/
│   ├── login.html
│   ├── register.html
│   ├── forgot-password.html
│   ├── dashboard.html
│   ├── transactions.html
│   ├── wallets.html
│   ├── categories.html
│   ├── goals.html
│   ├── reports.html
│   └── profile.html
├── css/                            # Estilos da aplicacao
├── js/                             # Logica e integracoes
├── Banco de Dados/                 # Documentacao do banco de dados
├── Engenharia de Software/         # PRD e diagramas
├── Linguagem de programacao/       # Documentacao tecnica
└── wiki/                           # Wiki do projeto
```

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Front-end | HTML, CSS, JavaScript |
| Banco de dados / BaaS | Supabase (PostgreSQL) |
| Geracao de PDF | PDFKit |
| Deploy | Vercel |

---

## Banco de dados

O projeto utiliza PostgreSQL via Supabase com o seguinte modelo relacional:

```
cliente ──< conta ──< tipo ──< transacao
                               └── categoria
```

- **cliente** — dados de autenticacao e perfil do usuario
- **conta** — contas bancarias vinculadas a um cliente
- **tipo** — subcategorias de conta com saldo objetivo, saldo atual e data limite (utilizado para metas)
- **categoria** — classificacao das transacoes
- **transacao** — lancamentos financeiros com suporte a debito/credito, parcelamento, efetividade e data de efetivacao

---

## Limitacoes conhecidas

- Moeda unica: Real (BRL), sem suporte a multiplas moedas
- Sem modo offline: requer conexao com a internet
- Sem integracao com bancos ou instituicoes financeiras; todos os lancamentos sao manuais
- Sem back-end proprio: a logica de negocio e gerenciada pelo front-end e pelas politicas RLS do Supabase

---

## Contribuidores

| Nome | GitHub |
|---|---|
| Amos Gabriel | [@AmosSantos02](https://github.com/AmosSantos02) |
| Gustavo Ribas Silestrino | [@Gustavo-Ribas-Silestrino](https://github.com/Gustavo-Ribas-Silestrino) |
