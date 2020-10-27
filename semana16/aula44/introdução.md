### Exercício 1
a).
    CREATE TABLE: Cria a tabela;
    PRIMARY KEY: Define o dado que diferenciara cada item;
    VARCHAR: Declara que aquela o valor recebido deve ser uma string;
    NOT NULL: Declara que o valor não pode ser null;
    FLOAT: Declara que o valor recebido deve ser um número não inteiro em uma tabela
    DATE: Declara que o valor recebido deve ser uma data;
    
b).
    O comando show é o comando que mostra informações do banco;
    
    -SHOW DATABASES;:Mostra os bancos de dados que são encontrados;
    -SHOW TABLES;: Mostra as tabelas encontradas;

c).
    DESCRIBE Actor: Aparece a descrição dos campos da tabela;


### Exercício 2
a).
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23",
        "female"
    );

b).
    INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "002", 
        "Glória Maria",
        1222222,
        "1967-01-20",
        "female"
    );

    ERRO: 16:53:40	INSERT INTO Actor (id, name, salary, birth_date, gender)         VALUES(         "002",          "Glória Maria",         1222222,         "1967-01-20",         "female"     )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0,047 sec

        EXPLICAÇÃO: O erro acontece quando ele encontra o mesmo numero de id de outro item ja cadastrado sendo o id declarado como PRIMARY key ele reconhece o erro.


c).
    INSERT INTO Actor (id, name, salary)
    VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
    );

    ERRO: 16:58:20	INSERT INTO Actor (id, name, salary) VALUES(   "003",    "Fernanda Montenegro",   300000,   "1929-10-19",    "female" )	Error Code: 1136. Column count doesn't match value count at row 1	0,045 sec

        EXPLICAÇÃO: É NECESSÁRIO QUE TODOS OS CAMPOS ESTEJAM PRESENTES E ESTEJAM EM ORDEM CORRETA COMO NESSA QUERY FALTAM ALGUNS CAMPOS ESSE ERRO APARECE;

        CORREÇÃO: 
             INSERT INTO Actor (id, name, salary, birth_date, gender)
                VALUES(
                "003", 
                "Fernanda Montenegro",
                300000,
                "1929-10-19",
                "female"
            );

d).
    INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
    "004",
    400000,
    "1949-04-18", 
    "male"
    );

    ERRO: 17:04:50	INSERT INTO Actor (id, salary, birth_date, gender) VALUES(   "004",   400000,   "1949-04-18",    "male" )	Error Code: 1364. Field 'name' doesn't have a default value	0,047 sec


        EXPLICAÇÃO: FALTA O CAMPO NAME NA ORDEM E NOS VALORES;

        CORREÇÃO: 
            INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
            "004",
            "Jack",
            400000,
            "1949-04-18", 
            "male"
            );

             

e).
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    1979-03-26, 
    "female"
    );

    ERRO: 17:13:52	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",    "Juliana Paes",   719333.33,   1979-03-26,    "female" )	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0,045 sec


        EXPLICAÇÃO: FALTAM AS "" NA DATA POR ISSO O ERRO APARECE;

        CORREÇÃO: 
            INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
            "005", 
            "Juliana Paes",
            719333.33,
            "1979-03-26", 
            "female"
            );

f).
        INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
            "006", 
            "Charles Bradley",
            719333.33,
            "1948-03-26", 
            "male"
            );
        
        INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
            "007", 
            "Sandy",
            719333.33,
            "1983-01-28", 
            "female"
            );


### Exercício 3
a).
    SELECT id, name from Actor WHERE gender = "female";

b).
    SELECT salary, name from Actor WHERE name = "Tony Ramos";

c).
    SELECT id , name, salary, birth_date,gender from Actor WHERE gender = "invalid";
        Explicação: Não sei explicar o resultado.

d).
    SELECT id , name, salary from Actor WHERE salary <= 500000;

e).
    SELECT id, nome from Actor WHERE id = "002";

    ERRO: 17:40:09	SELECT id, nome from Actor WHERE id = "002" LIMIT 0, 1000	Error Code: 1054. Unknown column 'nome' in 'field list'	0,051 sec

        EXPLICAÇÃO: FALTA APENAS ESCREVER O NOME EM INGLES COMO ESTA NA ORDEM;

        CORREÇÃO: SELECT id, name from Actor WHERE id = "002";
            



### Exercício 4
a).
    SELECT * from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
        EXPLICAÇÃO: 'SELECT * from Actor' indica que ela selecionará da tabela Actor, 'WHERE' inicia uma condicional para a seleção, os '()' seleciona que antes de tudo ela solucionará oque está dentro do parenteses, 'name LIKE "A%"' compara as strings para saber se contem a string dentro de parenteses nesse caso se inicia com isso, 'OR' é ou que coloca uma segunda possibilidade para o item ser selecionado 'name LIKE "J%"' semelhante ao anterior porém compara se inicia com J, 'AND' condiciona a ser selecionado se a primeira for verdade e oque está após esse termo tambem e por último 'salary > 300000' põe a condicional de ser selecionado se o salario for maior que 300.000

b).
    SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;

c).
    SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%")

d).
    SELECT * from Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;



### Exercício 5
a).


b)

c)

d)

e)



### Exercício 6
a).
    select id, name, avaliacao from Filmes where id = "004";

b).
    select * from Filmes where name = "Golpe Duplo";

c).
    select id, name, sinopse from Filmes where avaliacao > "7";
        JUSTIFICATIVA: ERREI QUANDO FUI CRIAR A TABELA E COLOQUEI A AVALIAÇÃO COM STRING.



### Exercício 7
a).
    select * from Filmes where name LIKE "%vida%";

b).
    select * from Filmes where name LIKE "%Nicky%" OR sinopse LIKE "%Nicky%";

c).
    select * from Filmes;

d).
    select * from Filmes where (name LIKE "%Nicky%" OR sinopse LIKE "%Nicky%") AND avaliacao > "7";

