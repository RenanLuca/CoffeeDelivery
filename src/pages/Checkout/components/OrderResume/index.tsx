import React, { useContext, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { CardContext } from '../../../../context/CardContext';
import { currencyFormat } from '../../../../utils/currencyFormat';
import { CoffeeCardCheckout } from '../CardCheckout';
import { OrderContainer, OrderPrices, OrderItens, Order, CheckFields, EmptyCart } from './styles';
import { FormAddressErrors } from '../AddressForm/FormAddressErrors';
import { ListPlus } from 'phosphor-react'

interface TotalPrice {
    totalItemsPrice: number;
    delivery: number;
    total: number;
}

export function OrderResume() {
    const { cartState } = useContext(CardContext);
    const [prices, setPrices] = useState<TotalPrice>({
        totalItemsPrice: 0,
        delivery: 0,
        total: 0,
    });

    useEffect(() => {
        const totalItemsPrice = cartState.reduce(
            (total, cartItem) => total + cartItem.coffee.price * cartItem.quantity,
            0
        );
        const delivery = 3.5;
        const total = totalItemsPrice + delivery;
        setPrices({ totalItemsPrice, delivery, total });
    }, [cartState]);


    return (
        <>
            <Order>
                <h3>Cafés selecionados</h3>
                <OrderContainer>
                    <OrderItens>
                        {cartState.length == 0 ?
                            <EmptyCart>
                                <ListPlus size={56}/>
                                <p>Adicione itens ao Carrinho</p>
                                <a href="/">Volte para a página principal</a>
                            </EmptyCart> 
                        :null}
                        {cartState.map((card, index) => {
                            return (
                                <CoffeeCardCheckout
                                    key={index}
                                    title={card.coffee.title}
                                    img={card.coffee.img}
                                    price={card.coffee.price}
                                    id={card.coffee.id}
                                    quantity={card.quantity}
                                />
                            );
                        })}
                    </OrderItens>
                        {cartState.length != 0 ? 
                               <OrderPrices>
                               <div className="AllPrices">
                                   <div className="TotalItems">
                                       <p>Total de Itens</p>
                                       <span>{currencyFormat(prices.totalItemsPrice)}</span>
                                   </div>
                                   <div className="Delivery">
                                       <p>Entrega</p>
                                       <span>{currencyFormat(prices.delivery)}</span>
                                   </div>
                                   <div className="TotalPrice">
                                       <h4>Total</h4>
                                       <h4>{currencyFormat(prices.total)}</h4>
                                   </div>
                               </div>
                               <a href="/orderfinished">
                                   <button type="submit" id="CheckoutSubmit" >
                                       Confirmar Pedido
                                   </button>
                               </a>
                             
                           </OrderPrices> : null}
                </OrderContainer>
                <FormAddressErrors />
            </Order>
        </>
    );
}