import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --yellow-dark: #c47f17;
        --yellow: #DBAC2C;
        --yellow-light: #F1E9C9;

        --purple-dark: #4B2995;
        --purple: #8047F8;
        --purple-light: #EBE5F9;

        --base-title: #272221;
        --base-subtitle: #403937;
        --base-text: #574F4D;
        --base-label: #8D8686;
        --base-hover: #D7D5D5;
        --base-button: #e6e5e5;
        --base-input: #EDEDED;
        --base-card: #F3F2F2;

        --background: #FAFAFA;

        --white: #FFFFFF;
    
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
       
    }
    body {
        background-color: var(--background); 
        padding: 0 10rem;   
        -webkit-font-smoothing: antialiased;   
    }


    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    h1,h2,h3,h5 {
        font-family: 'Baloo 2', cursive;
    }
`
