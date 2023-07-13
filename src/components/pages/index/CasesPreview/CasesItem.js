import styles from './CasesItem.module.css';

import Link from 'next/link';
import Image from 'next/image';

const CasesItem = ({ caseData }) => {
  return (
    <Link href={`cases/${caseData?.seo.slug}`}>
      <article className={styles['case']}>
        <Image
          src={caseData?.image_prev}
          width={1170}
          height={600}
          alt={caseData?.title}
          className={styles['image']}
        />

        <div className={styles['case__wrapper']}>
          <div className={styles['titles']}>
            <div className={styles['titles__title']}>{caseData?.name}</div>
            <div className={styles['titles__type']}>{caseData?.type}</div>
            <div className={styles['titles__text']}>{caseData?.text}</div>
          </div>

          <div className={styles['labels']}>
            {caseData?.label.map((label) => {
              return (
                <div className={styles['labels__label']} key={label}>
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CasesItem;
