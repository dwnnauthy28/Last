import styles from "../components/SForm.module.css";
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.css'

export default function StudentForm() {
  const [registerUser, setUser] = useState('')
  const [registerEmail, setEmail] = useState('')
  const [registerPass, setPass] = useState('')
  const [registerConfirmpass, setConfirmpass] = useState('')
  const [flag, setFlag] = useState(false)
  const [registerStatuseErr, setRegstaterr] = useState('')
  
  const register = () =>{
  
      Axios.post('http://localhost:3000/register',{
          username: registerUser, 
          email: registerEmail, 
          password: registerPass,
          cpass: registerConfirmpass
      }).then((response)=>{
          console.log(response)
          if (response.data.message == "Successfully Registered"){
          window.location.href='./Login'
          }else{
          setRegstaterr(response.data.message)
          setFlag(true);
          }
          
      })
  
  
      };
  return (
    
    <div className= {styles.container}> 
        <div className= {styles.form}>
        <h3> Registration</h3>
        <div className={styles.txt_field1} >
          <label>UserName: </label>
            <input type="text" onChange={(e)=>{setUser(e.target.value);}} id="regun" required></input>
        </div>
        <div className={styles.txt_field2} >
          <label>Email: </label>
            <input type="text" onChange={(e)=>{setEmail(e.target.value);}} id="regemail" required></input>
        </div>
        <div className={styles.txt_field3} >
          <label>Password: </label>
            <input type="password" onChange={(e)=>{setPass(e.target.value);}} id="regpass" required></input>
        </div>
        <div className={styles.txt_field4} >
          <label>Confirm Password: </label>
            <input type="password" onChange={(e)=>{setConfirmpass(e.target.value);}} id="regpass1" required></input>
        </div>
        <div className={styles.StudentformButtons}>
          <a href="/Login"><button className={styles.login}>LOGIN</button></a>
        </div>
        <div className={styles.account}>
            <a href="/Login" variant="secondary">Already have an account?</a>
          </div>
      {flag &&(<Alert color="primary" variant="danger">{registerStatuseErr}</Alert>)}
        </div>   
    </div>
      

  );
};
