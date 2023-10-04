import styled from "styled-components";


export const OrderFinishedContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 5rem;
    gap: 3.5rem;

 
`
export const FinishedHeader = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;
    & h2 {
        color: var(--yellow-dark);
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.3;
    }

    & span {
        color: var(--base-subtitle);
        line-height: 1.3;
        font-size: 1.25rem;
    }
`
export const FinishedMain = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const OrderFinishedInfos = styled.div `
    position: relative;
    border: 1px solid transparent;
    border-radius: 6px 36px 6px 36px;
    background: white;

    &::after {
        position: absolute;
        top: -3px; bottom: -3px;
        left: -3px; right: -3px;
        background: linear-gradient(var(--yellow), var(--purple));
        content: '';
        z-index: -1;
        border-radius: 6px 36px 6px 36px;
    }
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;


    & .Address, .Delivery, .Payment  {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.75rem;
    }

    & .Content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    & .AddressIcon, .DeliveryIcon, .PaymentIcon {
        border-radius: 999px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        & svg {
            color: var(--white);
        }
    }
    & .AddressIcon {
        background-color: var(--purple);
    }
    & .DeliveryIcon {
        background-color: var(--yellow);
    }
  
    & .PaymentIcon {
        background-color: var(--yellow-dark);
    }
    

`

