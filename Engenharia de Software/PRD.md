# PRD - Finsight

## Descrição do Produto

O Finsight é uma aplicação web de gestão financeira pessoal. A ideia surgiu da dificuldade que muitas pessoas têm de acompanhar seus gastos e receitas de forma simples, sem precisar usar planilhas complicadas ou aplicativos pagos. O objetivo é oferecer uma ferramenta gratuita, visual e fácil de usar para qualquer pessoa que queira organizar melhor suas finanças.

---

## Problema

A maioria das pessoas não sabe exatamente quanto gasta por mês ou onde o dinheiro vai. As opções disponíveis no mercado são pagas, muito complexas ou não funcionam bem no celular. Muita gente ainda usa papel ou planilha de Excel, o que é difícil de manter atualizado.

O Finsight resolve isso oferecendo uma interface simples e acessível pelo navegador, sem precisar instalar nada.

---

## Público-alvo

O sistema foi pensado principalmente para estudantes e jovens adultos que estão começando a se organizar financeiramente. Também pode ser usado por qualquer pessoa que queira controlar seus gastos do dia a dia sem precisar de conhecimento avançado em finanças.

---

## Objetivos do Produto

- Permitir que o usuário registre suas receitas e despesas de forma rápida
- Dar uma visão geral das finanças pelo dashboard
- Ajudar a criar metas de economia e acompanhar o progresso
- Mostrar relatórios simples para o usuário entender seus hábitos financeiros
- Funcionar bem tanto no celular quanto no computador

---

## Funcionalidades Principais

### Autenticação

O usuário pode criar uma conta com e-mail e senha, fazer login normalmente ou usar conta do Google e GitHub. Também existe recuperação de senha por e-mail e uma trava de PIN para proteger o acesso no dispositivo.

### Dashboard

A tela principal mostra um resumo do mês atual com o saldo, o total de receitas e o total de despesas. Tem também gráficos que mostram os gastos por categoria e a evolução do saldo nos últimos seis meses. As transações mais recentes aparecem logo abaixo.

### Transações

O usuário pode lançar receitas, despesas, transferências entre contas e despesas parceladas. Cada transação tem título, valor, data, categoria e conta vinculada. É possível marcar como paga ou pendente e filtrar por tipo. Também tem uma opção de exportar tudo para CSV.

### Carteiras

O sistema permite ter mais de uma conta, por exemplo uma conta bancária e um dinheiro em espécie. Cada carteira tem seu próprio saldo, e o total geral aparece no topo.

### Metas

O usuário pode criar metas de economia com um valor alvo, data limite e uma conta vinculada. É possível fazer aportes para acompanhar o progresso até atingir a meta.

### Categorias

As categorias são personalizadas pelo próprio usuário. Cada uma tem um nome, um ícone e uma cor escolhida pelo usuário, e pode ser do tipo receita ou despesa.

### Relatórios

A tela de relatórios mostra os dados agrupados por mês, trimestre, ano ou um período personalizado. Tem gráficos de barra e um detalhamento por categoria para ajudar a entender melhor os gastos.

### Perfil

O usuário pode editar o nome, alterar a senha, ativar ou desativar o PIN de segurança e excluir a conta se quiser.

---

## Requisitos Funcionais

RF01 - O sistema deve permitir cadastro, login e logout de usuários

RF02 - O sistema deve permitir login com conta do Google e GitHub

RF03 - O sistema deve permitir recuperação de senha por e-mail

RF04 - O sistema deve permitir criar, editar e excluir transações

RF05 - O sistema deve calcular e exibir o saldo de cada carteira automaticamente

RF06 - O sistema deve permitir criar e acompanhar metas de economia

RF07 - O sistema deve permitir criar categorias personalizadas com ícone e cor

RF08 - O sistema deve exibir gráficos com resumo financeiro no dashboard

RF09 - O sistema deve gerar relatórios por período com filtros

RF10 - O sistema deve permitir exportar transações em formato CSV

RF11 - O sistema deve suportar transações parceladas de 2 a 12 vezes

RF12 - O sistema deve permitir marcar transações como pagas ou pendentes

RF13 - O sistema deve ter um PIN de segurança opcional para proteger o acesso

---

## Requisitos Não Funcionais

RNF01 - O sistema deve funcionar nos navegadores modernos sem precisar instalar nada

RNF02 - A interface deve se adaptar para telas de celular e computador

RNF03 - O tempo de carregamento das páginas deve ser aceitável em conexões normais

RNF04 - Os dados do usuário devem ser protegidos por autenticação e RLS no banco de dados

RNF05 - O sistema deve suportar modo claro e escuro

RNF06 - O código deve ser organizado e legível para facilitar manutenção futura

---

## Tecnologias Utilizadas

O front-end foi desenvolvido com HTML, CSS e JavaScript puro, sem frameworks. O banco de dados utilizado é o PostgreSQL hospedado no Supabase, que também gerencia a autenticação dos usuários. A comunicação entre o front-end e o banco é feita pelo SDK do Supabase via CDN.

A decisão de não usar framework foi para manter o projeto mais simples e demonstrar o domínio dos fundamentos do desenvolvimento web.

---

## Restrições

- O sistema não tem back-end próprio, toda a lógica de negócio fica no front-end e nas políticas do banco de dados
- A moeda utilizada é o Real (BRL) e não tem suporte a múltiplas moedas
- Não tem modo offline, é necessário conexão com a internet para usar
- Não faz integração direta com bancos ou instituições financeiras, os lançamentos são manuais

---

## Critérios de Sucesso

O projeto será considerado bem-sucedido se o usuário conseguir criar uma conta, lançar suas receitas e despesas, visualizar o saldo atualizado, acompanhar metas e gerar um relatório, tudo isso sem erros e de forma intuitiva, tanto no celular quanto no computador.
