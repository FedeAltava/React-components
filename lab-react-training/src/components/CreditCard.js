export default function CreditCard(props){
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}=props;
    const newNumber = number.split('')
    const newExpirationMonth = (expirationMonth <10)? `0${expirationMonth}`:expirationMonth
    const newExpirationYear = String(expirationYear).slice(-2)
    for(let i =0;i<=11;i++){
        newNumber[i] = "-"
    }
    console.log(newNumber.join(''))
    return(
        
        <div className="creditCardContainer" style={{ backgroundColor: bgColor ,color:color}}>
            <div className="visa">
                <h3>{type}</h3>
            </div>
            <div className="number">
                <p>{newNumber.join('')}</p>
            </div>
            <div className="date">
                <p>{newExpirationMonth}/{newExpirationYear} {bank}</p>
            </div>
            <div className="owner">
                <p>{owner}</p>
            </div>
        </div>
        
    )
}

