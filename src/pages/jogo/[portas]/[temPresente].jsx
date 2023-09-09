import styles from '@/styles/Jogo.module.css';
import Porta from '@/components/Porta';
import {useState, useEffect} from 'react';
import  {criarPortas, atualizarPortas } from '@/functions/portas';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Jogo = () => {
  const router = useRouter()
  const [portas, setPortas] = useState([])

  useEffect(()=>{

    const portas = router.query? +router.query.portas : '';
    const temPresente = router.query? +router.query.temPresente : '';

    setPortas(criarPortas(portas, temPresente))

      window.history.pushState({}, 'Título da página', `/`);

  },[router.query])

    function renderizarPortas() {
      return portas.map(porta =>
        <Porta 
        key={porta.numero} 
        value={porta} 
        onChange={novaPorta => {
          setPortas(atualizarPortas(portas, novaPorta))
        }
      }/>
  ) 
}

  return (
    <div className={styles.jogo}>
          <div className={styles.portas}>
          {renderizarPortas()}
    </div>
    <div className={styles.botoes}>
      <Link href={'/'}>
        <button>Home</button>
      </Link>

    </div>
    </div>
  )
}


export default Jogo
