# React + TypeScript + Vite

ONDE PAREI: TENHO QUE SUBIR TODOS OS ARQUIVOS PARA O GITHUB MANUALMENTE E DEPOIS VER COM O CHAT OS PRÓXIMOS PASSOS.
CHATGPT: Projeto Novo Git

## 📦 Sobre o Projeto
Este repositório é um **template base** para iniciar novos projetos utilizando **React + TypeScript + Vite**.

O objetivo é acelerar o desenvolvimento de novos projetos, já trazendo:

- Estrutura de pastas organizada
- Roteamento configurado
- Layout base da aplicação
- Configuração de ESLint e Prettier
- Alias de import (`@`)
- Lazy Loading nas rotas
- Organização automática de imports e atributos JSX

## 🚀 Tecnologias
- React
- TypeScript
- Vite
- React Router DOM
- Styled-components
- Styled Normalize
- React Icons
- ESLint
- Prettier

## ▶️ Executando o Projeto
Instalar dependências:
``npm install``

## Rodar ambiente de desenvolvimento:
``npm run dev``

## Rodar ambiente de produção:
``npm run build``



# 📁 Estrutura de Pastas
src
├ assets
│ ├ images
│ └ style
│ └ global.ts
│
├ components
│ ├ Layout
│ └ ScrollToTop
│
├ pages
│ ├ Home
│ ├ Header
│ └ Footer
│
├ routes
│ └ router.tsx
├ theme
│   ├ theme.ts
│   └ styled-components.d.ts
│
├ types
├ App.tsx
└ main.tsx



## 🎨 Estilos Globais

### Pasta `styles` — arquivo `global.ts`
Utiliza a biblioteca **styled-normalize** para padronizar o comportamento dos estilos entre navegadores.

O `GlobalStyle` define:
- Reset e normalização de CSS
- Fonte padrão do projeto
- Cores base
- Configurações globais de layout

Esse arquivo é carregado uma única vez na aplicação.


## 🧭 Rotas (`router`)


A pasta `routes` centraliza toda a configuração de navegação da aplicação utilizando o **React Router**.


### Funcionamento
- Define as rotas públicas do site institucional
- Utiliza um componente de `Layout` para páginas que compartilham estrutura visual comum
- As páginas são renderizadas dentro do `<Outlet />` definido no Layout
- Implementar **Lazy Loading nas páginas**

---

Exemplo simplificado:

```tsx
const Home = lazy(() => import("@/pages/Home"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Carregando...</p>}>
            <Home />
          </Suspense>
        )
      }
    ]
  }
]);
```

---

### Integração com a aplicação
O roteamento é inicializado no arquivo `App.tsx` através do componente:

```ts
import { GlobalStyle } from '@/assets/style/global';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
export default App;
```

----

## 🎨 Theme (Styled Components)

O projeto utiliza **Styled Components** com **ThemeProvider** para centralizar e padronizar estilos globais da aplicação.

O tema permite definir cores, tipografia e outros tokens de design em um único local, facilitando a manutenção e garantindo consistência visual em toda a interface.

---

### 📁 Estrutura
src
└ theme
├ theme.ts
└ styled-components.d.ts


---

### 📄 `theme.ts`

Responsável por definir o objeto de tema utilizado em toda a aplicação.

Exemplo:

```ts
export const theme = {
  colors: {
    background: {
      global: '#F9FAFB',
    },
    text: {
      primary: '#AAAAAA',
    },
    fonts: {
      global: 'Poppins, sans-serif',
    },
    primary: '#94c11f',
    secundary: '#f6f6f6',
    success: '#1e7f4f',
    error: '#b30000',
  }
};

export type Theme = typeof theme;
```
### 📄 styled-components.d.ts
Arquivo responsável por tipar o tema no TypeScript, permitindo autocomplete e validação de tipos ao utilizar o theme.

```tsx
import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```
### 📄 Uso no App.tsx
O ThemeProvider é utilizado para disponibilizar o tema para toda a aplicação.

```tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

<ThemeProvider theme={theme}>
  <GlobalStyle />
  <RouterProvider router={router} />
</ThemeProvider>
```

### 📄 Utilizando o tema nos componentes
```tsx
color: ${({ theme }) => theme.colors.primary};
background: ${({ theme }) => theme.colors.background.global};
font-family: ${({ theme }) => theme.colors.fonts.global};
```
# ✅ Benefícios
- Centralização das variáveis de design
- Melhor organização do CSS
- Autocomplete no TypeScript
- Facilita manutenção e escalabilidade
- Preparado para implementar Dark Mode ou múltiplos temas no futuro

--------------------

## 🧩 Componentes Globais

### Componente `ScrollToTop`
Componente responsável por **resetar o scroll da página ao trocar de rota**.

#### Funcionamento
- Observa a mudança do `pathname` através do `useLocation`
- Executa `window.scrollTo(0, 0)` sempre que a rota muda
- Ele força a página a rolar para o topo quando há mudança de rota.

#### Local de uso
- Importado e utilizado no componente `Layout`
- Afeta todas as páginas que utilizam esse layout

#### Objetivo
- Melhorar a experiência do usuário em navegação SPA
- Evitar que novas páginas carreguem com scroll anterior

------------------------------------------------------------------------------------
### Componente `Layout`
Componente responsável por **definir o layout global da aplicação**, envolvendo todas as páginas que compartilham estrutura visual comum.

### Funcionamento
- Renderiza elementos fixos da aplicação (Header e Footer)
- Utiliza o componente `<Outlet />` do React Router para renderizar o conteúdo dinâmico das páginas
- Permite centralizar comportamentos globais (ex: `ScrollToTop`)

### Local de Uso
- Importado e utilizado na configuração de rotas (`router.tsx`)
- Atua como rota pai para páginas que utilizam layout compartilhado

#### Objetivo
- Evitar duplicação de código (Header/Footer em cada página)
- Garantir consistência visual entre páginas
- Facilitar manutenção e evolução do layout

----------------------------------------------------------------------------------


### 🔧 Alias de Import
Foi configurado um alias para facilitar os imports no projeto.

```tsx
import Layout from "@/components/Layout/Layout";
```
### 🧹 Formatação de Código
O projeto utiliza:

**Prettier**
Responsável por formatar automaticamente o código.

**Plugins**
- prettier-plugin-organize-attributes
- prettier-plugin-organize-imports

``Isso garante:``
- organização automática de imports
- organização de atributos JSX
- padrão consistente de código

### 🧪 ESLint
O ESLint está configurado para:

- detectar erros
- aplicar boas práticas
- manter consistência no código
