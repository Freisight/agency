import { React } from 'react';
import { useSwiper } from 'swiper/react';

import styles from './SliderButtons.module.css';

import { FiArrowLeft } from 'react-icons/fi';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className={styles['buttons__item']}
      onClick={() => swiper.slidePrev()}
    >
      <FiArrowLeft className={styles['buttons__image']} />
    </button>
  );
}
