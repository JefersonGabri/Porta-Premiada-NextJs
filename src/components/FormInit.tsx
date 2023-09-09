import React from 'react'
import styles from '../styles/FormInit.module.css'
import Link from 'next/link'

const FormInit = () => {
  const [numerosPorta, setNumerosPorta] = React.useState(0)
  const [portaPremiada, setPortaPremiada] = React.useState(0)
  const [error, setError] = React.useState(true)


  React.useEffect(()=>{
    const temporizador = setTimeout(function closeError() {
      setError(false)
    }, 7000);

    return () => {
      clearTimeout(temporizador);
    };

  },[error])
  return (
    <div className={styles.form}>
      <label htmlFor="numerosPorta">Numeros de portas</label>
      <input type="number" name='numerosPorta' className={styles.numerosPorta} value={numerosPorta} onChange={(e)=>

      setNumerosPorta(
        +e.target.value > 0 ? +e.target.value : 0
      )
      
      }/>
      <label htmlFor="portaPremiada">qual a porta Premiada?</label>
      <input type="number" name='portaPremiada' className={styles.portaPremiada} value={portaPremiada} onChange={
        (e)=>
      setPortaPremiada(
        +e.target.value  <= numerosPorta && +e.target.value > 0 ? +e.target.value : 0 )
    }
      
      />
      <Link onClick={(e)=>{
        if (numerosPorta == 0 || portaPremiada == 0 || +portaPremiada > +numerosPorta) {
          e.preventDefault()
          setError(true)
        }
        return null
      }} href={`/jogo/${numerosPorta}/${portaPremiada}`}>
        <button>Jogar</button>
      </Link>

      {error && <span>O jogo não pode ser iniciado</span>}
    </div>
  )
}

export default FormInit
