import styles from './NewsSingle.module.css';

// Компонент для фото превью новости.
import Image from 'next/image';

// Компоненты для галереи
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Карточка новостей
import NewsItem from '../index/NewsPreview/NewsItem';

// Кнопки прокрутки
import SlidePrevButton from '@/components/common/slider/SlidePrevButton';
import SlideNextButton from '@/components/common/slider/SlideNextButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NewsSingle = ({ currentData, interfaceData, lastNews }) => {
  const [swiper, setSwiper] = useState('');

  const breakpoints = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 2,
    },
  };

  const breakpointsNews = {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  };

  return (
    <>
      <header className={styles['news-header']}>
        <div className="container">
          <div className={styles['news-header__wrapper']}>
            <div className={styles['news-header__subtitle']}>
              — {interfaceData.catHeaders.news.title}
            </div>
            <div className={styles['news-header__title']}>
              {currentData.full.title}
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        {!currentData?.full.date || (
          <div className={styles['data']}>
            <div className={styles['data__item']}>{currentData?.full.date}</div>
          </div>
        )}
      </div>

      <section className={styles['news-text']}>
        <div className="container">
          <div className={styles['news-text__wrapper']}>
            <div
              className={styles['news-text__text']}
              dangerouslySetInnerHTML={{ __html: currentData?.full.text }}
            />
          </div>
        </div>
      </section>

      <section className={styles['news-slider']}>
        <div className="container">
          <div className={styles['news-slider__wrapper']}>
            <div className={styles['titles']}>
              <div className={styles['title']}>
                — {interfaceData.blockHeaders.gallery.title}
              </div>
              <div className={styles['subtitle']}>
                {interfaceData.blockHeaders.gallery.subtitle}
              </div>
            </div>

            <div className={styles['news-slider__slider']}>
              <Swiper
                modules={[]}
                spaceBetween={15}
                breakpoints={breakpoints}
                onSwiper={(swiper) => {
                  setSwiper(swiper);
                }}
                onSlideChange={(swiper) => {
                  setSwiper(swiper);
                }}
              >
                {currentData.full.images.map((image) => {
                  return (
                    <SwiperSlide
                      key={image}
                      style={{ width: '100%', height: '400px' }}
                    >
                      <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                        alt={currentData.full.title}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <div className={styles['news-last']}>
        <div className="container">
          <div className={styles['news-last__wrapper']}>
            <div className={styles['titles']}>
              <div className={styles['title']}>
                — {interfaceData.blockHeaders.lastNews.title}
              </div>
              <div className={styles['subtitle']}>
                {interfaceData.blockHeaders.lastNews.subtitle}
              </div>
            </div>

            <div className={styles['news-last__items']}>
              <Swiper
                modules={[]}
                spaceBetween={30}
                breakpoints={breakpointsNews}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => {
                  setSwiper(swiper);
                }}
              >
                {lastNews?.map((news) => {
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

                {swiper.currentBreakpoint <= 1024 ? <SlidePrevButton /> : ''}

                {swiper.currentBreakpoint <= 1024 ? <SlideNextButton /> : ''}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSingle;
