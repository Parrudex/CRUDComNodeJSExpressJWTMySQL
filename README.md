# Teste Prático para Desenvolvedor Full Stack Especialista

## Tecnologias e ferramentes utilizadas:

- TypeOrm
- Express
- NodeJS
- Vscode
- TypeScript
- MySQL
- Principio utilizado do SOLID
- MVC
- Camada service
- JWT (ainda falta implementar)

## Criando a base do projeto

Crie uma pasta como o nome do projeto

Execute os comandos abaixos (você precisará do [npm](https://www.npmjs.com))

```
$ npm init -y
$ npm install express
```

## Variáveis ambiente

Execute o comando

```
$ npm install dotenv --save
```

Crie o arquivo **.env** na pasta raíz do projeto

## Padronização de Projetos (ESLint, Prettier & EditorConfig)

Execute os comandos abaixo

```
$ npm init @eslint/config@latest -D
```

Acresente no arquivo **eslint.config.mjs**

```
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error"
    }
  }
```

Selecione

- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- None of these
- Marque somente Node
- Use a popular style guide
- Javascript
- Y

## Migrations (Exemplo)

Crie a pasta **src/database/migrations**

Execute o comando

```
$ npm install migration
```

Para criar a tabela users no banco de dados use o comando

```
$ migrate create users
$ migrate
```

## Criptografia

Para criptografia iremos utilizar o _uuid_

```
$ npm install uuid
```

## JWT Token

Execute o comando

```
$ npm install jsonwebtoken
```

## Autor:

- Linkedin: https://www.linkedin.com/in/fabian-rossetti-developer-fullstack/
- Git: https://github.com/Parrudex
