import React, { useState } from 'react';
import styles from './NavMenu.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import home from '../../styles/css/icon/home.svg';
import graph from '../../styles/css/icon/NavDiagram.svg';
import usd from '../../styles/css/icon/usd.svg';
import routes from '../../routes';
import Currency from '../Currency';
import Balance from '../Balance';
import mobHome from '../../styles/css/icon/HomeForMob.svg';
import mobStat from '../../styles/css/icon/NavDiagramMob.svg';

function NavMenu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  return (
    <div className={styles.background}>
      <main>
        <section className={styles.main1}>
          <div className={styles.nav}>
            <div className={styles.navAndBlance}>
              <div className={styles.navContainer}>
                <div className={styles.navMD}>
                  <NavLink
                    to={routes.HOME.path}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                  >
                    {windowWidth < 768 ? (
                      <img
                        src={mobHome}
                        alt="home"
                        className={styles.navHome}
                      />
                    ) : (
                      <img src={home} alt="home" className={styles.navHome} />
                    )}
                    <p>Главная</p>
                  </NavLink>
                </div>
                <div className={styles.navMD}>
                  <NavLink
                    to={routes.STATISTIC.path}
                    className={styles.link}
                    activeClassName={styles.statActiveLink}
                  >
                    {windowWidth < 768 ? (
                      <img
                        src={mobStat}
                        alt="graph"
                        className={styles.navGraph}
                      />
                    ) : (
                      <img
                        src={graph}
                        alt="graph"
                        className={styles.navGraph}
                      />
                    )}

                    <p>Статистика</p>
                  </NavLink>
                </div>
                <div className={styles.navMD}>
                  {' '}
                  <NavLink
                    to={routes.CURRENCY.path}
                    className={styles.link}
                    activeClassName={styles.activeLin}
                  >
                    <img src={usd} alt="usd" className={styles.navUsd} />
                  </NavLink>
                </div>
              </div>
              {windowWidth < 768 ? (
                location.pathname === '/statistic' ||
                location.pathname === '/currency' ? null : (
                  <Balance />
                )
              ) : (
                <Balance />
              )}
            </div>
            {windowWidth > 768 && <Currency />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default NavMenu;
