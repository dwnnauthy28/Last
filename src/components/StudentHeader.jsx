import styles from "./StudentHeader.module.css";
import logo from "./logo.png";

export const StudentHeader = () => {
    return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="" />
        </div>
        <div className={styles.title}>
        <p>Technological University of the Philippines - Cavite</p>
        </div>
    </div>
    )
}

