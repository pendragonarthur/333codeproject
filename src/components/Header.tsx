import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>333code</h1>
      </Link>
      <nav>
        <Link href="/events">Eventos</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/artists">Artistas</Link>
      </nav>
    </header>
  );
}
