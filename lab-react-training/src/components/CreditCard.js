export default function CreditCard(props){
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}=props;
    return(
        
        <div>
            <div className="visa">
                <h3>{type}</h3>
            </div>
            <div className="number">

            </div>
        </div>
        
    )
}

