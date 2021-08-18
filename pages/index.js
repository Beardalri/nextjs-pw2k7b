import react, { useState } from 'react';
import RankItem from '../components/RankItem';
import dados from './dados.json';
import styles from './index.module.css';

export default function Home() {
  const [list, setList] = useState(dados);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState

  useEffect(() => {
    setTimeout(() => {
      //setCount (count + 1); //PIOR
      setCount(prevState => prevState + 1); //MELHOR
    }, 1500);
  }, [list]);
  //OUTRA FORMA DE USAR
  //useEffect(function() {}, []);

  function handleFilterByGold() {
    try {
      const filteredList = [...dados].filter(item => item.GoldMedals > 0);
      setList(filteredList);
      catch
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
      <div>Resultado: {list.length} itens ({count})
      </div>
      <div>
        <div className={styles.header}>
          <div>#</div>
          <div>Time</div>
          <div onClick={handleSortByGoldMedal}>Ouro</div>
          <div onClick={handleSortBySilverMedal}>Prata</div>
          <div onclick={handleSorteByBrozeMedal}>Bronze</div>
          <div>Total</div>
        </div>

        {dados.map(item => {
          return <RankItem theme={theme} item={item} />;
        })}
      </div>
    </div>
  );
}
