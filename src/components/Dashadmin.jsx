import styles from "./Dashadmin.module.css";
import SearchIcon from '@mui/icons-material/Search';


export const Dashadmin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input className={styles.input} type="text"></input>
                <button className={styles.icon}><SearchIcon sx={{ fontSize: 20}} /></button>
                <select name="Course">
                    <option value="1">Course</option>
                    <option value="2">Course</option>
                    <option value="3">Course</option>
                    <option value="4">Course</option>
                </select>
            </div>
            <div>
                <button className={styles.secondary}>Transcribe</button>
            </div>
        </div>

    )
}
