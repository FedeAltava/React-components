export default function Greetings({lang}){
    let text = "";
    if(lang=== "fr"){
        text = "Bonjour François";
    }else if(lang=== "en"){
        text = "Hello Philips"
    }else if(lang === "de"){
        text = "hallo Ludwig"
    }else if(lang==="es"){
        text = "Hola paco"
    }
    return (

        <div className="greeting">
            <p>{text}</p>
        </div>
    );
}