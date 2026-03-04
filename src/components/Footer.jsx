import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <div className={styles.sidebar}>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copryright {new Date().getFullYear()} by Wordwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
