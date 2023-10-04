import styled from 'styled-components'


export const CardCheckout = styled.div `
    &:not(:first-child) {
        padding-top: 1.5rem;
    }
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3.125rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--base-button);
    & .CardContent {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1.25rem;


        & .CoffeeCardImg {
            width: 64px;
            height: 64px;

            & img {
                width: 100%;
            }
        }
    }

    & #CoffeeCardPrice {
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.3;
        color: var(--base-text);
    }
    & .CardActions {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        & p {
            color: var(--base-subtitle);
            font-size: 1rem;
            line-height: 1.3;
            
        }
    }

    & .Actions {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0.5rem;
    }

`

export const IncreaseOrDecrease = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    background: var(--base-button);
    border-radius: 6px;
    padding: 0.5rem 0.5rem;


    & button {
        background: transparent;
        border: none;
        color: var(--purple);
        cursor: pointer;
        &:hover {
            color: var(--purple-dark);
        }
    }

    & span {
        color: var(--base-title);
        font-size: 1rem;
        line-height: 1.3;

    }
`

export const Remove = styled.div `
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    background: var(--base-button);
    &:hover {
        background: var(--base-hover);
        & svg {
            color: var(--purple-dark);
        }
    }
   
    & svg {
        color: var(--purple);
    }

    & span {
        color: var(--base-title);
        font-size: 0.75rem;
        line-height: 1.6;
    }
`