import styled from "styled-components"

export const Order = styled.div `
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
 `
 export const OrderContainer = styled.div `
    background: var(--base-card);
    border-radius: 6px 44px 6px 44px;
    margin-top: 0.9rem;
    padding: 2.5rem;
    width: 100%;
 `
 export const OrderItens = styled.div `

`

 export const OrderPrices = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 1.5rem;

    & .AllPrices {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.75rem;
    }

    & .TotalItems, & .Delivery, .TotalPrice {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & p {
        color: var(--base-text);
        font-size:0.875rem;
        line-height: 1.3;
    }
    & span {
        color: var(--base-text);
        font-size:1rem;
        line-height: 1.3;
    }

    & .TotalPrice {
        & h4 {
            color: var(--base-subtitle);
            font-weight: bold;
            font-size: 1.25rem;
            line-height: 1.3;
        }

    }

    & #CheckoutSubmit {
        border: none;
        color: var(--white);
        background: var(--yellow);
        font-size: 0.875rem;
        line-height: 1.6;
        font-weight: bold;
        padding: 0.75rem 0;
        width: 100%;
        margin-top: 1.5rem;
        border-radius: 6px;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            background: var(--yellow-dark);
        }
    }
`

export const CheckFields = styled.p `
    color: red ;
    margin-top: 1rem;
    text-align: center;
    border: 1px solid #f79393;
    background-color: var(--base-card);
    width:100%;
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;
    transition: 1s;
`

export const EmptyCart = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    opacity: 0.7;
    & svg{
        color: var(--purple);
        
    }
    & p {
        color: var(--base-text);
        font-size:0.875rem;
        line-height: 1.3;
        font-size: 1.2rem;
    }
    & a {
        color: var(--purple);
        font-size:0.875rem;
        line-height: 1.3;
        text-decoration: none;
        &:hover {
            color: var(--purple-dark);
        }
    }
`