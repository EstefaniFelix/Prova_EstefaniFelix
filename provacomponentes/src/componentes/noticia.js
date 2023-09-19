function Noticia(props){
    return(
        <div classname="DigaH1">
            <h1> Nome da noticia: {props.nomenot} </h1>
    <p>Noticia: {props.noticia}</p>
        </div>
    )
    }
    export default Noticia