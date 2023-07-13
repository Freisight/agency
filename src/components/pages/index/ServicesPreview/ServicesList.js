import styles from './ServicesList.module.css';

// Импорт компонента модуля
import ServicesItem from './ServicesItem';

const ServicesList = ({ servicesData }) => {
  return (
    <div className={styles['list']}>
      <div className={styles['list__title']}>{servicesData?.name}</div>

      <div className={styles['list__wrapper']}>
        {servicesData.items.map((item) => {
          return (
            <ServicesItem
              key={item.preview.name}
              name={item.preview.name}
              text={item.preview.text}
              category={item.preview.seo.category}
              slug={item.preview.seo.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesList;
