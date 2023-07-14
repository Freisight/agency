import styles from './MyTeam.module.css';
import MyTeamItem from './MyTeamItem';

const MyTeam = ({ indexData }) => {
  return (
    <section className={styles['ourteam']}>
      <div className="container">
        <div className={styles['wrapper']}>
          <div className={styles['titles']}>
            <div className={styles['title']}>— {indexData?.title}</div>
            <div className={styles['subtitle']}>{indexData?.text}</div>
          </div>
          <div className={styles['items-grid']}>
            <MyTeamItem />
            <MyTeamItem />
            <MyTeamItem />
            <MyTeamItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;
