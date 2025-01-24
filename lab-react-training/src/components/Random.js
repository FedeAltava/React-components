export default function Random ({min ,max}){

    const result = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <div className="greeting"> 
            <p>Random value between {min} and {max} = {result}</p>
        </div>
    )
}