import { useFormContext } from "react-hook-form";
import { ErrorsContainer } from "./styles";
import { useEffect, useState } from 'react';

export function FormAddressErrors() {
    const { formState } = useFormContext();
    const { errors } = formState;
    const [hasErrors, setHasErrors] = useState(false);
    useEffect(() => {
        const hasError = Object.keys(errors).length > 0;
        setHasErrors(hasError);
    }, [errors]);

    return (
        <ErrorsContainer>
            {hasErrors && (
                <p className="Error">Preencha todos os campos!</p>
                
            )}
        </ErrorsContainer>
    );
}