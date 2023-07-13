import styles from './Menu.module.css';

// Functions and other
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Icons
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlinePhone } from 'react-icons/ai';

// Components
import Modal from '../Modal/Modal';

const Menu = ({ menuData, timeData }) => {
  const [snowModal, setSnowModal] = useState(false);
  const [snowMenu, setSnowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  // Открывает модальное окно но кнопка "Заказа звонка в меню"
  const openModal = () => {
    setSnowModal(true);
  };

  const closeModal = () => {
    setSnowModal(false);
  };

  // Закрывает и открывает меню по нажатию по кнопке-бургеру.
  const toggleMenu = () => {
    if (snowMenu === false) {
      setSnowMenu(true);
    } else {
      setSnowMenu(false);
    }
  };

  // Подключаем его к каждому элементу кнопок в меню, чтобы при нажатии меню сворачивалось.
  const closeMenu = () => {
    if (snowMenu === true) {
      setSnowMenu(false);
    }
  };

  return (
    <div className={styles['nav']}>
      <div className="container">
        <div className={styles['nav__wrapper']}>
          <Link href="/">
            <div className={styles['nav__logo']}>
              <div className={styles['logo_title']}>
                EXPERT<span>FLOW</span>
              </div>
              <div className={styles['logo_subtitle']}>
                marketing and design
              </div>
            </div>
          </Link>

          <div className={styles['nav__menu']}>
            <ul
              className={
                snowMenu
                  ? `${styles['nav']}  ${styles['nav--active']}`
                  : `${styles['nav']}`
              }
            >
              <li>
                <Link href="/cases">{menuData?.cases.name}</Link>
              </li>
              <li>
                <Link href="/marketing">{menuData?.marketing.name}</Link>
              </li>
              <li>
                <Link href="/development">{menuData?.development.name}</Link>
              </li>
              <li>
                <Link href="/team">{menuData?.team.name}</Link>
              </li>
              <li>
                <Link href="/news">{menuData?.news.name}</Link>
              </li>
              <li>
                <Link href="/contacts">{menuData?.contacts.name}</Link>
              </li>
            </ul>
          </div>

          <button className={styles['nav__mobile-button']} onClick={toggleMenu}>
            <RxHamburgerMenu />
          </button>

          <div className={styles['nav__languages']}>
            <Link href={router.asPath} locale="en">
              English
            </Link>
            <Link href={router.asPath} locale="ru">
              Russian
            </Link>
          </div>

          <div className={styles['nav__phone']}>
            <div className={styles['cta']}>
              <div className={styles['cta__phone']}>+382 68 454 959</div>
              <div className={styles['cta__time']}>{timeData}</div>
            </div>
            <button className={styles['cta__button']} onClick={openModal}>
              <AiOutlinePhone />
            </button>
          </div>

          <Modal status={snowModal} turnoff={closeModal}>
            Тут будет форма заявки
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Menu;
