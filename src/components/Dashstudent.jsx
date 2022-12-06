import styles from "./Dashstudent.module.css";
import SearchIcon from '@mui/icons-material/Search';


export const Dashstudent
 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input className={styles.input} type="text"></input>
                <button className={styles.icon}><SearchIcon sx={{ fontSize: 20}} /></button>
            </div>
        </div>
    )
}
