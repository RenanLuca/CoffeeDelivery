export function currencyFormat( number: number) {
    return  Intl.NumberFormat("pt-PT" , {style: "currency", currency:"BRL"}).format(number)
}