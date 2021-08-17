import react, { useState } from 'react';
import RankItem from '../components/RankItem';
import dados from './dados.json';
import styles from './index.module.css';

export default function Home() {
  const [list, setList] = useState(dados);

  function handleFilterByGold() {
    const filteredList = [...list].filter(x => item.GoldMedals > 0);
    setList(filteredList);
  }

  return (
    <div>
      <h1> Quadro de Medalhas - Tokio 2020 </h1>
      <div>
        <button onClick={handleFilterByGold}>Somente com Ouro</button>
        <button>Todos</button>
      </div>
      <div>Resultado: {list.length} itens</div>
      <div>
        <div className={styles.header}>
          <div>#</div>
          <div>Time</div>
          <div>Ouro</div>
          <div>Prata</div>
          <div>Bronze</div>
          <div>Total</div>
        </div>

        {dados.map(item => {
          return <RankItem item={item} />;
        })}
      </div>
    </div>
  );
}
