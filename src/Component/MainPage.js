import React from 'react'
import styles from './mystyle.module.css'
import Upper from './Upper'
import Lower from './Lower'
const MainPage = () => {
  const styles={
    background:"linear-gradient(rgba(250,0,0,0.5),transparent)",
    height:" 600px",
    fontFamily: "Arial",
    textAlign: "center",
    color:"#e66a6a",
  }
  const headerStyles={
    // height:" 10px",
    fontSize:"30px",
    color:"#d64f4f",
    fontFamily: "Arial",
    textAlign: "center",
  }
  return (
    <>
        <div  className={styles.Page} style={styles}><div style={headerStyles}>Front End Assignment</div>
          <Upper/>
          <Lower/>
        </div>
    </>
  )
}

export default MainPage