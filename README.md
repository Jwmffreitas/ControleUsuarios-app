<h1 align="center">ControleUsuarios-App</h1>

## :page_with_curl: Sobre
O objetivo era aquidirir uma noção básica no desenvolvimento com Flutter no front e Node.js no back.

Por que Node.js e não Go para casar com Flutter? Ou então, por que Flutter e não React Native?
Realmente não tenho nenhuma resposta muito técnica para essas perguntas. A escolha não veio de uma embasamento, apenas foram as tecnologias que mais me atraíram para aprender e  desenvolver esse projeto :)

- Flutter - Para desenvolver o app mobile.
- Node.js - Por usar JavaScript, pensei que me sentiria mais confortável usando-a.
- SQLite - A utilização desse só se deve ao fato de que a estrutura e o armazenamento dos dados não foram o foco desse projeto, pois com esse pude aproveitar melhor o tempo de desenvolvimento focando em outros problemas.

Back - O back tem dois endpoints, um para realizar o GET dos Usuários e outro para Criar mais usuários através da lib "faker".
- /api/users - GET All Users
- /api/users/create - Create 5 Users (Quantidade definida dentro de um for)

Front - Construído dentro da Classe HomePage, da qual possui um metódo responsável pelo GET dos dados e depois constrói o Widget de lista utilizando-os

# Imagem da aplicação:

<h1 align="left">
  <img alt="Home" src="https://github.com/Jwmffreitas/ControleUsuarios-app/blob/main/public/img/running.png" width="800px" />
</h1>

## :hammer: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Flutter](https://flutter.dev/?gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VH4FkRDpTdGLPy1Uqxw_N-2HgPHoaw48V9N1o6Pa2gAcfp4MZU2vwMaAvAjEALw_wcB&gclsrc=aw.ds)
- [NodeJS](https://nodejs.org/en/)
- [SQLite](https://www.sqlite.org/index.html)
- [Android Studio](https://developer.android.com/studio?hl=pt&gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VF5bH_WHFjld7RqrqIz9NPxC34Ce15QeSDbuxoOvlqGj1Mi9XdlfEYaAsLZEALw_wcB&gclsrc=aw.ds)
- [Visual Studio Code](https://code.visualstudio.com)

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Flutter**](https://flutter.dev) instalado.
- Ter [**Android Studio**](https://developer.android.com/studio?hl=pt&gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VF5bH_WHFjld7RqrqIz9NPxC34Ce15QeSDbuxoOvlqGj1Mi9XdlfEYaAsLZEALw_wcB&gclsrc=aw.ds) instalado por causa do emulador.

## :gear: Iniciando o backend
```bash

  # Iniciar a aplicação:
  $ cd backend
  $ npm start
```

A aplicação tambpem funciona diretamente no terminal, mas sendo acessado por outro arquivo.

## :gear: Iniciando o frontend
```bash

  # Iniciar a aplicação:
  Com o device android aberto
  $ cd frontend
  $ flutter run lib/main.dart
```

Feito por João Vitor Freitas 👋🏻 [Toca aqui, maninho!](https://github.com/Jwmffreitas)
