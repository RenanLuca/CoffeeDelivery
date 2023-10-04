import { createContext, useEffect, useState } from "react";
import dataCoffee from '../../data/TypeCoffee/data.json'
import { Coffee } from "phosphor-react";

export type CoffeesType = {
    id: number
    img: string
    tags: [string]
    title: string
    price: number
    description: string
    cartQtd: number
}
  
interface dataOrderForm {
  zip:string,
  street:string,
  number: string,
  complement: string,
  neighborhood:string,
  city:string,
  state:string,
  payment:string
}
interface CardContextType {
    catalogCoffees: CoffeesType[],
    onAddToCart: (coffee : CoffeesType, quantity: number) => void
    cartState: ICart[]
    onRemoveCartState: (id: number) => void
    onChangeQuantityCheckout: (id: number, type: string) => void
    onSetDataOrderForm: (data: dataOrderForm) => void
    dataOrderForm: dataOrderForm
}




const catalogCoffees: CoffeesType[] = dataCoffee as CoffeesType[]

export const CardContext = createContext({} as CardContextType);


interface CardContextProviderProps {
    children: React.ReactNode;
}

export type ICart = {
    coffee: CoffeesType,
    quantity: number
}   
const initialValueDataOrder = {
  zip:'',
  street:'',
  number: '',
  complement: '',
  neighborhood:'',
  city:'',
  state:'',
  payment:''
}

export function CardContextProvider({ children }: CardContextProviderProps) {

    const [dataOrderForm, setDataOrderForm] = useState<dataOrderForm>(initialValueDataOrder)
    const [cartState, setCartState] = useState<ICart[]>([])

    useEffect(() => {
        const itemsCartString = localStorage.getItem('ItemsCart');
        if (itemsCartString) {
            const parsedItemsCart = JSON.parse(itemsCartString);
            setCartState(parsedItemsCart);
        }
        const localeDataUser = localStorage.getItem('LocaleDataUser');
        if (localeDataUser) {
            const parsedLocaleDataUser = JSON.parse(localeDataUser);
            setDataOrderForm(parsedLocaleDataUser);
        }
    }, []);

    function onAddToCart(coffee: CoffeesType, quantity: number) {
        const cartExists = cartState.find(card => card.coffee.id === coffee.id);
      
        if (cartExists) {
          const updatedCart = cartState.map(card => {
            if (card.coffee.id === coffee.id) {
              card.quantity += quantity;
            }
            return card;
          });
      
          setCartState(updatedCart);
        } else {
          const updatedCart = [...cartState, { coffee, quantity}];
          setCartState(updatedCart);
        }
    }

    useEffect(() => {
        if(cartState) {
            localStorage.setItem('ItemsCart', JSON.stringify(cartState));
        } 
 
    }, [cartState]);

    function onChangeQuantityCheckout(id: number, type: string) {
        const updatedCart = cartState.map(card => {
            if (card.coffee.id === id) {
              if (type === "increase") {
                return { ...card, quantity: card.quantity + 1 };
              } else if (type === "decrease" && card.quantity > 1) {
                return { ...card, quantity: card.quantity - 1 };
              }
            }
            return card;
          });
          setCartState(updatedCart);
    }

    function onRemoveCartState(id: number) {
         const newCartState = cartState.filter(card => {
            return card.coffee.id!== id
         }) 
        
         setCartState(newCartState);
    }

    function onSetDataOrderForm(data: dataOrderForm) {
      setDataOrderForm(data)
      setCartState([])
      localStorage.setItem('LocaleDataUser',JSON.stringify(data))
    }
    return (
        <CardContext.Provider
         value={{
            catalogCoffees,
            onAddToCart,
            cartState,
            onRemoveCartState,
            onChangeQuantityCheckout,
            onSetDataOrderForm,
            dataOrderForm
            
         }} 
        >
            {children}
        </CardContext.Provider>
    )
}
