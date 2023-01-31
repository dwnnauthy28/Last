import styles from "./Landing.module.css";
// import Link from "next/link";

const Landing = () => {
    return (
    <div className={styles.container}>  
        <div className={styles.btn}>
            <a href="/Login"><button className={styles.login}>LOGIN</button></a>
        </div> 
        <div className={styles.content}>
            <h1>Camera <br/>Automation <br/>Machine <br/>Shots</h1>
            <p>Record Every moments you want to remember</p>
        </div>
    </div>
    );
};
export default Landing;
// <Link href="/"><img src="/home.png" height={25} width={25}/>Home</Link>