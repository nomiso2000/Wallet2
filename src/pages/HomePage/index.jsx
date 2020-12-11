import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OverkayBlock from '../../components/CoverPressure';
import TransactionsTable from '../../components/Table';
import syles from './HomePage.module.css';
const HomePage = () => {
  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState(false);
  const isAuthentificated = useSelector(state => state.auth.token);
  const handleHide = () => {
    setToggleModal(!toggleModal);
  };
  const show = () => {
    setToggleModal(true);
  };
  return (
    <>
      <section className={syles.mainSection}>
        <div className={syles.table}>
          <TransactionsTable />
        </div>
        <button onClick={show} className={syles.stickyButton}></button>
        {toggleModal && <OverkayBlock hiden={handleHide} />}
      </section>
      <section></section>
    </>
  );
};

export default HomePage;
