# Estrutura básica para consultas SQL

# SELECT        - Quais informações?
# FROM          - de qual tabela?
# WHERE         - com quais condições?
# ORDER BY      - em qual ordem?

# 1 Consulta: Lista de serviços ativos, organizados por ordem crescente:
SELECT * FROM tbl_servico WHERE tbl_servico.status_servico = 'ATIVO' ORDER BY tbl_servico.nome_servico ASC;


# 2 Consulta: Lista de nome e valor dos serviços, organizados por ordem crescente do menor para o maior todos <= 80.00:
SELECT tbl_servico.nome_servico, tbl_servico.valor_servico FROM `tbl_servico` WHERE tbl_servico.valor_servico <= 80.00 ORDER BY tbl_servico.valor_servico ASC;

Operadores      |   Significado
    =           |      igual
    <>          |    Diferente   
    >           |      Maior
    <           |      Menor
    >=          |  Maior ou igual
    <=          |  Menor ou igual

# Pesquisa com o operador  - AND 
## - AND (verificar mais de uma condição)
## - LIKE (LIKE '%ge%') Localiza palavra no texto 
SELECT * FROM tbl_servico WHERE tbl_servico.status_servico = 'ATIVO' AND tbl_servico.nome_servico LIKE '%ge ' ORDER BY tbl_servico.nome_servico ASC;

## OR quando o retorno da busca conter condições diferentes
SELECT * FROM `tbl_funcionario` WHERE tbl_funcionario.tipo_funcionario = 'Administrador' OR tbl_funcionario.tipo_funcionario = 'Recepcionista';

LIKE símbolo no final ('Ana%'): Começa com Ana...
LIKE símbolo no inicio ('%Silva'): Termina com Silva...
LIKE símbolo no meio ('%ge%'): Contém ge... 

# Filtro com intervelo BETWEEN
SELECT tbl_servico.nome_servico, tbl_servico.valor_servico FROM `tbl_servico` WHERE tbl_servico.valor_servico BETWEEN 30.00 AND 90.00;

# Ordenar os dados por mais de uma coluna
SELECT * FROM `tbl_servico` WHERE tbl_servico.status_servico = 'ATIVO' ORDER BY duracao_servico DESC, valor_servico ASC;

# Limitar os resultador LIMIT
SELECT * FROM `tbl_servico` ORDER BY nome_servico ASC LIMIT 5;

# Pesquisa por data ordenado por hora
SELECT * FROM `tbl_agendamento` WHERE tbl_agendamento.data_agendamento = '2026-10-20' ORDER BY tbl_agendamento.horario_agendamento ASC;





SELECT tbl_cliente.*, tbl_fone_cliente.numero_fone_cliente 
FROM tbl_cliente 
INNER JOIN tbl_fone_cliente 
ON tbl_cliente.id_cliente = tbl_fone_cliente.id_cliente;


SELECT c.*, fc.numero_fone_cliente 
FROM tbl_cliente AS c 
INNER JOIN tbl_fone_cliente AS fc 
ON c.id_cliente = fc.id_cliente;


SELECT 
    a.data_agendamento, a.horario_agendamento, a.status_agendamento, a.observacao_agendamento, 
    c.nome_cliente AS CLIENTE, 
    f.nome_funcionario AS FUNCIONARIO, 
    s.nome_servico AS SERVICO
FROM tbl_agendamento AS a

INNER JOIN tbl_cliente AS c
	ON a.id_cliente = c.id_cliente
    
INNER JOIN tbl_funcionario AS f
	ON a.id_funcionario = f.id_funcionario
    
INNER JOIN tbl_servico AS s
	ON a.id_servico = s.id_servico
    
ORDER BY a.data_agendamento, a.horario_agendamento


SELECT c.*, fc.numero_fone_cliente
FROM tbl_cliente AS c

LEFT JOIN tbl_fone_cliente AS fc
	ON fc.id_cliente = c.id_cliente

ORDER BY c.nome_cliente;
