import { Banner } from "./components/Banner";
import { 
    CatalogContainer,
    HomeContainer
    }
from "./styles";
import { Card } from "./components/Card";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
export function Home() {
    const {catalogCoffees} = useContext(CardContext)
    return (
      
        <HomeContainer>
            <Banner />
            <h2>Nossos cafés</h2>
            <CatalogContainer>     
                {catalogCoffees.map((card) => {
                    return (
                        <Card
                            id={card.id}
                            key={card.id}
                            img={card.img}     
                            tags={card.tags}
                            title={card.title}
                            price={card.price}
                            description={card.description}
                            cartQtd={card.cartQtd}
                        />
                    )
                })}
            </CatalogContainer>
        </HomeContainer>    
    )
}