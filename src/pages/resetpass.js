import styles from "../components/reset.module.css";
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';


export default function StudentForm() {
    const [Email, setEmail] = useState('')
    const [NewPass, setNewPass] = useState('')
    const [ConfirmPass, setComfirmPass] = useState('')
    const [flag, setFlag] = useState(false)
    const [resetStatuseErr, setresetstaterr] = useState('')
  
  const reset = () =>{
  
      Axios.post('http://localhost:3000/resetpass',{
        email: Email, 
        newpass: NewPass,
        newpass1: ConfirmPass
        }).then((response) => {
            if (response.data.message === 'Successfully Reset Password'){
              window.location.href='/Login'
            }else{
                setresetstaterr(response.data.message)
                setFlag(true);
            }
          });
    
    
        };
  return (
    
    <div className= {styles.container}> 
        <div className= {styles.form}>
        <h3> Reset Password </h3>
        <div className={styles.txt_field1} >
          <label>Email: </label>
            <input type="text" onChange={(e)=>{setEmail(e.target.value);}} id="resetemail" required></input>
        </div>
        <div className={styles.txt_field2} >
          <label>Password: </label>
            <input type="password" onChange={(e)=>{setNewPass(e.target.value);}} id="resetpass" required></input>
        </div>
        <div className={styles.txt_field3} >
          <label>Confirm Password: </label>
            <input type="password" onChange={(e)=>{setComfirmPass(e.target.value);}} id="resetpass1" required></input>
        </div>
        <div className={styles.StudentformButtons}>
          <a href="/Login"><button className={styles.login}>LOGIN</button></a>
          </div>
          
            {flag &&(<Alert color="primary" variant="danger">{resetStatuseErr}</Alert>)}
        </div>   
    </div>
      

  );
};
