import styles from './MoreButton.module.css';

const MoreButton = ({ func }) => {
  return (
    <div className="container">
      <button className={styles['button']} onClick={func}>
        Показать больше
      </button>
    </div>
  );
};

export default MoreButton;
