### Exercício 1
a).
    ALTER TABLE Actor DROP COLUMN salary;

    EXPLICAÇÃO: ALTERA A TABELA Actor TIRANDO A COLUNA salary DA TABELA ALÉM DOS DADOS REMOVE A ESTRUTURA TAMBEM;

b).
    ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

    EXPLICAÇÃO: ALTERA DE A TABELA DE gender PARA sex;

c).
    ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

    EXPLICAÇÃO: ALTERA O TAMANHO DA STRING;

d).
    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


### Exercício 2
a).
    UPDATE Actor
    SET name = "Antonio Fagundes", 
    WHERE id = "003"


b).
    UPDATE Actor
    SET name="JULIANA PÃES"
    WHERE id = "005";

    UPDATE Actor
    SET name="Juliana Paes"
    WHERE id = "005";


c).
    UPDATE Actor
    SET name = "Juliana Paes",
    salary = 800000,
    birth_date = "1979-03-26",
    gender = "female"
    WHERE id = "005";


d).
    UPDATE Actor
    SET name = "kkkkkk"
    WHERE id = "098709805";

    RESULTADO:	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0,051 sec

    JUSTIFICATIVA: O COMANDO ESTÁ CORRRETO, MAS ELE NÃO INFLUENCIOU EM NEM UMA MUDANÇA NÃO DEU ERRO PORQUE O COMANDO FOI RECONHECIDO, MAS NÃO HAVIA CORDENADAS VALIDAS DO LOCAL DE MUDANÇA POR ISSO NÃO MUDOU NADA;



### Exercício 3
a).
    DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b).
    DELETE FROM Actor WHERE (gender = "male" AND salary > 100000000);


### Exercício 4
a).
    SELECT MAX(salary) FROM Actor;

b).
    SELECT MAX(salary) FROM Actor WHERE gender = "female";

c).
    SELECT COUNT(*) FROM Actor WHERE gender = "female";

d).
    SELECT SUM(salary) FROM Actor;

### Exercício 5
a).
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender;

    EXPLICAÇÃO: O RESULTADO DESSA QUERY É QUE ELA PEDE PRA QUE APAREÇAM OS ATORES DE ACORDO COM OS TIPOS DE GENEROS OU SEJA COMO TEMOS 2 TERAM DOIS RESUGLTADOS UM CORRESPONDENDO A CADA GENERO;

b).
    SELECT id, name FROM Actor ORDER BY name DESC;

c).
    SELECT name, salary FROM Actor ORDER BY salary DESC;

d).
    SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3;

e).
    SELECT AVG(salary) FROM Actor WHERE gender="male";



### Exercício 6
a).
    ALTER TABLE Filmes
    ADD playing_limit_date DATE;

b).
    ALTER TABLE Filmes
    CHANGE avaliacao avaliacao boolean;

c).
    UPDATE Filmes 
    SET date_lancamento= "2021-01-14", playing_limit_date= "2021-01-30" WHERE id= '001';

    UPDATE Filmes 
    SET date_lancamento= "2012-02-24", playing_limit_date= "2012-05-25" WHERE id= '002';

d).
    DELETE FROM Filmes WHERE id = "003";

    UPDATE Filmes 
    SET sinopse= "kkkkkkk ou kkkkkk" WHERE id = "003";

    RESULTADO: DEU CERTO, MAS NÃO APARECEU DEPOIS QUANDO DEU O COMANDO PARA MOSTRAR TODOS NÃO SEI PORQUE .


 

### Exercício 7
a).
    SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;

b).
    SELECT AVG(avaliacao) FROM Filmes;

c).
    SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();

d).
    SELECT COUNT(*) FROM Filmes WHERE release_date < CURDATE();

e).
    SELECT MAX(avaliacao) FROM Filmes;

f).
    SELECT MIN(avaliacao) FROM Filmes;


### Exercício 8
a).
    SELECT * FROM Filmes ORDER BY name;

b).
    SELECT * FROM Filme ORDER BY name LIMIT 5;

c).
    SELECT * FROM Filmes 
    WHERE release_date < CURDATE() 
    ORDER BY release_date DESC 
    LIMIT 3;

d).
    SELECT * FROM Movie 
    ORDER BY rating DESC 
    LIMIT 3;
