import styles from './Benefits.module.css';

const Benefits = ({ benefitsData }) => {
  return (
    <section className={styles['benefits']}>
      <div className="container">
        <div className={styles['benefits__wrapper']}>
          <div className={styles['titles']}>
            <div className={styles['titles__title']}>
              — {benefitsData?.title}
            </div>
            <div className={styles['titles__text']}>
              {benefitsData?.subtitle}
            </div>
          </div>
          <div className={styles['items']}>
            <div className={styles['items__text']}>{benefitsData?.text}</div>
            <div className={styles['items__line']}></div>
            <div className={styles['items__wrapper']}>
              <div className={styles['item']}>
                <div className={styles['item__title']}>
                  {benefitsData?.utp.one.count}
                </div>
                <div className={styles['item__text']}>
                  {benefitsData?.utp.one.text}
                </div>
              </div>
              <div className={styles['item']}>
                <div className={styles['item__title']}>
                  {benefitsData?.utp.one.count}
                </div>
                <div className={styles['item__text']}>
                  {benefitsData?.utp.one.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
