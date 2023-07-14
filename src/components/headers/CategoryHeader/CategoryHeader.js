import styles from './CategoryHeader.module.css';

import { observer } from 'mobx-react-lite';

const CategoryHeader = ({ data }) => {
  return (
    <div className={styles['cat-header']}>
      <div className="container">
        <div className={styles['cat-header__wrapper']}>
          <div className={styles['cat-header__title']}>— {data?.subtitle}</div>
          <div className={styles['cat-header__subtitle']}>{data?.title}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(CategoryHeader);
