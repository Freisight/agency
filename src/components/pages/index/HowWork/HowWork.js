import styles from './HowWork.module.css';

import Image from 'next/image';

const HowWork = ({ indexData }) => {
  return (
    <section className={styles['howwork']}>
      <div className="container">
        <div className={styles['howwork__wrapper']}>
          <div className={styles['titles']}>
            <div className={styles['titles__title']}>— {indexData?.title}</div>
            <div className={styles['titles__subtitle']}>{indexData?.text}</div>
          </div>

          <div className={styles['content']}>
            <div className={styles['content__person']}>
              <Image
                src="/images/person.jpg"
                width={700}
                height={700}
                alt="Picture of the author"
                loading="lazy"
              />
              <div className={styles['label']}>
                <div className={styles['label__title']}>
                  {indexData?.director.name}
                </div>
                <div className={styles['label__text']}>
                  {indexData?.director.position}
                </div>
              </div>
            </div>

            <div className={styles['content__steps']}>
              {indexData?.steps.map((step) => {
                return (
                  <acticle key={step.number} className={styles['steps__item']}>
                    <div className={styles['item__number']}>{step.number}</div>
                    <div className={styles['text']}>
                      <div className={styles['text__title']}>{step.title}</div>
                      <div className={styles['text__text']}>{step.text}</div>
                    </div>
                  </acticle>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
