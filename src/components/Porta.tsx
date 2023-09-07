import styles from '../styles/Porta.module.css'
import React from 'react'
import PortaModel from '@/models/porta'
import Presente from './Presente'

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}


const Porta = (props: PortaProps) => {
  const porta = props.value
  const selecionada = porta.selecionada && !porta.aberta? styles.selecionada : ''

  const alternarSelecao = () => props.onChange(porta.alternarSelecao())
  const abrir = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }


  return (
    <div className={`${styles.area} `} onClick={alternarSelecao} >
      {porta.temPresente && <Presente />}
      <div className={`${styles.batente}  ${selecionada} ${porta.temPresente ? styles.temPresente : ''}`}>
        <div className={`${styles.porta} ${porta.aberta ? styles.aberta : ''} `}>
          <div className={`${styles.macaneta} `} onClick={abrir}></div>
          <div className={styles.numero}>{porta.numero}</div>
        </div>
      </div>
        <div className={styles.chao}></div>
    </div>

  )
}

export default Porta
