import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CardFooter, CardHeader, CardMain, CoffeeCard } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CardContext, CoffeesType } from "../../../../context/CardContext";



export function Card( { description,id,img,price,tags,title,cartQtd } : CoffeesType) {
    const coffee = {description,id,img,price,tags,title,cartQtd}

    const { onAddToCart } = useContext(CardContext)

    const [quantity, setQuantity] = useState(0)
    
    function handleIncrease() : any {
        setQuantity((state) => state + 1)
    }

    function handleDecrease() : any {
        if (quantity == 0) return
        setQuantity((state) => state - 1)
    }

    function handleAddToCart() {
        if (quantity != 0) {
            onAddToCart(coffee, quantity)
            setQuantity(0)
        }
        return
    }


    return (
        <CoffeeCard>
            <CardHeader>
                <img src={`/assets/coffees/${img}`} alt=""/>
                <div className="TagsList">
                    {tags.map((tag: string) => {
                        return <span>{tag}</span>
                    })} 
                </div>
               
            </CardHeader>
            <CardMain>
                <h3>{title}</h3>
                <span>{description}</span>
            </CardMain>
            <CardFooter>
                <div className="CardFooterPrice">
                    <span>R$</span>
                    <h4>{Intl.NumberFormat().format(price)}</h4>
                </div>
                <div className="CardFooterCart">
                    <div className="AddOrRemove">
                        <button onClick={handleDecrease}>
                            <Minus size={14} weight="bold" />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>
                            <Plus size={14} weight="bold"/>
                        </button>
                    </div>
                    <button className="ButtonShoppingCart" onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>    
                </div>
            </CardFooter>
       
        </CoffeeCard>
        
    )
}