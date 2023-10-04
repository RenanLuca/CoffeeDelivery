import styled from "styled-components"

export const CustomerAdress = styled.div `
    background: var(--base-card);
    border-radius: 6px;
    padding: 2.5rem;
    margin-top: 0.9rem;
    flex: 1;
    width: 100%;

   & .CustomerAdressHeader {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
    & svg {
        color: var(--yellow-dark);
    }
    & p {
        color: var(--base-subtitle);
        line-height: 1.3;
        font-size: 1rem;
    }
    & span {
        color: var(--base-text);
        line-height: 1.3;
        font-size: 0.875rem;
    }
   }
`
 export const BaseInputAdress = styled.input `
    background: var(--base-input);
    border: 1px solid var(--base-button);
    padding: 0.75rem;
    line-height: 1.3;
    font-size: 0.875rem;
    border-radius: 4px;

    &::placeholder {
        color: var(--base-label);
        font-size: 0.875rem;
        line-height: 1.3;
    }
 `
 export const CustomerAdressMain = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 3.75rem;
    grid-template-rows: repeat(1fr, 4);
    grid-row-gap: 1rem;
    grid-column-gap: 0.75rem;
    grid-template-areas: 
    "zip . ."
    "street street street"
    "number complement complement"
    "neighborhood city state";

    & #zip {
        grid-area: zip;
        
    }
    & #street {
        grid-area: street;
    }
    & #number {
        grid-area: number;
    }

    & #complement {
        grid-area: complement;
    }
  
    & #neighborhood {
        grid-area: neighborhood;
    }
    & #city {
        grid-area: city;
    }
    & #state {
        grid-area: state;
    }
 `