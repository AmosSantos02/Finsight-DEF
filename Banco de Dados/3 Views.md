# Views — FinSight

```sql
-- =========================================================
-- VIEW: vw_saldo_mensal
-- Saldo líquido (créditos - débitos) por mês/ano
-- Considera apenas transações efetivadas
-- =========================================================

CREATE VIEW vw_saldo_mensal AS
SELECT
    MONTH(data_transacao) AS mes,
    YEAR(data_transacao)  AS ano,
    SUM(
        CASE
            WHEN DebitoCredito = TRUE THEN  valor
            ELSE                           -valor
        END
    ) AS saldo
FROM transacao
WHERE efetividade = TRUE
GROUP BY ano, mes;


-- =========================================================
-- VIEW: vw_relatorio_mensal
-- Total de receitas e despesas separados por mês/ano
-- Inclui transações pendentes e efetivadas
-- =========================================================

CREATE VIEW vw_relatorio_mensal AS
SELECT
    MONTH(data_transacao) AS mes,
    YEAR(data_transacao)  AS ano,
    SUM(CASE WHEN DebitoCredito = TRUE  THEN valor ELSE 0 END) AS total_receitas,
    SUM(CASE WHEN DebitoCredito = FALSE THEN valor ELSE 0 END) AS total_despesas
FROM transacao
GROUP BY ano, mes;


-- =========================================================
-- VIEW: vw_transacoes_do_mes
-- Todas as transações do mês corrente
-- =========================================================

CREATE VIEW vw_transacoes_do_mes AS
SELECT *
FROM transacao
WHERE MONTH(data_transacao) = MONTH(CURDATE())
  AND YEAR(data_transacao)  = YEAR(CURDATE());


-- =========================================================
-- VIEW: vw_dashboard_mensal
-- Resumo de volume de transações por mês/ano
-- =========================================================

CREATE VIEW vw_dashboard_mensal AS
SELECT
    MONTH(data_transacao) AS mes,
    YEAR(data_transacao)  AS ano,
    COUNT(*)              AS total_transacoes,
    SUM(valor)            AS total_movimentado
FROM transacao
GROUP BY ano, mes;
```