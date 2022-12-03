import styles from "./Landing.module.css";
// import Link from "next/link";

export const Landing = () => {
    return (
    <div className={styles.container}>    
        <div className={styles.image}>
            <img src="./images/logo.png" alt="logo"/>
        </div>
        <div className={styles.content}>
            <h1>Technological <br/> University of the <br/> Philippines -<br/> Cavite </h1>
            <p>ISO 9001:2015 CERTIFIED | TÜV SÜD PSB-PH 100 01 0028</p>
            <a href="/login"><button className={styles.login}>LOGIN</button></a>
        </div>
    </div>
    )
}