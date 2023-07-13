import styles from './IndexHeader.module.css';

const IndexHeader = ({ headerData }) => {
  return (
    <>
      <div className={styles['header']}>
        <div className="container">
          <div className={styles['header__wrapper']}>
            <div className={styles['header__title-block']}>
              <div className={styles['title-block__title']}>
                {headerData?.title}
              </div>
              <div className={styles['title-block__subtitle']}>
                {headerData?.subtitle}
              </div>
            </div>

            <div className={styles['header__quote-block']}>
              <div className={styles['quote-block__text']}>
                {headerData?.quote.text}
              </div>
              <div className={styles['quote-block__author']}>
                {headerData?.quote.author}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexHeader;
