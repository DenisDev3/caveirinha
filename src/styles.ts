import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preta: '#111',
  cinza: '#333',
  cinzaClaro: '#A3A3A3',
  vermelho: '#8B0000',
  vermelho2: '#b71540',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`

    * {
        margin: 0;
        padding: 5;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        color: #fff;
    }

    body {
        background-color: ${cores.vermelho};
        padding-top: 40px;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
