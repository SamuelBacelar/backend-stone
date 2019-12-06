# Desafio técnico Stone - Back end

Back end criado para o desafio técnico da Stone Pagamentos.

## Primeiros passos
É necessário uma instância do **MongoDB** para rodar esse projeto.

É possível instalar o **MongoDB** diretamente na sua máquina ou executar um container **Docker**.

Caso deseje iniciar o **MongoDB** a partir de um container **Docker** (assumindo que já tenha o **Docker** instalado), execute o seguinte comando:

```
docker run -d -p 27017:27107 -v ~/data:/data/db mongo
```

É necessário baixar todas as dependências do projeto antes de executá-lo. Instale o **npm**, vá até a pasta raiz do projeto e execute `npm install`.

Para executar o projeto, basta rodar o comando `node src/app.js`.

O projeto funciona utilizando a porta [http://localhost:3002](http://localhost:3002).