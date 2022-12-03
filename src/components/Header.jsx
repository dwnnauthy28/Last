import styles from "./Header.module.css";
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
    return (
    <div className={styles.container}>
      <div>
        <a><img src="./images/logo.png" alt="logo"/>Technological University of the Philippines - Cavite</a>
      </div>
      <div>
        <a href="/"><button className={styles.primary}>Logout &nbsp;<LogoutIcon sx={{ fontSize: 20 }} /></button></a>
      </div>
    </div>
    )
}