import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>

      <div className={styles.info}>
        <p>&copy; 2024 333code. Todos os direitos reservados.</p>
        <p>Contato: contato@333eventos.com</p>
      </div>
    </footer>
  );
}
