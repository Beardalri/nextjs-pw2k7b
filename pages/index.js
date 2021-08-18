import react, { useState } from 'react';
import RankItem from '../components/RankItem';
import dados from './dados.json';
import styles from './index.module.css';

export default function Home() {
  const [list, setList] = useState(dados);

  function handleFilterByGold() {
    const filteredList = [...dados].filter(item => item.GoldMedals > 0);
    setList(filteredList);
  }

  function handleClearFilter() {
    setList(dados);
  }

  function handleSortByBronzeMedal(){
    const sortedList = [...list]
    .sort((a,b) => a.BronzeMedals - 
    b.BronzeMedals)
    .reverse();
    setList(sortedList);
  }

  return (
    <div>
      <h1> Quadro de Medalhas - Tokio 2020 </h1>
      <div>
        <button onClick={handleFilterByGold}>Somente com Ouro</button>
        <button onClick={handleFilterByGold}>Todos</button>
      </div>
      <div>Resultado: {list.length} itens</div>
      <div>
        <div className={styles.header}>
          <div>#</div>
          <div>Time</div>
          <div onClick={handleSortByOuroMedal}>Ouro</div>
          <div onClick={handleSortByPrataMedal}>Prata</div>
          <div onclick={handleSorteByBrozeMedal}>Bronze</div>
          <div>Total</div>
        </div>

        {dados.map(item => {
          return <RankItem item={item} />;
        })}
      </div>
    </div>
  );
}
