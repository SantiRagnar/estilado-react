import imgLupa from "./img/magnifying_glass_logo 1.png"

function Card({ info }) {

  const styles = {
    contCard: {
      display: "flex"
    },
    card: {
      width: "286px",
      height: "154px",
      left: "184px",
      top: "192px",
      background: "linear-gradient(98.94deg, #BE3B7A 0%, #640D99 55.01%)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "6px",
      padding: "6px",
      display: "flex"
    },
    CardSoldOut: {
      width: "286px",
      height: "154px",
      left: "184px",
      top: "192px",
      background: "linear-gradient(111.87deg, #A6A6A6 0%, #2B2B2B 64.67%)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "6px",
      padding: "6px",
      display: "flex"
    },
    img: {
      width: "166px",
      height: "166px",
      transform: "translate(8px, -6px)",
      borderRadius: "5px",
    },
    imgSoldOut: {
      width: "166px",
      height: "166px",
      transform: "translate(8px, -6px)",
      mixBlendMode: "luminosity",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      borderRadius: "5px",
    },
    titDesc: {
      width: "100%",
      display: "flex",
    },
    tit: {
      margin: "8px 0 4px",
    },
    price: {
      width: "20%",
      display: "flex",
      alignItems: "flex-end",
    },
    soldOut: {
      color: "",
      fontFamily: "Marvel",
      fontStyle: "italic",
      fontWeight: "700",
      color: "#F0141E",
    }

  }

  return (
    <div style={styles.contCard}>
      <div>
        <img style={info.stock_qty != 0 ? styles.img : styles.imgSoldOut} src={info.picture} alt={info.title} />
        <img className="imgLupa" style={styles.img} src={imgLupa} alt={info.title} />
      </div>
      <div style={info.stock_qty != 0 ? styles.card : styles.CardSoldOut}>
        <div style={styles.titDesc}>
          <div style={{ width: "80%", textAlign: "start", paddingLeft: "6px" }}>
            <p style={styles.tit}>{info.title}</p>
            <span style={styles.desc}>Descripcion corta</span>
          </div>
          <div style={styles.price}>
            {info.stock_qty != 0
              ?
              <div>
                <span>Price: </span>
                <span>${info.price}</span>
              </div>
              :
              <div>
                <span style={styles.soldOut}>SOLD OUT</span>
              </div>

            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;