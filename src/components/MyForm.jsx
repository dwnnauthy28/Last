import styles from "./MyForm.module.css"
import Button from "./SecondBtn"

export const MyForm = () => {
  return (
    
      <div className={styles.container}>
      <div className= {styles.form}>
        <h3> University Logbook</h3>
        <h2> User Authentication</h2>
        <div className={styles.txt_field} >
          <label>Username: </label>
            <input type="text" required></input>
        </div>
        <div className={styles.txt_field} >
          <label>Password: </label>
            <input type="Password" required></input>
        </div>
        <div className={styles.txt_field} >
          <label>Birthdate: </label>
            <input type="date" required></input>
        </div>
        <div className={styles.formButtons}>
        <a href="/admindash"><Button variant="primary">Log In</Button></a>
        <a href="/studentreg"><Button variant="secondary">Sign In</Button></a>
      </div>
        </div>   
      </div>

  );
};

