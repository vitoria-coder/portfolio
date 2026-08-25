# Vitória Sousa — Software Engineer
Portfólio profissional desenvolvido para apresentar minha atuação, projetos, experimentos e evolução na área de Engenharia de Software.

A proposta do projeto é além de uma página institucional: o portfólio é tratado como um produto digital, combinando **engenharia de software, arquitetura frontend, design de interface, acessibilidade, responsividade e experiência do usuário**.

---

## Sobre o projeto
Este projeto é o desenvolvimento do meu portfólio profissional como Software Engineer.

A aplicação foi construída utilizando uma arquitetura baseada no **Next.js App Router**, com componentes React organizados por responsabilidade e uma identidade visual própria desenvolvida com **Tailwind CSS** e CSS global.

A interface segue uma direção visual minimalista, editorial e tecnológica, buscando equilibrar:

* clareza de informação;
* identidade visual;
* qualidade de interação;
* organização arquitetural;
* acessibilidade;
* responsividade;
* performance.

O projeto também funciona como um espaço de experimentação para aplicar conceitos de frontend moderno e engenharia de software em um produto real.

---

## Objetivos
Os principais objetivos do projeto são:

* Criar uma apresentação profissional da minha atuação como Software Engineer.
* Desenvolver uma experiência de navegação clara e consistente.
* Demonstrar conhecimentos de desenvolvimento frontend moderno.
* Aplicar princípios de componentização e separação de responsabilidades.
* Desenvolver uma identidade visual própria.
* Garantir boa experiência em diferentes dispositivos.
* Explorar microinterações de maneira consciente.
* Manter uma arquitetura preparada para evolução.
* Utilizar o próprio portfólio como laboratório de aprendizado e experimentação.

---

## Stack

### Core

