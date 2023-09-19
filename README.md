# Pokédex

Este é um projeto de Pokédex simples criado usando tecnologias web padrão. Ele permite aos usuários buscar informações sobre diferentes Pokémon, incluindo seus nomes, tipos e imagens.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- **HTML:** A estrutura básica da página da web foi criada usando HTML (Hypertext Markup Language).

- **CSS:** O estilo visual da página foi estilizado com CSS (Cascading Style Sheets).

- **JavaScript:** A funcionalidade interativa da Pokédex é implementada usando JavaScript.

- **React:** Biblioteca javascript utilizada para facilitar e melhorar criação de websites.

- **Recoil:** Biblioteca do Facebook para gerenciamento de estado compartilhado.

- **Axios:** Biblioteca para requisições HTTP.

- **Tailwindcss:** Biblioteca de estilo baseada em classes utilitárias.

- **HeroIcons:** Icones baseados em tailwindcss.

- **PokéAPI:** Os dados dos Pokémon são obtidos da PokéAPI, uma API pública que fornece informações detalhadas sobre os Pokémon.

## Detalhes sobre o projeto

Para melhor organização do código, o acesso a resposta da API foi separado em hooks da seguinte forma:

```bash
-hooks
    -useLoadApi
    -usePokemon
    -usePokemonList
```

Onde os hooks **usePokemon** e **usePokemonList** utilizam o **useLoadApi** para acesso a api

A biblioteca recoil foi utilizada para que dados fossem compartilhados entre componentes sem criar uma prop hell

## Como Usar

1. Clone este repositório em sua máquina local usando o seguinte comando:

   ```bash
   git clone https://github.com/BrouGabri3l/pokedex.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd pokedex
   ```

3. Instale as dependencias utilizando:

```bash
npm install
```

3. Inicie o projeto utilizando

```bash
npm run dev
```

4. Ou crie um build utilizando

```bash
npm run build
```
