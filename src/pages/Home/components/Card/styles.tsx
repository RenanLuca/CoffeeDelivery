import styled from "styled-components"

export const CoffeeCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    flex: 0 0 256px;
    padding: 1.25rem;

    background: var(--base-card);
    border-radius: 6px 36px 6px 36px;
`
export const CardHeader = styled.div `
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: center;
    margin-top: -2.5rem;
    & img {
        width: 120px;
        height: 120px;
    }

    & span {
        color: var(--yellow-dark);
        font-size: 0.625rem;
        background: var(--yellow-light);
        font-weight: 800;
        line-height: 1.3;

        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        text-transform: uppercase;
        margin-top: 0.75rem;
    }

    & .TagsList {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        margin-top: 0.75rem;
       
    }
`
export const CardMain = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;

    & h3 {
        font-weight: 800;
        font-size: 1.25rem;
        line-height: 1.3;
        color: var(--base-subtitle);
        margin-bottom: 0.5rem;
    }
    & span {
        font-size: 0.875rem ;
        color: var(--base-label);
        line-height: 1.3;
        text-align: center;
    }
`
export const CardFooter = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;


    & .CardFooterPrice {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        & span {
            color: var(--base-text);
            font-size: 0.875rem;
            line-height: 1.3;
        }
        & h4 {
            color: var(--base-text);
            font-size: 1.5rem;
            font-weight: 800;
            line-height: 1.3;
        }
    }

    & .CardFooterCart { 
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;


        & .AddOrRemove {
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
        }

        & .ButtonShoppingCart {
            background: var(--purple-dark);
            border-radius: 6px;
            padding: 0.5rem 0.5rem 0.3rem 0.5rem;
            border: none;
            cursor: pointer;
            &:hover {
                background: var(--purple);
            }

            & svg {
                color: var(--white);
                width: 100%;
            }
        }

    }

`