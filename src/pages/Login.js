import styles from "../components/Login.module.css";
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.css'

export default function LogForm() {
  const [logUser, setUser] = useState('')
  const [logPass, setPass] = useState('')
  const [flag, setFlag] = useState(false)
  const [logStatuseErr, setlogstaterr] = useState('')
  
  const login = () =>{
  
      Axios.post('http://localhost:3000/signin',{
          username: logUser, 
          password: logPass,
        }).then((response) => {
            if (response.data.message === 'Verified'){
              window.location.href='/Motion_detect'
            }else{
                setlogstaterr(response.data.message)
                setFlag(true);
            }
          });
    
    
        };
  return (
  <div className={styles.container}>
        <div className={styles.form}>
          <h1> Sign In </h1>
          <div className={styles.txt_field}>
            <label>UserName: </label>
            <input type="text" onChange={(e) => { setUser(e.target.value); } } id="loggun" required></input>
          </div>
          <div className={styles.txt_field3}>
            <label>Password: </label>
            <input type="password" onChange={(e) => { setPass(e.target.value); } } id="logpass" required></input>
          </div>

          <div className={styles.StudentformButtons}>
          <button type="submit" onClick={login}>Submit</button>
          </div>

          <div className={styles.forgot}>
            <a href="/resetpass" variant="secondary">Forgot password?</a>
          </div>
          <div className={styles.account}>
            <a href="/register" variant="secondary">Don't have an Account?</a>
          </div>
          {flag && (<Alert color="primary" variant="danger">{logStatuseErr}</Alert>)}
        </div>
      </div>
  );
};
