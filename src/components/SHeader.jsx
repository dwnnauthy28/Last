import styles from "./SHeader.module.css";
import logo from "./logo.png";

export const StudentHeader = () => {
    return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="" />
        </div>
        <div className={styles.title}>
        <p>CamShots</p>
        </div>
    </div>
    )
}

