import styles from './MyTeamItem.module.css';

const MyTeamItem = ({ data }) => {
  return (
    <article className={styles['item']}>
      <div className={styles['item__photo']}>1</div>
      <div className={styles['item__info']}>
        <div className={styles['item__name']}>Sergei Petrov</div>
        <div className={styles['item__position']}>Creative Director</div>
      </div>
    </article>
  );
};

export default MyTeamItem;
