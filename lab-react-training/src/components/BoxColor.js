export default function BoxColor({r,g,b}){
    const ColorStyles= {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        border: "1px solid black",
        padding: "10px",
        textAlign: "center"
    };
    return(
        <div style={ColorStyles}>
            <p >rgb({r},{g},{b})</p>
        </div>

    )
}