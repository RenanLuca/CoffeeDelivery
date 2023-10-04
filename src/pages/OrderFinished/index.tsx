import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { 
    FinishedHeader,
    FinishedMain,
    OrderFinishedContainer,
    OrderFinishedInfos
    }
from "./styles";
import { CardContext } from "../../context/CardContext";
import { useContext } from 'react'
export function OrderFinished() {
    const {dataOrderForm} = useContext(CardContext)
    return (
        <OrderFinishedContainer>
            <FinishedHeader>
                <h2>Uhul! Pedido Confirmado</h2>
                <span>
                    Agora é só aguardar que logo o café chegará até você
                </span>
            </FinishedHeader>
            <FinishedMain>
                <OrderFinishedInfos>
                    <div className="Address">
                        <div className="AddressIcon">
                            <MapPin size={16} weight="fill" />
                        </div>
                       
                        <div className="Content">
                            <span>
                                Entrega em <b>{dataOrderForm.street}, {dataOrderForm.number}</b>
                            </span>
                            <span>
                                {dataOrderForm.city} - {dataOrderForm.state}
                            </span>
                        </div>
                    </div>
                    <div className="Delivery">
                        <div className="DeliveryIcon">
                            <Timer size={16} weight="fill" />
                        </div>
                        <div className="Content">
                            <span>Previsão de entrega</span>
                            <span><b>20 min - 30 min</b></span>
                        </div>
                    </div>
                    <div className="Payment">
                        <div className="PaymentIcon">
                            <CurrencyDollar size={16} weight="fill" />
                        </div>
                        <div className="Content">
                            <span>
                                Pagamento na entrega
                            </span>
                            <span>
                                {dataOrderForm.payment == 'debit' ? <b>Cartão de Débito</b> : null}
                                {dataOrderForm.payment == 'credit' ? <b>Cartão de Crédito</b> : null}
                                {dataOrderForm.payment == 'money' ? <b>Dinheiro</b> : null}
                            </span>
                        </div>
                    </div>
                </OrderFinishedInfos>
                <img src="public\assets\finishedOrder.svg" alt="" />
            </FinishedMain>
        </OrderFinishedContainer>
    )
}