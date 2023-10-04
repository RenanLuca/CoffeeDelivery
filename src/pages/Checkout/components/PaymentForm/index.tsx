import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentMethod, PaymentMethodHeader, PaymentMethodMain } from "./styles";
import { useFormContext } from "react-hook-form";

export function PaymentForm() {
    const { register } = useFormContext()
    return (
        <PaymentMethod>
            <PaymentMethodHeader>
                <CurrencyDollar size={22} />
                <div>
                    <p>Pagamento</p>
                    <span>
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </span>
                </div>
            </PaymentMethodHeader>
            <PaymentMethodMain>
                <label htmlFor="credit">
                    <input 
                        type="radio"  
                        id="credit"
                        value={"credit"}
                        {...register('payment')}
                    />
                    <div>
                        <CreditCard size={22} />
                        <span>
                            Cartão de Crédito
                        </span>
                    </div>
                </label>
                <label htmlFor="debit">
                    <input 
                        type="radio"  
                        id="debit" 
                        value={"debit"}
                        {...register('payment')}
                    />
                    <div>
                        <Bank size={22} />
                        <span>
                            Cartão de Débito
                        </span>
                    </div>
                </label>
                <label htmlFor="money">
                    <input 
                        type="radio"
                        id="money"
                        value={"money"}
                        {...register('payment')}
                    />
                    <div>
                        <Money size={22} />
                        <span>
                            Dinheiro
                        </span>
                    </div>
                </label>
            </PaymentMethodMain>
        </PaymentMethod>
    )
}