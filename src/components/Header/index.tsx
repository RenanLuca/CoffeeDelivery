import { Logo } from "../Logo";
import { MapPin, ShoppingCart} from 'phosphor-react'
import { Cart, HeaderContainer, Location, LocationAndCart } from "./styles";
import { CardContext } from "../../context/CardContext";
import { useContext } from 'react'
export function Header() {
    const {cartState, dataOrderForm} = useContext(CardContext)
    return (
        <HeaderContainer>
            <a href="/">
                <Logo />
            </a>
            <LocationAndCart>
                <Location>
                    <MapPin size={22} weight="fill"/>
                    {dataOrderForm.city ?
                      <span>{`${dataOrderForm.city}, ${dataOrderForm.state}`}</span>
                    : null}
                   
                </Location>
                <Cart>
                    <span>{cartState.length}</span>
                    <a href="/checkout"><ShoppingCart size={22} weight="fill" href="/checkout" /></a>
                </Cart>
            </LocationAndCart>
        </HeaderContainer>
    )
}