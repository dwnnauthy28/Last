import styles from "./StudentForm.module.css";
import Button from "./StudentButton"


export const StudentForm = () => {
  return (
    
    <div className= {styles.container}> 
        <div className= {styles.form}>
        <h3> Student Registration</h3>
        <div className={styles.txt_field} >
          <label>First Name: </label>
            <input type="text" required></input>
        </div>
        <div className={styles.txt_field} >
          <label>Last Name: </label>
            <input type="text" required></input>
        </div>
        <div className={styles.txt_field} >
          <label>Student Id: </label>
            <input type="text" required></input>
        </div>
        <div className={styles.txt_field2} >
          <label>Course: </label>
            <input type="text" required></input>
        </div>
        <div className={styles.txt_field} >
          <label>GSFE Email: </label>
            <input type="text" required></input>
        </div>
        <div className={styles.txt_field3} >
          <label>Birthday: </label>
            <input type="date" required></input>
        </div>
        <div className={styles.StudentformButtons}>
            <a href="/admindash"><Button variant="primary">Submit</Button></a>
            <a href="/admindash"><Button variant="secondary">Cancel</Button></a>
      </div>

        </div>   
    </div>
      

  );
};
