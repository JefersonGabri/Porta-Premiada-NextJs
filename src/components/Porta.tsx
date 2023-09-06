import styles from '../styles/Porta.module.css'
import React from 'react'


const Porta = () => {
  const [abriu, setAbriu] = React.useState(false)

  return (
    <div className={styles.area} >
      <div className={`${styles.batente}  `}>
        <div className={`${styles.porta} ${abriu ? styles.aberta : ''}`}>
          <div className={`${styles.macaneta} `} onClick={()=>{
      setAbriu(true)
    }}></div>
          <div className={styles.numero}>3</div>
        </div>
      </div>
        <div className={styles.chao}></div>
    </div>

  )
}

export default Porta
