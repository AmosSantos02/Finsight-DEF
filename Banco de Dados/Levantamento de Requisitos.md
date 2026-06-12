## 📋 Levantamento de Requisitos — Finsight

### RF01 — Cadastro de usuário
Usuário precisa cadastrar uma conta para gerenciar informações sobre seus gastos.

---

### RF02 — Cadastro de transações

Usuário deve poder cadastrar entradas e saídas com as opções:

- Valor
- Número de parcelas *(carnês / parcelamentos)*
- Data do débito / crédito
- Descrição
- Categoria
- Conta a ser debitada / creditada
- Conta fixa?
  - Se sim → informar data fixa de cobrança
  - Exibir lembrete na tela inicial quando a data chegar

---

### RF03 — Flag de efetivação

- Cada transação possui uma flag de efetivação
- Enquanto não efetivada, a transação **não é contabilizada** no saldo

---

### RF04 — Alerta de gastos excessivos

- Emitir alerta quando `total saídas > total entradas` no mês

---

### RF05 — Relatório de entradas e saídas

Exportação com filtros por:

- Período
- Categoria
- Tipo (`ENTRADA` ou `SAÍDA`)
- Conta