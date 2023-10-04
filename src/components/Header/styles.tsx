import styled from 'styled-components'

export const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
`

export const LocationAndCart = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.875rem;
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    border-radius:6px;
    padding: 0.5rem;

    background: var(--purple-light);

    & svg {
        color: var(--purple);
        font-weight: bold;
    }
    & span {
        color: var(--purple-dark);
        font-size: 0,875rem;
        line-height: 1.3;
    }
`

export const Cart = styled.div `
    position: relative;
    border-radius:6px;
    padding: 0.5rem;
    background: var(--yellow-light);
    & span {
        color: var(--white);
        background: var(--yellow-dark);
        font-size: 0.875rem;
        padding: 0.3rem 0.5rem;
        border-radius: 9999px;
        text-align: center;
        position: absolute;
        top: -15px;
        right: -15px;
        font-weight: bold;
    }
    & svg {
        color: var(--yellow-dark);
       
        
    }
 `