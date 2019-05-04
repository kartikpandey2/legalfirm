import React from "react"

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "200px",
    height: "200px",
  },
}

const ImageCard = ({ image, label }) => {
  return (
    <div style={styles.container}>
      <img src={image} style={styles.image} />
      <label>{label}</label>
    </div>
  )
}

export default ImageCard
