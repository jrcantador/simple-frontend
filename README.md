
# Frontend

Projeto Angular com autenticação de cadastro de compra. Este projeto é uma aplicação web criada com o framework Angular, que permite aos usuários se autenticarem e realizar cadastro de compras. O objetivo deste documento é fornecer uma visão geral do projeto e suas principais funcionalidades.


![Logo](https://mherman.org/assets/img/blog/angular-logo.png)


## Autores

- [@jrcantador](https://www.github.com/jrcantador)


## Instalação

Após clonar o repositório do projeto, abra um terminal e navegue até a pasta raiz do projeto. Em seguida, execute o seguinte comando para instalar as dependências do projeto:

```bash
  npm run deploy
```

## Executando o projeto

Para executar o projeto, execute o seguinte comando:

```bash
  ng serve
```

Isso irá iniciar o servidor de desenvolvimento e o aplicativo estará acessível em http://localhost:4200/.

## Funcionalidades
Este projeto possui as seguintes funcionalidades principais:

 - Autenticação: O usuário pode criar uma conta e fazer login na aplicação.
 - Cadastro de compras: O usuário autenticado pode cadastrar suas compras, informando o nome do produto, quantidade e preço.
 - Listagem de compras: O usuário autenticado pode visualizar uma lista com todas as compras que ele cadastrou.

## Arquitetura

Este projeto foi construído seguindo a arquitetura MVC (Model-View-Controller). A camada de visualização é composta pelos componentes Angular, a camada de modelo é representada pelos serviços Angular e a camada de controle é responsável pela lógica de negócios da aplicação.
