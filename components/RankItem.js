import style from './RankItem.module.css';
export default function RankItem(props) {
  return (
    <div className={props.theme == 'dark' ? 
    styles.itemDark : styles.itemLight}>
      <div>
        <div className={style.rank}>{props.item.Rank}</div>
      </div>
      <div className={style.country}>
        {
          <img
            src={`https://olympics.com/tokyo-2020/olympic-games/resCOMMON/img/flags/${
              props.item.NOC
            }.png`}
          />
        }
        {/* <img src="https://countryflags.io/br/flat/64.png" /> */}
        {props.item.Team}
      </div>
      <div> {props.item.GoldMedals}</div>
      <div> {props.item.SilverMedals}</div>
      <div> {props.item.BronzeMedals}</div>
      <div> {props.item.Total}</div>
    </div>
  );
}