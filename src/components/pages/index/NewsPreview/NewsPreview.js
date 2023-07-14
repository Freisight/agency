import styles from './NewsPreview.module.css';

// Отслеживание изменений в сторе и обновление данных.
import { observer } from 'mobx-react-lite';

// Подключаем слайдер для того, чтобы карточки новостей могли прокручиваться.
import { Swiper, SwiperSlide } from 'swiper/react';

// Импорт компонента карточки новости
import NewsItem from './NewsItem';

// Кнопка прокрутки новостей для мобильных экранов.
import SlidePrevButton from '@/components/common/slider/SlidePrevButton';
import SlideNextButton from '@/components/common/slider/SlideNextButton';

import { useState } from 'react';

const NewsPreview = ({ newsData, indexData }) => {
  const [swiper, setSwiper] = useState('');

  const breakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 3,
    },
  };

  return (
    <div className={styles['news']}>
      <div className="container">
        <div className={styles['wrapper']}>
          <div className={styles['titles']}>
            <div className={styles['title']}>— {indexData.title}</div>
            <div className={styles['subtitle']}>{indexData.text}</div>
          </div>
          <div>
            <Swiper
              modules={[]}
              spaceBetween={30}
              breakpoints={breakpoints}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => {
                setSwiper(swiper);
              }}
            >
              {newsData?.map((news) => {
                return (
                  <SwiperSlide key={news.preview.title}>
                    <NewsItem
                      title={news.preview.title}
                      slug={news.preview.slug}
                      date={news.preview.date}
                    />
                  </SwiperSlide>
                );
              })}

              {swiper.currentBreakpoint <= 1024 ? (
                <div className={styles['buttons']}>
                  <SlidePrevButton />
                  <SlideNextButton />
                </div>
              ) : (
                ''
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(NewsPreview);
