import styles from './Modal.module.css';

// Import icons
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ children, status, turnoff }) => {
  return (
    <div
      className={
        status === false
          ? `${styles['modal']} ${styles['close']}`
          : `${styles['modal']}`
      }
    >
      <div className="container">
        <div className={styles['modal__wrapper']}>
          <div className={styles['modal__header']}>
            <div className={styles['modal__header']}>Формая заявки</div>
            <button className={styles['modal__close']} onClick={turnoff}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className={styles['modal__content']}>{children}</div>
          <div className={styles['modal__button']}>footer</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
