# Inserções — FinSight

```sql
-- =========================================================
-- DADOS DE EXEMPLO
-- =========================================================

-- Clientes
INSERT INTO cliente (username, email, password)
VALUES
    ('Diogo', 'diogo@email.com', 'hash_senha_01'),
    ('Maria', 'maria@email.com', 'hash_senha_02');

-- Contas
INSERT INTO conta (id_cliente, nome_banco)
VALUES
    (1, 'Nubank'),
    (1, 'Banco do Brasil'),
    (2, 'Caixa Econômica');

-- Tipos de conta / metas
INSERT INTO tipo (nome, saldo_objetivo, saldo_atual, data_limite, id_conta)
VALUES
    ('Conta Corrente', 5000.00,  2300.00, '2026-12-31', 1),
    ('Conta Poupança', 10000.00, 4500.00, '2027-06-30', 2),
    ('Conta Salário',  3000.00,  1200.00, '2026-10-15', 3);

-- Categorias
INSERT INTO categoria (nome_categoria)
VALUES
    ('Alimentação'),
    ('Transporte'),
    ('Salário'),
    ('Lazer'),
    ('Investimentos');

-- Transações
INSERT INTO transacao (
    valor,
    data_transacao,
    descricao,
    titulo,
    id_categoria,
    quantidade_parcelas,
    id_tipo,
    DebitoCredito,
    efetividade,
    data_efetividade
)
VALUES
    -- Salário mensal (crédito, efetivado)
    (3500.00, '2026-05-01', 'Salário mensal',   'Pagamento Empresa', 3, 1, 3, TRUE,  TRUE,  '2026-05-01'),

    -- Supermercado (débito, efetivado)
    (120.50,  '2026-05-05', 'Compra mercado',   'Supermercado',      1, 1, 1, FALSE, TRUE,  '2026-05-05'),

    -- Cinema e lanche (débito, pendente)
    (89.90,   '2026-05-10', 'Cinema e lanche',  'Lazer Shopping',    4, 1, 1, FALSE, FALSE, NULL),

    -- Investimento mensal (débito, efetivado)
    (450.00,  '2026-05-15', 'Aplicação mensal', 'Investimento',      5, 1, 2, FALSE, TRUE,  '2026-05-15'),

    -- Freelance (crédito, efetivado)
    (200.00,  '2026-05-20', 'Freelance',        'Projeto Web',       3, 1, 1, TRUE,  TRUE,  '2026-05-20');
```