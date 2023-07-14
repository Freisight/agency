import styles from './NewsItem.module.css';

import Link from 'next/link';

import { observer } from 'mobx-react-lite';

import { FiArrowRight } from 'react-icons/fi';

const NewsItem = ({ slug, title, date }) => {
  return (
    <Link href={`/news/${slug}`}>
      <article className={styles['item']}>
        <div className={styles['item__icon']}>
          <FiArrowRight />
        </div>
        <div className={styles['item__title']}>{title}</div>
        <div className={styles['item__date']}>{date}</div>
      </article>
    </Link>
  );
};

export default observer(NewsItem);
