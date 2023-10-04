import { Minus, Plus, Trash } from "phosphor-react";
import { CardCheckout, IncreaseOrDecrease, Remove } from "./styles";
import { useContext } from "react";
import { CardContext } from "../../../../context/CardContext";
interface CoffeeCardCheckout {
    title: string;
    img: string;
    price: number;
    id: number;
    quantity: number;
}

export function CoffeeCardCheckout({ title, img, price, id, quantity  }: CoffeeCardCheckout)  {
    const { onRemoveCartState, onChangeQuantityCheckout} = useContext(CardContext)

    function handleRemoveCart() {
        onRemoveCartState(id)
    }

    function handleIncreaseQuantity() {
        event?.preventDefault()
        const type = "increase"
        onChangeQuantityCheckout(id, type)
    }
    function handleDecreaseQuantity() {
        event?.preventDefault()
        const type = "decrease"
        onChangeQuantityCheckout(id, type)
    }
    return (
        <CardCheckout>
            <div className="CardContent">
                <div className="CoffeeCardImg">
                    <img 
                        src={`/assets/coffees/${img}`}
                    />
                </div>
                <div className="CardActions">
                    <p>{title}</p>
                    <div className="Actions">
                        <IncreaseOrDecrease>
                            <button onClick={handleDecreaseQuantity}>
                                <Minus size={14} weight="bold" />
                            </button>
                            <span>{quantity}</span>
                            <button onClick={handleIncreaseQuantity}>
                                <Plus size={14} weight="bold"/>
                            </button>
                        </IncreaseOrDecrease>
                        <Remove onClick={handleRemoveCart}>
                            <Trash size={16}/>
                            <span>REMOVER</span>
                        </Remove>
                    </div>
                </div>
            </div>
            <span id="CoffeeCardPrice">
                {Intl.NumberFormat("pt-PT" , {style: "currency", currency:"BRL"}).format(price)}
            </span>
            </CardCheckout>
    )
}

