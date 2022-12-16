import Card from "./Card";
import datosTarjetas from "./example.json"

function Tarjetas(){

  const styles = {
    flex: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    }
  }

  console.log({datosTarjetas})

  return(
    <div style={styles.flex}>
      {datosTarjetas.map((dato)=>(
        <Card info={dato}/>
      ))}
    </div>
  )
}

export default Tarjetas;