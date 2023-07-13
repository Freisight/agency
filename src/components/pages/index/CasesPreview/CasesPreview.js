import styles from './CasesPreview.module.css';

import CasesPreviewItem from './CasesPreviewItem';

// Компоненты для галереи
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CasesPreview = ({ casesData, indexData }) => {
  const breakpoints = {
    // Определение точек перелома (breakpoints) для изменения slidesPerView
    640: {
      slidesPerView: 1, // настройка для экранов шириной 640px и меньше
    },
    768: {
      slidesPerView: 1, // настройка для экранов шириной 768px и меньше
    },
    1024: {
      slidesPerView: 1, // настройка для экранов шириной 1024px и меньше
    },
  };

  return (
    <section className={styles['cases']}>
      <div className="container">
        <div className={styles['cases__wrapper']}>
          <div className={styles['titles']}>
            <div className={styles['titles__title']}>- {indexData?.title}</div>
            <div className={styles['titles__text']}>{indexData?.text}</div>
          </div>

          <div className={styles['slider']}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {casesData.map((item) => {
                return (
                  <SwiperSlide>
                    <CasesPreviewItem caseData={item.preview} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesPreview;
