import styles from './NewsCatalog.module.css';

// Импорт карточки новости.
import NewsItem from '../index/NewsPreview/NewsItem';

const NewsCatalog = ({ initialNews }) => {
  return (
    <div className="container">
      <div className={styles['wrapper']}>
        {initialNews.map((item) => {
          return (
            <NewsItem
              title={item.preview.title}
              slug={item.preview.slug}
              date={item.preview.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsCatalog;
