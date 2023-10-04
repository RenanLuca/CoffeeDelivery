import { 
    CheckoutContainer, CheckoutCustomerData,  
} 
from "./styles";
import { AddressForm } from "./components/AddressForm";
import { PaymentForm } from "./components/PaymentForm";
import { OrderResume } from "./components/OrderResume";
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardContext } from "../../context/CardContext";
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function Checkout() {
    const navigate = useNavigate()
    const {onSetDataOrderForm} = useContext(CardContext)
    const newOrderFormValidationSchema = zod.object({
        zip: zod.string().min(1, "Preencha o Cep"),
        street: zod.string().min(1, "Preencha a Rua"),
        number: zod.string().min(1, "Preencha o Número"),
        complement: zod.string().min(1, "Preencha o Complemento"),
        neighborhood: zod.string().min(1, "Preencha o Bairro"),
        city: zod.string().min(1, "Preencha a Cidade"),
        state: zod.string().min(1, "Preencha o Estado").max(2, "Apenas 2 dígitos"),
        payment: zod.string().min(1, "Preencha o Pagamento")
    }) 

    type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

    const newOrderForm = useForm<NewOrderFormData>({
        resolver: zodResolver(newOrderFormValidationSchema),
        defaultValues: {
            zip:"",
            street:"",
            number: "",
            complement: '',
            neighborhood:'',
            city:'',
            state:'',
            payment:''
        }
    })

    const { handleSubmit, reset } = newOrderForm
    const url = encodeURI('https://maps.googleapis.com/maps/api/distancematrix/json?destinations=aracoiaba&origins=saopaulo&key=AIzaSyD9R_zdeOzTk_v8DWEdBglGTZAT8PqUZNY')

    
    useEffect(()=> {
        (async ()=> {
            const response = await fetch(url, {
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' }
            })     
            console.log(response)
        })()
    }, [])

    function handleCreateNewOrder( data : NewOrderFormData) {
        onSetDataOrderForm(data)    
        event?.preventDefault()
        navigate('/orderfinished')
        reset()
        
    }
    return (
        <CheckoutContainer>
             <form onSubmit={handleSubmit(handleCreateNewOrder)}>
                <FormProvider {...newOrderForm}>
                    <CheckoutCustomerData>
                        <h3>Complete seu Pedido</h3>
                        <AddressForm />
                        <PaymentForm />
                    </CheckoutCustomerData>
                    <OrderResume />
                </FormProvider>
             </form> 
        </CheckoutContainer>
    )
}