import { MapPinLine } from "phosphor-react";
import { BaseInputAdress, CustomerAdress, CustomerAdressMain } from "./styles";
import { useFormContext } from "react-hook-form";
export function AddressForm() {
    const { register, setValue } = useFormContext();

    function checkCEP(event: any) {
        const cep = event.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                setValue('street', data.logradouro);
                setValue('neighborhood', data.bairro);
                setValue('city', data.localidade);
                setValue('state', data.uf);
            });
    }
    return (
        <CustomerAdress>
            <div className="CustomerAdressHeader">
                <MapPinLine size={22} />
                <div>
                    <p>
                        Endereço de Entrega
                    </p>
                    <span>
                        Informe o endereço onde deseja receber seu pedido
                    </span>
                </div>
            </div>
            <CustomerAdressMain>
                <BaseInputAdress
                    id="zip"
                    placeholder="CEP"
                    {...register('zip')}
                    maxLength={9}
                    onBlur={checkCEP}
                />
                    <BaseInputAdress
                    id="street"
                    placeholder="Rua"
                    {...register('street')}
                    
                />
                <BaseInputAdress 
                    id="number" 
                    placeholder="Número"
                    {...register('number')}
                    
                />
                <BaseInputAdress
                    id="complement" 
                    placeholder="Complemento"
                    {...register('complement')}
                    
                />
                <BaseInputAdress 
                    id="neighborhood" 
                    placeholder="Bairro" 
                    {...register('neighborhood')}
                    
                />
                <BaseInputAdress 
                    id="state" 
                    placeholder="UF"
                    {...register('state')}  
                    maxLength={2}
                    
                />
                <BaseInputAdress
                    id="city" 
                    placeholder="Cidade"
                    {...register('city')}
                    
                />
            
            </CustomerAdressMain>
            
        </CustomerAdress>
    )
}