// import React, { Component } from 'react';
// import styles from '../EmailForm/EmailForm.module.css';
// import EmailIcon from '@material-ui/icons/Email';

// export class EmailForm extends Component {
//     state = {
//         email: '',
//     };

//     handleChange = e => {
//         const { name, value } = e.target;
//         this.setState({
//             [name]: value,
//         });
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//     };

//     render() {
//         const { email } = this.state;
//         return (
//             <form onSubmit={this.handleSubmit} >
//                <EmailIcon className={styles.EmailIcon}/>
//                     <label>
//                     <input
//                     type="email"
//                     value={email}
//                     onChange={this.handleChange}
//                     name='email'
//                     placeholder="E-mail"
//                     className={styles.EmailForm}
//                     />
//                     </label>
//             </form>
//         )
//     }
// }
