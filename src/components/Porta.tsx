import styles from '../styles/Porta.module.css'
import React from 'react'

const Porta = (props) => {
  const [abriu, setAbriu] = React.useState(false)
   const selecionada = props?.selecionada ? styles.selecionada : ''
  return (
    <div className={styles.area} >
      <div className={`${styles.batente} ${selecionada ? styles.selecionada : ''} `}>
        <div className={`${styles.porta} ${abriu ? styles.aberta : ''}`}>
          <div className={`${styles.macaneta} ${selecionada ? styles.selecionada : ''}`} onClick={()=>{
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
