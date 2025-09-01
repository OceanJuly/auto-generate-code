import styles from './page.module.scss';
import ThemeToggle from '@/components/themeToggle/ThemeToggle';
import CheckProcessPassDialog from '@/components/checkProcessPassDialog/CheckProcessPassDialog';

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div></div>
      <div className={styles.rightContent}>
        <CheckProcessPassDialog />
        <ThemeToggle />
      </div>
    </div>
  );
}
