import styled from "styled-components";


export const BannerContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 3.5rem;
    margin-bottom: 6.75rem;
    margin-top: 5.875rem;
    
    & h1 {
        color: var(--base-title);
        font-size: 3rem;
        line-height: 1.3;
        text-align: top;
        margin-bottom: 1rem;
        font-weight: 900;
    }
    & p {
        color: var(--base-subtitle);
        font-size: 1.25rem;
        margin-bottom: 4.125rem;
    }
    & .img {
        flex-grow: 1;
        flex-basis: 480px;
    }
    & .img img {
        width: 100%;
    }
`
export const BannerInfos = styled.div `
    flex-basis: 37.5rem;
    flex-grow: 1;
    flex-shrink: 1;
`

export const BaseBulletPoints = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    & span {
        color: var(--base-text);
        line-height: 1.3;
    }
    & svg {
        color: var(--white);
       
    }
    & div {
        border-radius: 999px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
 `

 export const BulletPointCart = styled(BaseBulletPoints) `
    div {
        background: var(--yellow-dark);
    }

 `
 export const BulletPointTimer = styled(BaseBulletPoints) `
     & div {
        background: var(--yellow);
    }

`
export const BulletPointPackage = styled(BaseBulletPoints) `
     & div {
        background: var(--base-text);
    }
  
 `
 export const BulletPointCoffee = styled(BaseBulletPoints) `
     & div {
        background: var(--purple);
    }

`
 export const BannerInfosBulletPoints = styled.div `
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2.5rem;
    grid-template-rows: 1fr 1fr ;
    row-gap: 1.25rem;
    

 `
// export const BannerContainer = styled.div `
    
// `
// export const BannerContainer = styled.div `
    
// `