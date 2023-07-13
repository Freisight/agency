import styles from './ServicesItem.module.css';
import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';

const ServicesItem = ({ name, text, category, slug }) => {
  return (
    <div className={styles['item']}>
      <div className={styles['item__title']}>{name}</div>
      <div className={styles['item__text']}>{text}</div>

      <Link href={`/${category}/${slug}`}>
        <div className={styles['item__link']}>
          <FiArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default ServicesItem;
