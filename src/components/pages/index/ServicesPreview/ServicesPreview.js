import styles from './ServicesPreview.module.css';

import ServicesList from './ServicesList';

const ServicesPreview = ({ marketingData, developmentData, indexData }) => {
  return (
    <section className={styles['services']}>
      <div className="container">
        <div className={styles['services__wrapper']}>
          <div className={styles['titles']}>
            <div className={styles['titles__title']}>— {indexData.title}</div>
          </div>

          <div className={styles['lists']}>
            <ServicesList servicesData={marketingData} />
            <ServicesList servicesData={developmentData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
