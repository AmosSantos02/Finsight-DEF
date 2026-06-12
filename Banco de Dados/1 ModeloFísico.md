# Modelo Físico — FinSight

```sql
-- =========================================================
-- BANCO DE DADOS — FINSIGHT
-- Sistema de Controle Financeiro
-- =========================================================

CREATE DATABASE IF NOT EXISTS Finsight;
USE Finsight;

CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    username   VARCHAR(50)  NOT NULL,
    email      VARCHAR(100) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL
);

CREATE TABLE conta (
    id_conta   INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT          NOT NULL,
    nome_banco VARCHAR(100) NOT NULL,

    CONSTRAINT fk_conta_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES cliente(id_cliente)
);

-- =========================================================
-- TABELA TIPO
-- Representa:
--   Conta Corrente
--   Conta Poupança
--   Conta Salário
--   e metas financeiras
-- =========================================================

CREATE TABLE tipo (
    id_tipo        INT PRIMARY KEY AUTO_INCREMENT,
    nome           VARCHAR(50)    NOT NULL,
    saldo_objetivo DECIMAL(10,2),
    saldo_atual    DECIMAL(10,2),
    data_limite    DATE,
    id_conta       INT            NOT NULL,

    CONSTRAINT fk_tipo_conta
        FOREIGN KEY (id_conta)
        REFERENCES conta(id_conta)
);

CREATE TABLE categoria (
    id_categoria   INT PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(50) NOT NULL
);

-- =========================================================
-- TABELA TRANSACAO
-- DebitoCredito:
--   TRUE  = CRÉDITO
--   FALSE = DÉBITO
-- efetividade:
--   TRUE  = efetivada
--   FALSE = pendente
-- =========================================================

CREATE TABLE transacao (
    id_transacao       INT PRIMARY KEY AUTO_INCREMENT,
    valor              DECIMAL(10,2) NOT NULL,
    data_transacao     DATE          NOT NULL,
    descricao          VARCHAR(255),
    titulo             VARCHAR(100)  NOT NULL,
    id_categoria       INT           NOT NULL,
    quantidade_parcelas INT,
    id_tipo            INT           NOT NULL,
    DebitoCredito      BOOLEAN       NOT NULL,
    efetividade        BOOLEAN       NOT NULL,
    data_efetividade   DATE,

    CONSTRAINT fk_transacao_categoria
        FOREIGN KEY (id_categoria)
        REFERENCES categoria(id_categoria),

    CONSTRAINT fk_transacao_tipo
        FOREIGN KEY (id_tipo)
        REFERENCES tipo(id_tipo)
);
```