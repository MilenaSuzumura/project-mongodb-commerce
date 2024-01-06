# 🍔 MongoDB Commerce 🍔

MongoDb é um projeto focado em praticar a utilização de queries do MongoDB utilizando o cardápio do McDonald's(ingredientes, valores nutricionais e dados fictícios de vendas).

#### Este projeto está dividido em três níveis. Cada um deles trabalhará habilidades diferentes. Esses níveis são:
* Alterar documentos utilizando métodos de update com operadores simples;
* Alterar documentos utilizando operadores complexos e modificadores;
* Construir queries e expressões complexas utilizando índices textuais e expressões regulares.

<strong>OBS:</strong> ESSE PROJETO FOI DESENVOLVIDO NA TRYBE.

## Técnologias usadas
* JavaScript;
* Docker;
* MongoDB;
* EsLint.

<!-- 


## Rotas, entradas e saídas

<details>
<summary>Endpoint GET /products</summary><br />
Utilizado para retornar as informações de todos os produtos que contém no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-products" src="/images-readme/get-products-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-products" src="/images-readme/get-products-exemplo-saida.png">

</details>

<details>
<summary>Endpoint GET /products/:id</summary><br />
Utilizado para retornar as informações do produto com o id correspondente que contém no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-products-id" src="/images-readme/get-products-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-products-id" src="/images-readme/get-products-id-exemplo-saida.png">

#### Mensagens de erro
Existe apenas uma mensagem de erro que seria quando o id não corresponde a nenhum produto.

##### Caso não exista produto com aquele id no banco de dados, o retorno será:
```
{
  "message": "Product not found"
}
```

</details>

<details>
<summary>Endpoint POST /products</summary><br />
Utilizado para criar e adicionar um novo produto no banco de dados. O banco de dados exige que o usuário insira somente um nome com, no mínimo, 5 caracters.

##### Informações necessárias:

* <strong>name:</strong> É o nome do produto. Deve ser enviado como string e o mínimo de caracters é 5. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-products" src="/images-readme/post-products-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-products" src="/images-readme/post-products-exemplo-saida.png">

#### Mensagens de erro
Existem dois cenários onde a saída acima pode não ser retornada: caso não seja enviado um nome e caso o nome não tenha, pelo menos, 5 caracters.

##### Retorno para caso falte o nome:
```
{
  "message": "\"name\" is required"
}
```

##### Retorno para caso name tenha menos de 5 caracters:
```
{
  "message": "\"name\" length must be at least 5 characters long"
}
```

</details>

<details>
<summary>Endpoint PUT /products/:id</summary><br />
Utilizado para atualizar o nome do produto com o id correspondente. Para isso, é necessário que o usuário insira somente um nome com, no mínimo, 5 caracters.

##### Informações necessárias:

* <strong>name:</strong> É o nome do produto. Deve ser enviado como string e o mínimo de caracters é 5. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-put-products-id" src="/images-readme/put-products-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-put-products-id" src="/images-readme/put-products-id-exemplo-saida.png">

#### Mensagens de erro
Existem dois cenários onde a saída acima pode não ser retornada: caso não seja enviado um nome e caso o nome não tenha, pelo menos, 5 caracters.

##### Retorno para caso falte o nome:
```
{
  "message": "\"name\" is required"
}
```

##### Retorno para caso name tenha menos de 5 caracters:
```
{
  "message": "\"name\" length must be at least 5 characters long"
}
```

</details>

<details>
<summary>Endpoint DELETE /products/:id</summary><br />
Utilizado para deletar o produto com o id correspondente.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-delete-products-id" src="/images-readme/delete-products-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-delete-products-id" src="/images-readme/delete-products-id-exemplo-saida.png">

#### Mensagens de erro
Existe apenas uma mensagem de erro que seria quando o id não corresponde a nenhum produto.

##### Caso não exista produto com aquele id no banco de dados, o retorno será:
```
{
  "message": "Product not found"
}
```

</details>

<details>
<summary>Endpoint GET /sales</summary><br />
Utilizado para retornar as informações de todas as compras.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-sales" src="/images-readme/get-sales-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-sales" src="/images-readme/get-sales-exemplo-saida.png">

</details>

<details>
<summary>Endpoint GET /sales/:id</summary><br />
Utilizado para retornar as informações da compra com o id correspondente que contém no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-sales-id" src="/images-readme/get-sales-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-sales-id" src="/images-readme/get-sales-id-exemplo-saida.png">

#### Mensagens de erro
Existe apenas uma mensagem de erro que seria quando o id não corresponde a nenhuma compra.

##### Caso não exista a compra com aquele id no banco de dados, o retorno será:
```
{
  "message": "Sale not found"
}
```

</details>

<details>
<summary>Endpoint POST /sales</summary><br />
Utilizado para criar uma nova compra. Para isso, necessita de array que contém objetos com um id do produto e a quantidade do produto.


##### Informações necessárias:
* <strong>productId:</strong> É o id do produto e deve ser enviado como int. É obrigatório.
* <strong>quantity:</strong> É a quantidade do produto. Deve ser enviado como int e o número deve ser acima de 0. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-de-entrada-correta-post-sales" src="/images-readme/post-sales-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-de-saida-correta-post-sales" src="/images-readme/post-sales-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

##### Exemplo caso esteja faltando alguma das informações obrigatórias
```
{
  "message": "\"productId\" is required"
}
```

##### Exemplo caso não preencha os requisitos necessários:
```
{
  "message": "\"quantity\" must be greater than or equal to 1"
}
```

</details>

<details>
<summary>Endpoint DELETE /sales/:id</summary><br />
Utilizado para deletar as informações da compra com o id correspondente que contém no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-delete-sales-id" src="/images-readme/delete-sales-id-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-delete-sales-id" src="/images-readme/delete-products-id-exemplo-saida.png">

#### Mensagens de erro
Existe apenas uma mensagem de erro que seria quando o id não corresponde a nenhuma compra.

##### Caso não exista a compra com aquele id no banco de dados, o retorno será:
```
{
  "message": "Sale not found"
}
```

</details>

## Utilizando o docker
Para criar os containers, execute: `docker-compose up -d`

Para abrir o terminar do container, execute: `docker exec -it blogs_api bash`

## Instalando Dependências
  `npm install`

## Banco de dados
Para criar o banco de dados, execute: `npm run migration`

Para popular o banco de dados: `npm run seed`

## Aplicação Node:
Para executar a aplicação e acessar as rotas, execute: `npm run debug`


## Executando Testes
Para rodar todos os testes:

  `npm test`

<!-- 
Para rodar um teste específico:

  `npm test nomeDoArquivo`

exemplo:
`npm test post`


<strong>OBS:</strong> Os testes irão rodar com os testes de cobertura -->