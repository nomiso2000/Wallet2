import React, { Component } from 'react';
import styles from '../PassForm/PassForm.module.css';
import LockIcon from '@material-ui/icons/Lock';

export class PassForm extends Component {
    state = {
        password: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        const { password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}  >
            <label>
                <LockIcon className={styles.LockIcon}/>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={this.handleChange}
                    name='password'
                    placeholder="Пароль"
                    className={styles.PassForm}
                    />            
                </label>
            </form>
        )
    }
} 