* [Next.js](https://nextjs.org/) `16.3.0`
* React `19.2.8`
* TypeScript `5`
* Tailwind CSS `4`

### UI e interação

* Motion for React (`motion`)
* CSS
* HTML semântico
* Responsive Design

### Arquitetura

* Next.js App Router
* React Server Components
* Client Components somente quando necessários
* Componentização por responsabilidade
* Rotas estáticas
* Rota dinâmica para projetos

---

## Principais características

### Navegação

O sistema possui uma navegação global desenvolvida especificamente para o projeto.
A Navbar possui:

* identificação visual da marca;
* navegação principal;
* indicação da página atual;
* indicador orbital de navegação;
* menu responsivo para dispositivos móveis;
* suporte à navegação por teclado;
* estados de `hover`;
* estados de `focus-visible`;
* animações sutis.

A navegação é composta por componentes independentes para manter cada responsabilidade isolada.

---

### Home

A Home funciona como a principal porta de entrada do portfólio.
Sua composição é dividida em seções independentes:

* Hero;
* Selected Work;
* Profile;
* Contact.

A página busca apresentar rapidamente:

* quem sou;
* minha área de atuação;
* minha abordagem;
* trabalhos selecionados;
* áreas de interesse;
* formas de continuar explorando o portfólio.

A Home não replica a estrutura das páginas internas. Ela funciona como uma **experiência editorial de apresentação**, enquanto as rotas possuem suas próprias responsabilidades.

---

### Selected Work

A seção de trabalhos apresenta projetos em formato editorial, utilizando linhas interativas em vez de uma simples grade convencional de cards.
Cada projeto possui informações estruturadas como:

* número;
* título;
* descrição;
* categoria.

A arquitetura permite que essa estrutura evolua posteriormente para informações mais completas, como:

* tecnologias;
* imagens;
* descrição detalhada;
* links;
* status;
* estudos de caso.

Os projetos atualmente apresentados são placeholders e não representam necessariamente projetos reais.

---

### Profile

A seção de perfil funciona como uma pausa editorial entre os trabalhos e o contato.

Ela apresenta:

* posicionamento profissional;
* áreas de interesse;
* contexto técnico;
* relação entre engenharia e experiência digital.

A intenção é gerar interesse suficiente para que o visitante continue explorando as páginas internas, sem transformar a Home em um currículo completo.

---

### Contact

A seção de contato encerra a experiência principal da Home com uma chamada direta para a página de contato.

O objetivo é manter o encerramento:

* simples;
* acessível;
* profissional;
* visualmente consistente com o restante da aplicação.

---

## Estrutura de rotas

O projeto utiliza o **Next.js App Router**.

Atualmente, as principais rotas são:

| Rota           | Responsabilidade                 |
| -------------- | -------------------------------- |
| `/`            | Home                             |
| `/about`       | Sobre / perfil                   |
| `/work`        | Trabalhos e projetos             |
| `/work/[slug]` | Detalhes dinâmicos de um projeto |
| `/lab`         | Laboratório / experimentos       |
| `/contact`     | Contato                          |

### Rotas dinâmicas

A rota:

```text
/work/[slug]
```

permite representar projetos individualmente utilizando um identificador variável.

Exemplo conceitual:

```text
/work/meu-projeto
/work/outro-projeto
```

O valor de `slug` pode ser utilizado pela página dinâmica para determinar qual conteúdo deve ser apresentado.

---

# Arquitetura

A aplicação separa **rotas** de **componentes de interface**.

As rotas ficam dentro de:

```text
src/app/
```

Enquanto componentes reutilizáveis e específicos ficam dentro de:

```text
src/components/
```

Essa separação evita concentrar toda a lógica visual nos arquivos `page.tsx`.

---

## Estrutura atual

```text
src/
│
├── app/
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── lab/
│   │   └── page.tsx
│   │
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
└── components/
    │
    ├── home/
    │   ├── ContactSection.tsx
    │   ├── FeaturedWork.tsx
    │   ├── HomeHero.tsx
    │   ├── HomeReveal.tsx
    │   ├── ProfileSection.tsx
    │   └── ProjectRow.tsx
    │
    └── navigation/
        ├── Navbar.tsx
        ├── NavbarBrand.tsx
        ├── NavbarLink.tsx
        ├── NavbarLinks.tsx
        ├── NavbarMobile.tsx
        ├── OrbitalIndicator.tsx
        │
        └── footer/
            ├── Footer.tsx
            ├── FooterBrand.tsx
            └── FooterSocials.tsx
```

---

# Organização dos componentes

## `components/home`

Contém componentes específicos da experiência da Home.

### `HomeHero`

Responsável pela apresentação inicial da página.

Inclui:

* identificação profissional;
* nome;
* descrição;
* CTA;
* informações contextuais;
* metadados da página.

### `FeaturedWork`

Responsável pela seção de trabalhos selecionados.

### `ProjectRow`

Representa individualmente cada projeto apresentado na seção de trabalhos.

O componente recebe os dados do projeto através de props tipadas em TypeScript.

### `ProfileSection`

Responsável pela seção de perfil e áreas de interesse.

### `ContactSection`

Responsável pelo encerramento da Home e direcionamento para a página de contato.

### `HomeReveal`

Componente responsável pelas animações de entrada das seções da Home.

Ele utiliza Motion for React e considera a preferência do usuário por redução de movimento através de `useReducedMotion`.

---

# Navegação

A navegação foi dividida em componentes menores para evitar que uma única Navbar concentre todas as responsabilidades.

```text
navigation/
├── Navbar.tsx
├── NavbarBrand.tsx
├── NavbarLink.tsx
├── NavbarLinks.tsx
├── NavbarMobile.tsx
└── OrbitalIndicator.tsx
```

### `Navbar`

Componente principal responsável pela composição da navegação.

Gerencia:

* estado do menu mobile;
* rota atual;
* link ativo;
* abertura e fechamento do menu.

### `NavbarBrand`

Representa a identidade visual da aplicação e direciona o usuário para a Home.

### `NavbarLink`

Representa individualmente um item de navegação.

Também controla:

* estado ativo;
* indicação visual;
* interação;
* acessibilidade.

### `NavbarLinks`

Organiza os links da navegação desktop.

### `NavbarMobile`

Implementa a experiência de navegação em dispositivos móveis.

Inclui:

* menu lateral;
* backdrop;
* fechamento através de `Escape`;
* bloqueio do scroll do `body`;
* animações;
* estados de interação.

### `OrbitalIndicator`

Representa visualmente a posição da página atual dentro do sistema de navegação.

---

# Footer

O Footer também foi dividido por responsabilidade:

```text
footer/
├── Footer.tsx
├── FooterBrand.tsx
└── FooterSocials.tsx
```

Atualmente são disponibilizados links para:

* LinkedIn
* GitHub

Os links sociais são mantidos em uma estrutura de dados independente da apresentação visual.

---

# Identidade visual

A identidade visual utiliza uma linguagem predominantemente escura, minimalista e editorial.

Os principais princípios são:

* fundo escuro;
* tipografia clara;
* baixo uso de cores;
* contraste controlado;
* linhas e divisores sutis;
* tipografia monoespaçada para metadados;
* grandes escalas tipográficas;
* espaço negativo;
* composição assimétrica quando apropriado.

A intenção não é criar uma estética cyberpunk ou excessivamente futurista.

O objetivo é transmitir uma sensação de:

> tecnologia + precisão + sofisticação + produto digital.

---

## Tipografia

A interface utiliza diferentes níveis tipográficos para estabelecer hierarquia.

Textos de maior importância utilizam tipografia proporcional e maior escala.

Informações técnicas, números, categorias e pequenos metadados utilizam tipografia monoespaçada.

Essa diferença ajuda a criar uma linguagem visual semelhante à encontrada em interfaces técnicas e sistemas digitais sem transformar o portfólio em uma interface puramente decorativa.

---

# Responsividade

A aplicação foi desenvolvida considerando diferentes tamanhos de tela:

* mobile;
* tablet;
* notebook;
* desktop;
* telas maiores.

A responsividade é implementada utilizando os breakpoints e utilitários do Tailwind CSS.

Algumas decisões específicas incluem:

* navegação desktop substituída por menu mobile;
* grids adaptativos;
* tipografia fluida;
* espaçamentos progressivos;
* controle de largura de conteúdo;
* prevenção de overflow horizontal;
* adaptação dos CTAs;
* reorganização das informações em telas menores.

A responsividade é tratada como parte da composição da interface, e não apenas como uma etapa posterior.

---

# Animações e interações

O projeto utiliza a biblioteca `motion` para microinterações.

As animações são utilizadas principalmente para:

* entrada de elementos;
* transições sutis;
* feedback visual;
* navegação mobile;
* estados de interação.

A intenção é evitar animações puramente decorativas.

Sempre que possível, as animações possuem uma função relacionada a:

* hierarquia;
* feedback;
* continuidade visual;
* percepção de estado.

---

## Reduced Motion

A experiência considera usuários que preferem reduzir movimentos.

O componente `HomeReveal` utiliza:

```tsx
useReducedMotion()
```

para reduzir ou remover deslocamentos e diminuir a duração das animações quando necessário.

Isso ajuda a preservar a acessibilidade sem eliminar completamente a experiência visual.

---

# Acessibilidade

A aplicação utiliza recursos de acessibilidade desde a construção dos componentes.

Entre eles:

* HTML semântico;
* elementos `nav`, `main`, `section`, `header`, `footer`, `article`;
* `aria-label`;
* `aria-labelledby`;
* `aria-current`;
* estados `focus-visible`;
* navegação através do teclado;
* botão de menu com `aria-expanded`;
* controle de foco visual;
* suporte a `Escape` no menu mobile;
* indicação textual e visual de estados;
* consideração de `prefers-reduced-motion`.

A acessibilidade é tratada como parte da implementação e não como uma camada adicionada posteriormente.

---

# SEO

O projeto utiliza o sistema de metadata do Next.js através do `layout.tsx`.

Atualmente são definidos:

* título padrão;
* template de títulos;
* descrição;
* Open Graph;
* Twitter metadata;
* idioma `pt-BR`.

A estrutura de headings também é organizada semanticamente através de:

```text
h1
h2
h3
```

de acordo com a hierarquia de cada página.

---

# Performance

A arquitetura prioriza performance evitando JavaScript desnecessário.

Sempre que possível, os componentes permanecem como **Server Components**.

Componentes Client são utilizados quando existe necessidade real de:

* estado;
* eventos;
* efeitos;
* animações interativas.

Exemplos incluem:

* Navbar;
* navegação mobile;
* componentes Motion;
* elementos que dependem de interação do usuário.

Essa abordagem reduz a quantidade de JavaScript necessária no cliente.

---

# TypeScript

O projeto utiliza TypeScript para tipagem da aplicação.

Um exemplo é a definição dos projetos apresentados na Home:

```tsx
export interface Project {
  number: string;
  title: string;
  description: string;
  category: string;
}
```

Essa estrutura permite que os componentes recebam dados previsíveis e reduz a possibilidade de inconsistências durante a evolução da aplicação.

---

# Como executar

## Pré-requisitos

É necessário possuir instalado:

* Node.js
* npm

Recomenda-se utilizar uma versão do Node.js compatível com a versão atual do Next.js utilizada pelo projeto.

---

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre no diretório:

```bash
cd my-app
```

Instale as dependências:

```bash
npm install
```

---

## Ambiente de desenvolvimento

Execute:

```bash
npm run dev
```

Depois abra:

```text
http://localhost:3000
```

---

# Scripts

O projeto possui os seguintes scripts:

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Next.js.

### Build

```bash
npm run build
```

Gera a build de produção da aplicação.

### Produção

```bash
npm run start
```

Inicia a aplicação utilizando a build de produção.

### Lint

```bash
npm run lint
```

Executa o ESLint configurado no projeto.

---

# Decisões técnicas

## Next.js App Router

O App Router foi escolhido como base da aplicação por oferecer uma arquitetura moderna para aplicações React através do Next.js.

A estrutura permite organizar páginas e layouts diretamente através do sistema de arquivos.

Exemplo:

```text
app/about/page.tsx
```

representa:

```text
/about
```

Enquanto:

```text
app/work/[slug]/page.tsx
```

representa uma rota dinâmica.

---

## Componentização

Os componentes são separados por responsabilidade.

A intenção não é transformar cada pequeno elemento visual em um componente independente, mas extrair partes que possuem uma responsabilidade real ou que podem evoluir de maneira independente.

Essa abordagem evita tanto:

* componentes gigantes;
* quanto abstrações desnecessárias.

---

## Tailwind CSS

Tailwind CSS é utilizado como principal ferramenta de composição visual.

A estilização prioriza:

* consistência;
* responsividade;
* baixo acoplamento;
* reutilização de padrões;
* composição através de utilitários.

---

## Motion

A biblioteca Motion foi utilizada para interações que exigem comportamento declarativo no React.

Ela complementa o Tailwind CSS sem substituir a responsabilidade do CSS na construção da interface.

---

# Filosofia de desenvolvimento

O projeto segue alguns princípios:

### Não adicionar complexidade sem necessidade

Uma solução mais sofisticada tecnicamente não é necessariamente uma solução melhor.

A prioridade é utilizar a ferramenta mais simples que resolva corretamente o problema.

---

### Preservar a arquitetura existente

Novos recursos devem evoluir a estrutura existente em vez de reconstruí-la sem necessidade.

Mudanças estruturais devem ter uma justificativa clara.

---

### Design e engenharia devem trabalhar juntos

A interface não deve ser construída separadamente da arquitetura.

Decisões visuais precisam considerar:

* acessibilidade;
* performance;
* responsividade;
* manutenção;
* semântica;
* comportamento real do produto.

---

### Interação com propósito

Animações e microinterações devem melhorar a compreensão ou fornecer feedback.

O objetivo não é adicionar movimento simplesmente para tornar a interface mais chamativa.

---

# Estado atual do projeto

O projeto encontra-se em desenvolvimento contínuo.

A base atual já contempla:

* arquitetura Next.js;
* App Router;
* rotas principais;
* rota dinâmica de projetos;
* Navbar responsiva;
* Footer;
* Home componentizada;
* identidade visual;
* Tailwind CSS;
* Motion;
* microinterações;
* responsividade;
* acessibilidade básica;
* metadata;
* estrutura preparada para evolução.

O conteúdo de projetos ainda utiliza informações de demonstração/placeholders em algumas áreas.

Esses conteúdos serão substituídos por projetos reais à medida que o portfólio evoluir.

---

# Roadmap

Algumas evoluções previstas incluem:

* [ ] Inserir projetos reais.
* [ ] Desenvolver estudos de caso dos projetos.
* [ ] Expandir a página About.
* [ ] Desenvolver a página Work com conteúdo definitivo.
* [ ] Desenvolver a página Lab.
* [ ] Desenvolver completamente a página Contact.
* [ ] Adicionar imagens e previews reais dos projetos.
* [ ] Refinar SEO.
* [ ] Adicionar Open Graph images.
* [ ] Realizar auditoria de acessibilidade.
* [ ] Realizar auditoria de performance.
* [ ] Adicionar testes quando houver necessidade de cobertura automatizada.
* [ ] Preparar pipeline de deploy.
* [ ] Refinar detalhes de interação e motion conforme o conteúdo real for incorporado.

---

# Estrutura conceitual

A aplicação pode ser entendida em três camadas principais:

```text
┌─────────────────────────────────────┐
│           Global Shell              │
│                                     │
│        Navbar + Layout + Footer     │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│              Routes                 │
│                                     │
│ Home / About / Work / Lab / Contact │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│           UI Components             │
│                                     │
│ Home / Navigation / Footer          │
└─────────────────────────────────────┘
```

Essa separação permite que a aplicação cresça sem transformar uma única página ou componente em um ponto central de complexidade.

---

# Autor

**Vitória Sousa**

Software Engineer

* LinkedIn: https://www.linkedin.com/in/vitória-sousa-dev
* GitHub: https://github.com/vitoria-coder

---

# Licença

Este projeto representa meu portfólio profissional e seu código pode evoluir conforme o desenvolvimento da aplicação.

Caso partes do código sejam reutilizadas em outros projetos, recomenda-se verificar individualmente os direitos e licenças de quaisquer recursos ou dependências de terceiros utilizados.
