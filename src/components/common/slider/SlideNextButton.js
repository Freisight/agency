import { React } from 'react';
import { useSwiper } from 'swiper/react';

import styles from './SliderButtons.module.css';

import { FiArrowRight } from 'react-icons/fi';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className={styles['buttons__item']}
      onClick={() => swiper.slideNext()}
    >
      <FiArrowRight className={styles['buttons__image']} />
    </button>
  );
}
