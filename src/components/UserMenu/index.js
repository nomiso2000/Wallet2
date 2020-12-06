// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useHistory } from 'react-router-dom';
// import { logOut } from '../../redux/auth/operations';
// import styles from './UserMenu.module.css';

// function UserMenu({
//   avatar = `https://www.flaticon.com/svg/static/icons/svg/3617/3617309.svg`,
// }) {
//   const history = useHistory();
//   const dispatch = useDispatch();
//   let name = useSelector(state => state?.auth?.user?.username);

//   return (
//     <div className={styles.container}>
//       <img src={avatar} alt="" width="32" />
//       <span className={styles.text}>Welcome, {name && name}</span>
//       <button
//         type="button"
//         onClick={() => dispatch(logOut(history))}
//         className={styles.button}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default UserMenu;
