import styled from "styled-components"

export const PaymentMethod = styled.div `
background: var(--base-card);
border-radius: 6px;
padding: 2.5rem;
margin-top: 0.9rem;
width: 100%;
flex: 1;
`
export const PaymentMethodHeader = styled.div `
display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
    & svg {
        color: var(--purple);
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
`
export const PaymentMethodMain = styled.div `
display: flex;
justify-content: center;
align-items: center;
gap: 0.75rem;

& label {
    flex: 1;
    flex-basis: 175px;
}
& label > input {
    visibility: hidden;
    position: absolute;
}
& label > input:checked + div {
        background: var(--purple-light);
        border: 1px solid var(--purple);
    }
& label > input + div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    padding: 1rem;
    background: var(--base-button);
    border-radius: 6px;
    & svg {
        color: var(--purple);
    }
    & span {
        text-transform: uppercase;
        color: var(--base-text);
        font-size: 0.75rem;
        line-height: 1.6;
    }
}
`