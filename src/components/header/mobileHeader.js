import React from "react"
import Button from "@material-ui/core/Button"

const styles = {
  header: {
    background: `white`,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
  },
  container: {
    padding: `1rem 1.0875rem`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2196F3",
    color: "white",
  },
}

const MobileHeader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div>Logo</div>
        <div>
          <Button style={styles.button}>Call Us</Button>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
