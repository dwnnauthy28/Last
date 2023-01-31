import styles from "./Header.module.css";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1> CamShots World</h1>
      </div>
      <div>
        <a href="/Homepage"><button className={styles.primary}>Logout &nbsp;<LogoutIcon sx={{ fontSize: 20 }} /></button></a>
      </div>
    </div>
  );
};
export default Header;